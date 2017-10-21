import $ from "jquery";

const SongList = function() {};
SongList.prototype = {
  getSongList: (url, self) => {
    $.ajax({
      type: "get",
      async: false,
      url: url,
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback: "JsonCallback",
      scriptCharset: 'GBK', //设置编码，否则会乱码
      success: function(data) {
        self.setState({songlist: data.songlist})
        console.log(self.state.songlist);
      },
      error: function() {
        alert('fail');
      }
    });

    return this;
  }
}

export default SongList;
