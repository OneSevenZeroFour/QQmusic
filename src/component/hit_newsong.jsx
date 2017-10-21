import {connect} from "react-redux"
import React from "react";

import $ from "jquery";

console.log("$",$);


class HitNewSong extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
    	<section id="HitNewSong" className="hit-new-song">
	    	1
	    </section>
    )
  }
  componentDidMount(){
    console.log("1");
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
})(HitNewSong);