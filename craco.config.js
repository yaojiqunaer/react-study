// https://craco.js.org/docs/getting-started/
const { whenProd, getPlugin, pluginByName, whenDev } = require('@craco/craco')
const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: (webpackConfig) => {
            let cdn
            whenDev(() => {

            })
            whenProd(() => {
                webpackConfig.externals = {
                    // key: 不参与打包的库名
                    // value: CDN文件中的全局变量名
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
                cdn = {
                    js: [
                        'https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/cjs/react.production.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/cjs/react-dom.production.min.js'
                    ],
                    css: [

                    ]
                }
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