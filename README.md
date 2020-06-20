# webpack - study

## 命令

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