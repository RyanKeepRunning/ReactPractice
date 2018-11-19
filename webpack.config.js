const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new htmlWebpackPlugin({
	template: path.join(__dirname,'/src/index.html'),
	filename: 'index.html'
})


//Webpack was design based on node API.
module.exports = {
	mode: 'development',   //打包入口src ->index.js，输出文件dist->main.js

	plugins: [
		htmlPlugin
	],

//加?modules可以为css样式表启用模块化
	module: {//所有第三方模块的配置规则
		rules: [//第三方匹配规则
		{test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},
		{test:/\.css$/,use:['style-loader','css-loader']},
		{test:/\.(ttf|woff|woff2|eot|svg)$/, use:'file-loader'},
		{test:/\.scss$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]','sass-loader']}
		]	
	}, 

	resolve: {
		extensions: ['.js','.jsx','.json'],//表示这几个后缀名可以不写
		alias: {
			'@': path.join(__dirname,'./src')
		}
	}

};	
