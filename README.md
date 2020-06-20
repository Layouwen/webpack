# webpack - study

## 初始配置

1. 初始化

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

2. 设置模式

创建webpack.config.js文件，选择模式
- development 开发模式
- production 发布模式

```js
module.exports = {
    mode: '模式'
}
```

3. 打包

```bash
./node_modules/.bin/webpack
或
npx webpack
```

4. 设置目标文件(webpack.config)

- 进入位置
entry: '路径'
- 输出位置
默认dist
- 输出名
filename: '名字'

> 设置打包hash
> filename: '[name].[contenthash].js'

5. 设置build(package)

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

6. 安装html-webpack-plugin

```bash
yarn add html-webpack-plugin --dev
```

设置模板(webpack.config)

