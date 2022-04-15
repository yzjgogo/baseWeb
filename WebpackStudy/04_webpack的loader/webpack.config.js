const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'//参考url-loader和大于limit的图片加载路径问题.png，给所有的url前面追加'dist/'，适用于当前index.html不在dist里的情况
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
            //npm install --save-dev css-loader(@2.0.2) (--force) 括号代表如有必要
            //npm install --save-dev style-loader(@0.23.1) (--force) 括号代表如有必要
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //对比css的loader，use用的是字符串数组，less的loade，use用的是对象数组，对象数组更灵活，如果有需要可以给对象配置更多参数(下面的url-loader就用到了更多参数)
            //less需要用到三个loader：顺序是1：less-loader加载less文件；2：css-loader加载less转化的css文件；3：style-loader渲染css样式
            //less-loader的安装 npm install less(@3.9.0) less-loader(@4.1.0) --save-dev (--force) 括号代表如有必要,可见既要安装less也要安装less-loader
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
            // npm install --save-dev url-loader@1.1.2 --force
            // npm install file-loader@3.0.3 --save-dev --force
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //limit：10000，如果要访问的图片小于10000bite则这个图片以base64的方式加载，不会参与打包被打包到dist里(看考图片小于limit大小的图片加载方式是base64.png)
                            //如果要访问的图片大于10000bite，则这个图片不会以base64的方式加载，而是会被打包到dist目录下，且需要依赖file-loader(安装即可),又因为目前index.html不在dist里
                            //因此可参考图片'大于limit的图片加载路径问题.png'解决
                            limit: 10000,
                            //给开发时的图片打包到dist里后的图片命名，看考'大于limit的图片加载路径问题.png'和'大于limit值的图片命名.png'
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
        ],
    }
}