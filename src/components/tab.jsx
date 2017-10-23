import React from "react";
import "../CSS/tab.css"
import Xrecommand from "./recommand.jsx"
import Xtop from "./top.jsx"
import Xsearch from "./search.jsx"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

class NavJustified extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      isactive: 'first',
	     
	    }
	    this.active=(e)=>{
	      this.setState({isactive: e.target.getAttribute("name")})
	    }
	}
  render() {
    return (
      <div>
        <ul className='hdtab'>
        	<li>
        	<Link to="/recommand" onClick={this.active} name="first" className={
        		 this.state.isactive == 'first'?'active': ''
        	}>推荐</Link>
        	</li>
        	<li ><Link to="/top" onClick={this.active} name="second" className={
        		 this.state.isactive == 'second'?'active': ''
        	}>排行榜</Link>
        	</li>
        	<li ><Link to="/search" onClick={this.active} name="third" className={
        		 this.state.isactive == 'third'?'active': ''
        	}>搜索</Link>
        	</li>
        </ul>
        
        <Route exact path="/recommand" component={Xrecommand}></Route>
		<Route exact path="/top" component={Xtop}></Route>
		<Route exact path="/search" component={Xsearch}></Route>
        
        
      </div>
    )
  }
}

export default NavJustified;
