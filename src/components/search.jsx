import React from "react";
import "../CSS/searchbox.css"
import "../CSS/search.css"
import {connect} from "react-redux"
import axios from 'axios'
import $ from "jquery" 

class Xsearch extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	isshow: false,
	    	isvalue:"",
	    	pageNo: 1,
	    	totalCount: 0,
	    	songList: [],
	    	isSearch: true,
	    	isCanGet: true,
	    	isRemindDivShow:true,
	    	recordList: [],
	    	isrecordList:true
	    }
	    this.submit= ()=>{
	    	return false
	    }
	    this.show=()=>{
	      this.setState({
	      	isshow: true,
	      	isRemindDivShow:true,
	      	isrecordList:true
	      })

	    }
	    this.close=()=>{
	      this.setState({
	      	isshow: false,
	      	isvalue:"",
	      	isRemindDivShow:true,
	      	isrecordList:false
	      })
	       
	    }
	    this.showvalue=(e)=>{
	    	this.setState({
	    		isvalue:e.target.value,
	    	})

	    }
	}	
		//数据搜索
		getSearhListAjax(){
    		let self = this;
    		this.setState({
	            isRemindDivShow:false,
	            isrecordList:false
	        }); 
	        this.addSearchRecord(document.getElementsByClassName('search_input')[0].value);
    		let offset = (this.state.pageNo - 1) * 20;
	    	let searchText = document.getElementsByClassName('search_input')[0].value;
	    	let isSearch = this.state.isSearch;
	    	if (this.state.isCanGet){
		    	self.setState({
	                isCanGet: false,
	            });

	            if (this.state.isSearch) {
	                self.setState({
	                    songList: []
	                });
	              
	            }
	           
		    	axios.get(`https://api.imjad.cn/cloudmusic/?type=search&offset=${offset}&s=${searchText}`).then((response) => {
	                self.setState({
	                    isCanGet: true,
	                    totalCount: response.data.result.songCount,
	                    songList: response.data.result.songs,
	                    isSearch: true
	                });
	               
	            }).catch(function (error) {
	                self.setState({
	                    isCanGet: true,
	                });
	                
	            });
	    	}
	    }

	    //监听键盘事件
	    keyboardListener(event) {
	        if (event.keyCode === 13) {
	        	this.setState({
	                isRemindDivShow:false
	            });
	        	this.addSearchRecord(document.getElementsByClassName('search_input')[0].value);
	            this.getSearhListAjax();
	            
	        }
	    }

	    //热搜
	    fastSearch(e){
	    	
	    	document.getElementsByClassName('search_input')[0].value=e.target.innerText;
	        this.setState({
	            isRemindDivShow:false,
	        });
	         this.addSearchRecord(e.target.innerText);
	        this.show();
	        this.getSearhListAjax();
	    }

	    //根据搜索记录搜索
	   	SearchRecord(e){
	   		
	   		document.getElementsByClassName('search_input')[0].value=e.target.innerText;
	        this.setState({
	            isRemindDivShow:false,
	        });
	         this.addSearchRecord(e.target.innerText);
	        this.show();
	        this.getSearhListAjax();
	   	}

	    //添加搜索记录
	    addSearchRecord(recordStr) {
	        let recordList=this.state.recordList;        
	        const isCanAdd = !recordList.some((item) => {
	            return item === recordStr;
	        });
	        if (isCanAdd&&recordStr!=='') { 
	            recordList.unshift(recordStr);
	        }
	        this.setState({
	            recordList
	        });
	        localStorage["yqq_search_history"] = this.state.recordList.join(",");
	    }

	    //移除记录
	    removeRecord(record) {
	    	
	        const recordList = this.state.recordList.filter((item) => {
	            return record !== item;
	        });
	        this.setState({
	            recordList,
	            isCanGet: true
	        });
	        localStorage["yqq_search_history"] = recordList.join(",");        
	    }

	    //移除所有历史记录
	    clearRecord(){
	        localStorage["yqq_search_history"]="";
	        this.setState({
	            recordList:[]
	        });
	    }

	    //下拉加载更多数据
	    getMoreSearchList(event) {
	    	console.log(666)
	        var scrollHeight = event.target.scrollHeight;
	        var scrollTop = event.target.scrollTop;
	        var clientHeight = event.target.clientHeight;
	        if (scrollHeight - scrollTop - clientHeight < 10) {
	            if (this.state.totalCount > this.state.songList.length) {
	                if (this.state.isCanGet) {
	                    this.setState({
	                        pageNo: this.state.pageNo + 1,
	                        isSearch: false
	                    }, function () {
	                        this.getSearhListAjax();
	                    });
	                }
	            }
	        }
	    }

	componentDidMount(){
		
	   
	 }
	render() {
	    return (
	    	<div>
		      <div className="searchbox" style={{width:"100%",height:"168px",lineHeight:"168px",backgroundColor:"#f4f4f4",overflow:"hidden",textAlign:"center"}}>
		      		<div className="searchbox1">
			      			<form onClick={this.show} id="search_form" method="get"  onSubmit={this.submit}>
				                <input onKeyUp={this.keyboardListener.bind(this)} onInput={this.showvalue} className="search_input" type="search" autoComplete="off" autoCorrect="off" placeholder="搜索歌曲、歌单、专辑" value={this.state.isvalue}/>

				            </form>
				            <span className="icon icon_search">搜索</span>
				            <div onClick={this.close} className="search_bar" style={{display:this.state.isshow?"block":"none"}}>
				            	取消
				            </div>
							
			      	</div> 

		      </div>
		       <div className="hot_key" style={{display:this.state.isshow?"none":"block"}}>
		       		<h3 className="result_tit">热门搜索</h3>
		       		<div className="result_tags">
		       			<a href="https://y.qq.com/m/act/singchina2/index.html?ADTAG=myqq"
		       			className="tag_hot tag_s" ref="aa">中国新歌声第二季</a>
		       			<a onClick={this.fastSearch.bind(this)} href="javascript:;" className="tag_s">一生所爱 卢冠廷</a>
		       			<a onClick={this.fastSearch.bind(this)} href="javascript:;" className="tag_s">DJ舞曲(华语)系列5 DJ</a>
		       			<a onClick={this.fastSearch.bind(this)} href="javascript:;" className="tag_s">风一样的我</a>
		       			<a onClick={this.fastSearch.bind(this)} href="javascript:;" className="tag_s">WHAT ARE WORDS</a>
		       			<a onClick={this.fastSearch.bind(this)} href="javascript:;" className="tag_s">流着泪说分手</a>
		       		</div>
		       </div>
		       <div>
		       		<div onScroll={this.getMoreSearchList.bind(this)} style={{display:this.state.isrecordList?'block':'none'}}>
						<ul className="recordList" >
	                        {
	                            this.state.recordList.map((item,index) => {
	                                return (
	                                    <li  className="recordItem border-bottom" key={index}>
	                                        <span className="icon-recent"></span>
	                                        <p onClick={this.SearchRecord.bind(this)}>{item}</p>
	                                        <span onClick={this.removeRecord.bind(this, item)} className="icon-close">

	                                        </span>
	                                    </li>
	                                )
	                            })
	                        }
	                    </ul>
	                    <h4 style={{display:this.state.recordList.length>0?'block':'none'}} className="title-search-history border-bottom"><span onClick={this.clearRecord.bind(this)} className="cleanRecord" >清空搜索历史</span>
	                    </h4>
		       		</div>
                    


					<div  className="search_result"  style={{display:this.state.isRemindDivShow?'none':'block'}}>
						<ul onScroll={this.getMoreSearchList.bind(this)} className="search_content" >
					       	{
					       		
					       	this.state.songList.map((item, index) => {
					       		if(this.state.songList!=[]){
								return (
                                    <li className="qqMusic-searchList-item border-bottom" key={index}>
                                    	<span className="left" style={{position:"relative"}}>
                                    		<img src={item.al.picUrl?item.al.picUrl:""} />
                                    		<span className="icon icon_play"></span>
                                    	</span>
                                    	<div className="left person">
                                    		<h6 className="qqMusic-searchList-item-title">{item.name}</h6>
                                        	<p className="qqMusic-searchList-item-singer">{item.ar[0].name}</p>
                         
                                    	</div>
                                        
                                    </li>
                                )
					       		}
                                
                            })
							}
							 <li className="hint" style={this.state.isCanGet ? { display: 'none' } : {}}>
							 <i className="loading__icon"></i>
							 正在加载更多...</li>
						</ul>
					</div>
		       </div>
		       
	      </div>	
	    )
  }
}


export default Xsearch;
