import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js"
import {Provider} from "react-redux"
import "./CSS/base.css"
import Xtab from "./components/tab.jsx"
import Xrecommand from "./components/recommand.jsx"
import Xtop from "./components/top.jsx"
import Xsearch from "./components/search.jsx"
import Xtaoge from "./components/taoge.jsx"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

ReactDOM.render(
	<Router>
	<Provider store={store}>
  	<div>
    <div className="mod_header">
    	<div className="header" style={{width:"100%",backgroundColor: "#31c27c",height:"132px"}}>
    		<div className='music_logo'>QQ音乐</div>
    		<a href="javascript:;" className="btn_download">下载APP</a>
    	</div>
    	<Xtab />
    </div>

   <Route exact path="/taoge" component={Xtaoge}></Route>
    
   </div>
   </Provider>
</Router>, document.getElementById("demo"))