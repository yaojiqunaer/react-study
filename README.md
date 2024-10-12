# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prepare your environment

### Install Npm & Node

``` shell
node -v
npm -v
```

If you don't have Node installed, you can download it from [Nodejs.org](https://nodejs.org/en/).
If you don't have npm installed, you can download it from [Npmjs.org](https://www.npmjs.com/get-npm).

### Config your mirror

``` shell
npm install -g cnpm --registry=https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
```

### `npm install -g create-react-app`

If you have a global installation of create-react-app, you can use it to create new projects


### `npx create-react-app my-app`

This will create a new react app in the directory my-app

## Libraries

### `npm install sass -D`

[sass](https://www.sass.hk/docs/) is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

### `npm install antd --save`

[antd](https://ant-design.antgroup.com/docs/react/getting-started-cn) is UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.

### `npm install react-router-dom`

[react-router-dom](https://reactrouter.com/en/main) is a routing library for React that allows you to declaratively define your routes and handle navigation within your application.

### `npm install @craco/craco -D`

[craco](https://craco.js.org/docs/getting-started/) customize your configurations ESLint, Babel, PostCSS, and many more with just a single configuration file at the root of your project.

1. you need create a file named `craco.config.js` in the root of your project
   ``` jsx
   // https://craco.js.org/docs/getting-started/
   const path = require('path')
   module.exports = {
       webpack: {
           alias: {
               '@': path.resolve(__dirname, 'src')
           }
       }
   }
   ```
2. if you use VSCode IDE, you can create file `jsconfig.json` that lets IDE implement the automatic association function after the `@` symbol
   ``` json
   {
       "compilerOptions": {
           "baseUrl": "./",
           "paths": {
               "@/*": [
                   "src/*"
               ]
           }
       }
   }

### `npm install axios`

[axios](https://axios-http.com/docs/intro) is a simple promise based HTTP client for the browser and node.js.

### `npm install react-redux`

This will install the react-redux package, which is a library that allows you to use Redux in your project

### `npm install redux`

This will install the redux package, which is a library that allows you to use Redux in your project

### Others

https://ant.design/docs/react/recommendation-cn


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
