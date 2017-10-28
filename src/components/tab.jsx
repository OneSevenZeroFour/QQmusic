import React from "react";
import "../CSS/tab.css"
import Xrecommand from "./recommand.jsx"

import RankList from '../component/RankList.jsx'
import Toplist from '../component/Toplist.jsx'
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
        	<Link to="/" onClick={this.active} name="first" className={
        		 this.state.isactive == 'first'?'active': ''
        	}>推荐</Link>
        	</li>
        	<li ><Link to="/ranklist" onClick={this.active} name="second" className={
        		 this.state.isactive == 'second'?'active': ''
        	}>排行榜</Link>
        	</li>
        	<li ><Link to="/search" onClick={this.active} name="third" className={
        		 this.state.isactive == 'third'?'active': ''
        	}>搜索</Link>
        	</li>
        </ul>
       
        <Route exact path="/" component={Xrecommand}></Route>
		<Route path="/ranklist" component={RankList}></Route> 
        <Route exact path="/toplist/:id" component={Toplist}></Route> 
		<Route exact path="/search" component={Xsearch}></Route>
        
        
      </div>
    )
  }
}

export default NavJustified;
