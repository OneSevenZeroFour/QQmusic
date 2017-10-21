import {connect} from "react-redux"
import React from "react";

class ChildA extends React.Component {
	constructor(props){
		super(props);
		this.sendName=(e)=>{
			this.props.sendName(e)
		}
		this.sendSkill=(e)=>{
			this.props.sendSkill(e)
		}
	}
  render() {
    return (
    	<div>
	    	<input onChange={this.sendName}/>
	      	<div>{this.props.name}</div>
	      	<input onChange={this.sendSkill}/>
	      	<div>{this.props.skill?this.props.skill:"childA组件"}</div>
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
})(ChildA);