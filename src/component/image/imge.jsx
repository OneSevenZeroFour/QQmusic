import {connect} from "react-redux"
import React from "react";
import './style.css'
import Lyric from 'lyric-parser'
import $ from "jquery";
class Img extends React.Component {
    constructor(props){
        super(props);
        this.state={
          currentLyric:null,
          currentLineNum: 0,
          playingLyric: '',
        }
    }
  render() {
    return (
      <div>
          <img src={'http://imgcache.qq.com/music/photo/album_300/'+this.props.imgid%100+'/300_albumpic_'+this.props.imgid+'_0.jpg'} style={{width:"100%",height:"40%"}} ref='image' id='image'/>
      </div>
    )
  }
  componentDidMount(){
    this.props.sendImg()
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    sendImg() {
      dispatch({type: "SETIMAGE",image:document.getElementById('image').src})
    }
  }
})(Img);