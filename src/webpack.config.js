var webpack = require('webpack');


module.exports = {
    devtool: "source-map",
    entry: "./index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath:"/"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    watch: true,
    devServer: {
        contentBase: "/",
        inline: true,
        port: 12345
    }
}

var http = require("http");
var express = require("express");
var app = express();
app.use(express.static('./public'));
app.get("/get", function(req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    http.request({
        hostname: "c.y.qq.com",
        path: '/v8/fcg-bin/fcg_v8_toplist_cp.fcg?topid=' + req.query.id,
        port: 80,
        method: "GET"
    }, function(response) {
        var data = "";
        response.on("data", function(chunk) {
            data += chunk
        })
        response.on("end", function() {
            res.send(data)
        })
    }).on('error', (e) => {
        console.log(`错误信息: ${e.message}`);
        res.send("网络故障")
    }).end();
})
app.get("/geci",function(req,response){
    response.setHeader("Access-Control-Allow-Origin","*");
    http.get("http://ustbhuangyi.com/music/api/lyric?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&needNewCode=0&categoryId=10000000&pcachetime=1508832114648"+"&songmid="+req.query.songmid,function(res){
        var data = "";
        res.on("data",function(chunk){
            data+=chunk
        })
        res.on("end",function(){
            console.log("请求成功")
            response.send(JSON.stringify({
                data
            }));
        })
    })
});
app.listen(12345);
console.log("已开启服务器，请访问 —— localhost:12345")