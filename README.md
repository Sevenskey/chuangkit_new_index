## 关于

### Vue版本

由于 Vue@2.1.0 的 transition effects 有 bug，故本项目采用 Vue@2.1.10。

## 运行

```
# 打包和编译PC端JS及CSS
npm run build-pc

# 打包和编译移动端JS及CSS
npm run build-phone

# 部署到本地，端口为2333
# PC端：localhost:2333
# 移动端：localhost:2333/index.phone.html
# 单元测试：localhost:2333/test
npm run server
```

## 参与开发

### 目录/文件说明

- bin \- 编译、压缩后的CSS，打包过的JS
- src \- less、JS源码
- test \- 各模块的单元测试
- data \- 页面需要的静态数据
- index.html \- 应用页面
- main.js \- 启动入口
- Makefile \- less编译脚本
- webpack.config.js \- JS打包配置

### 编写新模块

- 将模块JS代码放在`./src/js`中，如果是 Vue 插件，文件应命名为`vue.*.js`
- 在`./test`中编写测试例，测试例目录名称应与模块文件名一致（不包含扩展名）
- 测试例目录的结构可参照`./test/TEST-TEMPLATE`

### 注释

无论是对代码还是对commit，一定要编写**清晰、明了、易懂**的注释。建议尽量使用中文。

### 提交commit

相同类别、目的的更新应打包到一个commit中。
