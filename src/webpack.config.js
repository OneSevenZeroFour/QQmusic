module.exports = {
  devtool:"source-map",
  entry:"./index.js",
  output:{
    path:__dirname+"/public",
    filename:"bundle.js"
  },
  module: {
    loaders:[{
			test: /\.js[x]?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},{
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader'
    }]
  },
  devServer:{
    contentBase:"./public",
    inline:true,
    port:12345
  }
}

// var http = require('http')
// var express = require('express')
// var app = express()
// app.get('/search',function(req,res){
//   response.setHeader("Access-Control-Allow-Origin", "*"");
//   http.get("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=124&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1508898784130",function(res){
//     var data='';
//     res.on('data',function(chunk){
//       data+=chunk
//     })
//     res.on('end',function(){
//       console.log('请求成功')
//       response.send(JSON.stringify({data}))
//     })
//   })
// })
//   app.listen(12345);
//   console.log("ok")

