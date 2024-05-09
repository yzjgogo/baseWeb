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
            //对应package.json -> devDependencies -> style-loader,css-loader
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //对比css的loader，use用的是字符串数组，less的loader，use用的是对象数组，对象数组更灵活，如果有需要可以给对象配置更多参数(下面的url-loader就用到了更多参数)
            //less需要用到三个loader：顺序是1：less-loader加载less文件；2：css-loader加载less转化的css文件；3：style-loader渲染css样式
            //less-loader的安装 npm install less(@3.9.0) less-loader(@4.1.0) --save-dev (--force) 括号代表如有必要,可见既要安装less也要安装less-loader
            //对应package.json -> devDependencies -> style-loader,css-loader,less-loader
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

            /**
             图片打包关键要用到 file-loader 或url-loader，其中 url-loader 与 file-loader 功能基本一致，只不过 url-loader 能将小于某个大小的图片进行base64格式的转化处理
             * */
            // npm install --save-dev url-loader@1.1.2 --force
            // npm install file-loader@3.0.3 --save-dev --force
            //对应package.json -> devDependencies -> url-loader和file-loader

            //这里演示的是加载CSS中的图片，加载js中的图片请参考'101_在js中加载图片_先看04在css中用url-loader加载图片'
            //参考：https://blog.csdn.net/shrimp6/article/details/123967239
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //limit：10000，如果要访问的图片小于10000bite则这个图片以base64的方式加载，不会参与打包被打包到dist里(参考图片'小于limit大小的图片加载方式是base64.png')
                            //如果要访问的图片大于10000bite，则这个图片不会以base64的方式加载，而是会被打包到dist目录下，且需要依赖file-loader(安装即可),又因为目前index.html不在dist里
                            //因此可参考图片'大于limit的图片加载路径问题.png'解决
                            limit: 10000,
                            //给开发时的图片打包到dist里后的图片命名，看考'大于limit的图片加载路径问题.png'和'大于limit值的图片命名.png'
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                    //file-loader也可以
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         // limit: 10000,file-loader没有limit这个用法
                    //         name: 'img/[name].[hash:8].[ext]'
                    //     },
                    // }
                ]
            },
            //默认情况下，我们开发时如果使用了es6语法，则使用webpack打包后再dist/下产生的打包后的js代码仍然是es6语法，这样的话可能
            //部分浏览器就无法兼容，因此babel-loader就出现了，babel-loader可以将我们开发时写的es6代码打包为老的js代码，这样就能
            //兼容更多的浏览器。验证:src/main.js里用到了const，在使用babel-loader前我们打包后在dist/bundle.js里能搜索到const关
            // 键字，使用babel-loader后，再次打包后在dist/bundle.js里就搜索不到const了，而是用var代替了
            //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015 (--force)，这里没有用webpack官网的babel-loader
            //的安装方式，而是用视频里老师的方式，自己找官网看看\
            //对应package.json -> devDependencies -> babel-loader,babel-core,babel-preset-es2015

          //官网：https://webpack.js.org/loaders/
          //官网：https://babeljs.io/repl
          //官网：https://babeljs.io
            {
                test: /\.js$/,
                // exclude: 排除
                // include: 包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env'] 官网的方式
                        presets: ['es2015']//对应安装命令里的babel-preset-es2015
                    }
                }
            }
        ],
    }
}