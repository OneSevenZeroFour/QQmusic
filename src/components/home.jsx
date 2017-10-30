import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import "../CSS/base.css"
import Xtab from "./tab.jsx"
import Xrecommand from "./recommand.jsx"
import Xtop from "./top.jsx"
import Xsearch from "./search.jsx"



class Xhome extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
	    <div className="mod_header">
	    	<div className="header" style={{width:"100%",backgroundColor: "#31c27c",height:"132px"}}>
	    		<div className='music_logo'>QQ音乐</div>
	    		<a href="javascript:;" className="btn_download">下载APP</a>
	    	</div>
	    	<Xtab />
	    </div>
		)
	}
}

export default Xhome;