import {connect} from "react-redux"
import React from "react";
import './style.css'
import Lyric from 'lyric-parser'
import $ from "jquery";
class Geci extends React.Component {
    constructor(props){
        super(props);
        this.state={
          currentTime:'',
          playingLyric: '',
          lyric: null,
          afterlyric:[],
          currentIndex:0
        }
    }

    f(a){
      return a.slice(3)
   }
   b(c){
    if(c.indexOf("]")){
      return c.slice(9)
    }
  }


  render() {
    return (
      <div id="lyric">
      {this.f(this.props.geci.split('[')).map((item,index)=>{
        return <p key={index} className='lyric-item ' >{this.b(item)}</p>
      })
      }
      </div>
    )
  }

}
export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    sendName(event) {
      dispatch({type: "SETNAME",name:event.target.value})
    },
    sendSkill(event) {
      dispatch({type: "SETSKILL",skill:event.target.value})
    }
  }
})(Geci);