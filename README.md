# 荆棘鸟文学社高三特刊

## 开发
1. 依赖环境
- Node.js v16.20.2
- volta
1. 建议使用 [volta](https://volta.sh/) 安装 [Node.js](https://nodejs.org/)
```sh
volta install node@16
```
2. 安装依赖
```sh
npm i
```
3. 本地预览
```sh
npm run docs:dev
```
4. 构建静态页面。构建完成的网页会保存在 ``src\.vuepress\dist``
```sh
npm run docs:build
```
