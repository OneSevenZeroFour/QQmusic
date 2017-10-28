import React from "react";
import "../CSS/searchbox.css"

class Xsearchbox extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	isshow: false,

	    }
	    this.show=()=>{
	      this.setState({
	      	isshow: true
	      })
	    }
	    this.close=()=>{
	      this.setState({
	      	isshow: false
	      })

	    }
	}
	render() {
	    return (
	      <div className="searchbox1">
	      			<form id="search_form" method="get" action="#" onSubmit={this.submit}>
		                <input onClick={this.show} className="search_input" type="search" autoComplete="off" autoCorrect="off" placeholder="搜索歌曲、歌单、专辑"/>

		            </form>
		            <span className="icon icon_search">搜索</span>
		            <div onClick={this.close} className="search_bar" style={{display:this.state.isshow?"block":"none"}}>
		            	取消
		            </div>
					
	      </div>  
	    )
  }
}

export default Xsearchbox;