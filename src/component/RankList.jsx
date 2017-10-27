import {connect} from "react-redux"
import React from "react";

import HitNewSong from "./hit_newsong.jsx"

let style ={
  fontSize:"3rem"
}

class RankList extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
    	<article id="RankList" className="rank-list transition-In" style={style}>
        <HitNewSong/>
	    </article>
    )
  }
}

export default connect((state) => {
  return state
})(RankList);