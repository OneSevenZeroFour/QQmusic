var webpack = require('webpack');


module.exports = {

    devtool: "source-map",
    entry: "./index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader'
    }
    ]
    },
    watch: true,
    devServer: {
        contentBase: "./public",
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
app.listen(12345);
console.log("已开启服务器，请访问 —— localhost:12345")

