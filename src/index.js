import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js"
import {Provider} from "react-redux"
import "./CSS/base.css"
import {HashRouter as Router, Route, Link, Redirect,IndexRoute} from 'react-router-dom'

import RankList from './component/RankList.jsx'
import Toplist from './component/Toplist.jsx'

ReactDOM.render(
	<Router>
  		<Provider store={store}>
	  		<div>
			    <div className="mod_header">
			    	<div className="header" style={{width:"100%",backgroundColor: "#31c27c",height:"132px"}}>
			    		<div className='music_logo'>QQ音乐</div>
			    		<a href="javascript:;" className="btn_download">下载APP</a>
			    	</div>
			    </div>
                <Route path="/ranklist" component={RankList}></Route> 
                <Route exact path="/toplist/:id" component={Toplist}></Route> 
			</div>
  		</Provider>
	 </Router>
	, document.getElementById("demo"))
