// https://craco.js.org/docs/getting-started/
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
const path = require('path')
// 防止env文件暴漏到浏览器
require('dotenv').config()

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: (webpackConfig, { env }) => {
            let cdn = { js: [], css: [] }
            whenProd(() => {
                webpackConfig.externals = {
                    // key: 不参与打包的库名
                    // value: CDN文件中的全局变量名
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
                cdn.js = [
                    'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
                    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js'
                ]
            })
            // 修改HtmlWebpackPlugin插件的cdn地址
            const { isFound, match } = getPlugin(
                webpackConfig,
                pluginByName('HtmlWebpackPlugin')
            )
            if (isFound) {
                match.options.cdn = cdn
            }

            return webpackConfig
        }
    }
}