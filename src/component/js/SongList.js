import $ from "jquery";

const SongList = function() {};
SongList.prototype = {
    //old way
    getSongList: function(url, self, listTitle, imgUrl) {
        if (sessionStorage.getItem(url)) {
            let data = JSON.parse(sessionStorage.getItem(url));
            self.setState((prevState) => {
                prevState.songList.push({ listTitle: listTitle, listIMGUrl: imgUrl, song: data })
                return { songList: prevState.songList }
            })
        } else {
            $.ajax({
                type: "get",
                async: false,
                url: url,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "JsonCallback",
                scriptCharset: 'GBK', //设置编码，否则会乱码
                success: function(data) {
                    self.setState((prevState) => {
                        prevState.songList.push({ listTitle: listTitle, listIMGUrl: imgUrl, song: data.songlist })
                        sessionStorage.setItem(url, JSON.stringify(data.songlist));
                        return { songList: prevState.songList }
                    })
                    console.log(self);
                },
                error: function() {
                    alert('fail');
                }
            });
        }
        return this;
    },
    //new way
    getCurrnetSongList: function(self) {
        if (sessionStorage.getItem("TopList")) {
            let data = JSON.parse(sessionStorage.getItem("TopList"));
            self.setState((prevState) => {
                console.log(data);
                return { songList: data }
            })
        } else {
            $.ajax({
                type: "get",
                async: false,
                url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "MusicJsonCallback",
                success: function(data) {
                    self.setState((prevState) => {
                        console.log(data.data.topList);
                        sessionStorage.setItem("TopList", JSON.stringify(data.data.topList));
                        return { songList: data.data.topList }
                    })
                },
                error: function() {
                    alert('请检查网络！');
                }
            });
        }
        return this;
    },
    listenCountFilter: function(val) {
        return (val / 10000).toFixed(1) + "万"
    },
    getTopListFromID: function(id) {
        if (sessionStorage.getItem('ID' + id)) {
            let data = JSON.parse(sessionStorage.getItem('ID' + id));
            console.log(data);
        } else {
            $.ajax({
                type: "get",
                async: false,
                url: "http://localhost:12345/get",
                data: { id },
                success: function(data) {
                    console.log(JSON.parse(data));
                    if(data==="网络故障" || data ===" ")return;
                    sessionStorage.setItem('ID' + id, data);
                },
                error: function() {
                    alert('请检查网络！');
                }
            });
        }
        return this;
    }
}

export default SongList;