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
import Xhome from "./components/home.jsx"

ReactDOM.render(
	<Router>
	<Provider store={store}>
  <div>
  	<Xhome/>
    <Route exact path="/taoge/:id" component={Xtaoge}></Route>
    
   </div>
   </Provider>
</Router>, document.getElementById("demo"))




