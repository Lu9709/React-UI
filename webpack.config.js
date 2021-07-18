const path = require('path')
module.exports = {
  mode:"production",
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    //根据操作系统类型，将两个地址连接
    library: 'React-UI', //库名
    libraryTarget: "umd",// 库格式

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
}