import {connect} from "react-redux"
import React from "react";
import './style.css'
class Mini extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isplaying:false
    }
  }
  componentWillReceiveProps(nextProps){
    this.props.sendIsplaying(nextProps.isplaying)
  }
  componentDidMount(){
    console.log(this)
  }
  toggle(){
      if(document.getElementById('time')!=null){
        console.log(1)
         this.state.isplaying=!this.state.isplaying
         if(this.state.isplaying===true){
          console.log(2)
            document.getElementById('time').play()
            this.setState({isplaying:true})
            this.props.sendIsplaying(this.state.isplaying)
            console.log(this)
         }else{
          console.log(3)
          document.getElementById('time').pause()
          this.setState({isplaying:false})
          this.props.sendIsplaying(this.state.isplaying)
          console.log(this)
         }
      }
    }
  render() {
    return (
      <div id="play-bar" style={{if(className='player'){display:'none'}}} >
          <audio src={this.props.song}></audio>
              <img src={this.props.image} className="play-bar-image-container" style={{width:'37.5px',height:'37.5px',borderRadius: '5px',display:'inline-block',paddingTop:'10px'}}/>
          <img src={this.props.isplaying?"../assets/icon-pause.png":"../assets/icon-play.png"} onClick={()=>this.toggle()} style={{width: '20px',height: '20px',paddingRight:'15px' ,cursor: 'pointer',float:'right',paddingTop:'20px'}}/>
      </div>
    )
  }
}
export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    sendIsplaying(val){
      dispatch({type:"SETISPLAYING",isplaying:val})
    }
  }
})(Mini);