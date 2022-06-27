console.log("xxxxx")

document.writeln('<h2>你好啊,李银44443334!</h2>')

/**
 https://blog.csdn.net/shrimp6/article/details/123967239
 * */


/**没有使用webpack时，这种方式可以正常加载图片*/
// var img = new Image();
// img.src = '../images/1.jpg';  //直接引用图片路径
// document.body.appendChild(img);



/**使用了webpack后，需要按如下先导入图片路径，再加载图片：
 因为Webpack并不知道’…/images/1.jpg’是一张图片，如果要正常打包的话需要先将图片资源加载进来，然后再将其作为图片路径添加至图片对象
 * */
import imgSrc3 from './yzj/elephant_7.jpg'

var img3 = new Image();
img3.src = imgSrc3;
img3.width = 150
img3.height =300
document.body.appendChild(img3);


import imgSrc2 from './yzj/shs_guide_logo.png'

var img2 = new Image();
img2.src = imgSrc2;
img2.width = 150
img2.height =300
document.body.appendChild(img2);


//这个是加载超大图片导致webview不但内存回收直至内存溢出无响应的问题，先不管
// import imgSrc from './yzj/paper.png'
//
// var img = new Image();
// img.src = imgSrc;
// img.width = 150
// img.height =300
// document.body.appendChild(img);



document.writeln('<h2>^^^^^^^^^^^^^^^^^^^^^^^^^^^^</h2>')

