const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    /**
        在这里引入各种loader
     webpack目前来看默认只有处理js文件的能力，默认并不具备处理css文件，图片等的能力，如果希望webpack能处理这些文件，则需要引入对应的loader
     这些loader都是开发时依赖，其版本号都配置在package.json的devDependencies里
     * */
    module: {
        rules: [
            // css-loader：用于加载css文件
            // style-loader：用于渲染css文件，将样式作用到DOM中
            //使用多个loader时，顺序是从右向左，这里就是先用css-loader再用style-loader
            //参考图片css-loader和style-loader引入顺序.png
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
}