
## 本次学习采用的技术
react react-router mock sass
## 配置ant design 按需加载

## 配置sass 
需要安装'css-loader', 'sass-loader'
并在webpack.config.dev，webpack.config.prod 文件中添加
exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.sass$/],
{
  test: /\.sass$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
}


