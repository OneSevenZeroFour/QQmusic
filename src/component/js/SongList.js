import $ from "jquery";

const SongList = function() {};
SongList.prototype = {
    getSongList: function(url, self, listTitle, imgUrl) {
        if(sessionStorage.getItem(url)){
            let data=JSON.parse(sessionStorage.getItem(url));
            self.setState((prevState) => {
                prevState.songList.push({listTitle: listTitle, listIMGUrl: imgUrl, song: data})
                return {songList:prevState.songList}
            })
        }
        else{
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
                        prevState.songList.push({listTitle: listTitle, listIMGUrl: imgUrl, song: data.songlist})
                        sessionStorage.setItem(url, JSON.stringify(data.songlist));
                        return {songList:prevState.songList}
                    })
                    console.log(self);
                },
                error: function() {
                    alert('fail');
                }
            });
        }
        return this;
    }
}

export default SongList;
