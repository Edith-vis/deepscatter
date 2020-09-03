const path = require("path");
var htmlwp = require('html-webpack-plugin');


module.exports = {
  entry: "./src/deepscatter.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    library: 'deepScatter',
    libraryTarget: 'umd',
    filename: "deepScatter.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /(node_modules)/
    }]
  },
  plugins: [
    new htmlwp({
      title: '首页', //生成的页面标题,
      filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，,
      template: 'index.html' //根据index.html这个模版来生成（这个文件请程序员自己生成）
    })
  ]

};