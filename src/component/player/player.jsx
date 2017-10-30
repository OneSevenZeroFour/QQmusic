import {connect} from "react-redux"
import React from "react";
import $ from "jquery";
import Images from "../image/imge.jsx"
import Geci from "../geci/geci.jsx"
import {Base64} from 'js-base64'
import './style.css'
class Player extends React.Component {
    constructor(props){
        super(props);
        this.state={
          id:this.props.match.params.id,
          imgid:this.props.match.params.imgid,
          image:'',
          song:'',
          geci:'',
          duration:'',
          du:'',
          currentTime:'',
          cu:'',
          indicatorPosition:'',
          isplaying:false
        }
        this.toggle = ()=>{
          if(document.getElementById('time')!=null){
             this.state.isplaying=!this.state.isplaying
             if(this.state.isplaying===true){
                document.getElementById('time').play()
                this.setState({isplaying:true},function(){
                  this.props.sendIsplaying(this.state.isplaying)
                })
                // this.props.dispatch({type:"SETISPLAYING",isplaying:this.state.isplaying})
             }else{
              document.getElementById('time').pause()
              this.setState({isplaying:false},function(){
                this.props.sendIsplaying(this.state.isplaying)
              })
              // this.props.dispatch({type:"SETISPLAYING",isplaying:this.state.isplaying})
             }

          }
        }
    }


    render() {
      return (
      <div className='player'>
        <Images imgid={this.state.imgid} />
        <div className="progress-bar-group">
          <div className="progress-bar">
            <div className
            ="progress" style={{width:this.state.indicatorPosition+'%'}}></div>
            <div className
            ="indicater" style={{left:this.state.indicatorPosition+'%'}}></div>
          </div>
          <div className="time-indicater">
            <span>{this.state.currentTime}</span>
            <span>{this.state.duration}</span>
          </div>
        </div>
        <Geci geci={this.state.geci} currentTime={this.state.currentTime} />
        <div className="music-ctrl">
          <ul>
            <li><img src="../assets/icon-like.png" /></li>
            <li><img src="../assets/icon-shangyiqu.png"/></li>
            <li onClick={this.toggle}><img src={this.props.isplaying?"../assets/icon-pause.png":"../assets/icon-play.png"} id='bo'/ ></li>
            <li><img src="../assets/icon-xiayiqu.png"/></li>
            <li><img src="../assets/icon-list.png"/></li>
          </ul>
        </div>
        <audio    id='time'  src={'http://ws.stream.qqmusic.qq.com/'+this.state.id+'.m4a?fromtag=46'}></audio>
      </div>
      )
    }

   componentDidMount(){
    var self=this;
    setTimeout(function(){
        self.setState({duration:parseInt(document.getElementById('time').duration/60)+":"+parseInt(document.getElementById('time').duration%60)})
        self.setState({du:document.getElementById('time').duration})
        console.log(document.getElementById('time').duration)
    }, 10000)
    $.ajax({
        url:"http://localhost:12345/geci",
        type:'get',
        data:{
            songmid:self.props.match.params.songmid,
        },
        success:function(res){
           console.log(Base64.decode((JSON.parse(JSON.parse(res).data)).lyric))
           self.setState({geci:Base64.decode((JSON.parse(JSON.parse(res).data)).lyric)})
        }
    })
    document.querySelector('audio').addEventListener('timeupdate',(e)=>{
      this.setState({currentTime:parseInt(e.target.currentTime/60)+':'+parseInt(e.target.currentTime%60)})
      this.setState({cu:e.target.currentTime})
      this.setState({indicatorPosition:this.state.cu/this.state.du*100})
    })
    this.props.sendSong()
    this.props.sendBo()
    this.props.sendIsplaying()
   }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    sendSong() {
      dispatch({type: "SETSONG",song:document.getElementById('time').src})
    },
    sendBo() {
      dispatch({type: "SETBO",bo:document.getElementById('bo').src})
    },
    sendIsplaying(val){
      dispatch({type:"SETISPLAYING",isplaying:val})
    }
  }
})(Player);