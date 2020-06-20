# webpack - study

## 一、使用方法

开发

```bash
yarn start
```

发布

```bash
yarn build
```

## 二、初始配置

### 初始化

```bash
npm init -y
```

```bash
yarn add webpack webpack-cli --dev
```

查看版本
```bash
./node_modules/.bin/webpack --version
或
npx webpack --version
```

### 设置模式

创建webpack.config.js文件，选择模式
- development 开发模式
- production 发布模式

```js
module.exports = {
    mode: '模式'
}
```

### 打包

```bash
./node_modules/.bin/webpack
或
npx webpack
```

### 设置目标文件(webpack.config)

- 进入位置
entry: '路径'
- 输出位置
默认dist
- 输出名
filename: '名字'

> 设置打包hash
> filename: '[name].[contenthash].js'

### 设置build(package)

```js
"scripts":{
    "build": "rm -rf dist && npx webpack"
}
```

使用

```bash
npm run build
或
yarn build
```

### 安装html-webpack-plugin

```bash
yarn add html-webpack-plugin --dev
```

设置模板(webpack.config)

```js
var HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [new HtmlWebpackPlugin({
    title: 'test - 首页',
    template: 'src/assets/index.html'
})]
```

在模板那设置同步title

```html
<title><%= htmlWebpackPlugin.options.title %></title>
```

### 引入css文件

```bash
yarn add css-loader --dev
yarn add style-loader --dev
yarn add mini-css-extract-plugin
```

设置配置文件(webpack.config)

方法1：

```js
module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    }]
}
```

方法2：

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

plugins: {
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false,
    })
}

use: [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
        }
    },
    'css-loader',
]
```

### 安装webpack-dev-server

```bash
yarn add webpack-dev-server --dev
```

配置文件(webpack.config)

```js
devServer: {
    contentBase: './dist',
},
```

配置package
```json
"scripts": {
    "start": "webpack-dev-server",
},
```

### 引入SCSS

```bash
yarn add sass-loader dart-sass --dev
```

设置配置文件(webpack.config)

```js
module: {
    rules: [{
        test: /\.scss$/i,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('dart-sass')
                }
            }
        ]
    }, ]
}
```

### 引入Less

```bash
yarn add less --dev
yarn add less-loader --dev
```

设置配置文件(webpack.config)

```js
rules: {
    test: /\.less$/,
    loader: ['style-loader', 'css-loader', 'less-loader']
},
```

### 引入Stylus