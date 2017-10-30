var express=require('express')
var app=express()
var http=require('http')

//获取歌单详情页
app.get("/singdetail",function(req,response){
    response.setHeader("Access-Control-Allow-Origin","*");
    http.get("http://ustbhuangyi.com/music/api/getCdInfo?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&type=1&json=1&utf8=1&onlysong=0&platform=yqq&hostUin=0&needNewCode=0"+"&disstid="+req.query.disstid,function(res){
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

//获取歌词
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

app.listen(10086);
console.log("121")