
import React from "react";
import axios from 'axios'
import $ from "jquery" 
import style from "../component/CssInJs/TopList.css.js"


class Xtaoge extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	songLists:[]
	    }
	    this.fixedTop=()=>{console.log(666)
            const header=document.getElementById('header');
            const headerHeight = header.offsetHeight;
            const playBottom = document.getElementById('playBottom');
            const playBottomHeight = playBottom.offsetHeight;
            const playBottomOT = playBottom.offsetTop;
            document.addEventListener('scroll',(e)=>{
                if(playBottomOT-document.documentElement.scrollTop+50<=0){
                    header.style.position=`fixed`;
                    header.style.top=`${-480}px`;
                }else{
                    header.style.position=`absolute`;
                    header.style.top=`${236}px`;
                };
            })
        }
	    this.songlistAjax=()=>{
	    	var Data;
	    	var self = this;

	    	var id = this.props.match.params.id;
	    	var name="songlistsID"+id;
	    	console.log(id)
	    	console.log(name)
	    	if(sessionStorage.getItem(name)){
	    		console.log(555)
	    		 self.setState({
	    		 	songLists:JSON.parse(sessionStorage.getItem(name))
	    		 })
	    	}else{

		    	$.ajax({
		    		type: "get",
		    		url: "http://localhost:12345/taoge",
		    		data:{disstid:this.props.match.params.id},
		    		success: function(res){
		    			Data = JSON.parse(JSON.parse(res).data);
		    			console.log(Data.cdlist[0])
		    			var songsdetail = Data.cdlist[0];
		    				console.log(songsdetail)
		    				var songlists = [];
		    				songlists.push({
		    					"listIMGUrl":songsdetail.logo,
		    					"nickname":songsdetail.nickname,
		    					"dissname":songsdetail.dissname,
		    					"songlist":songsdetail.songlist,
		    					"headimg":songsdetail.headurl,
		    					"songnum":songsdetail.songnum,
		    					"desc":songsdetail.desc
		    				})

		    				 sessionStorage.setItem(name, JSON.stringify(songlists))
		    				 
		    		
		    			self.setState({
		    				songLists:songlists
		    			})
		    		},
	                error: function(e) {
	                	console.log(e)
	                    
	                }
		    	})
	    	}
	    
	    			
	    }

	}
	componentWillMount(){
		this.songlistAjax()
	}
    componentDidMount(){
    	
		 // this.fixedTop()
		 console.log(this.state)
    	this.fixedTop()
    }
    componentDidUpdate() {
    	console.log(this.state.songLists[0].listIMGUrl) 
    	console.log( JSON.parse(sessionStorage.getItem("songlists")))        
    }
	render() {
	    return (
	    <div>
		    <header style = {style.header} id="header">
		      	
		      	<div style={style.headTitle}>
	                <div style={style.headIntroduce} >
	                    <img src={this.state.songLists[0].listIMGUrl} style={style.coverImage} />
	                    <ul style={style.rtitle}>
	                        <li style={{
	                        	height:"136px",
	                        	overflow:"hidden"
	                        }}>{this.state.songLists[0].dissname}</li>
	                        <li style={{fontSize: "2.5rem",
    									paddingbottom: "2rem",
    									overflow:"hidden"
    								}}>
	                        <img style={{width:"72px",height:"72px",marginTop:"55px"}} src={this.state.songLists[0].headimg}/> 
	                        <span style={{display:"inline-block",marginLeft:"20px"}}>{this.state.songLists[0].nickname}</span></li>

	                        <li>播放量：634.5万</li>
	                       
	                    </ul>
	                </div>
	                <div style={style.playBottom}>
	                    <p style={style.playButton}  id="playBottom"><i style={style.triangle}></i>播放全部</p>
	                </div>
	            </div>
		    </header>
		    <article className='transition-In' style={{padding:"20px 30px"}}>
		    	 <ul style={style.list}>
		    	 	<span style={{fontSize:"39px",color:"grey",marginBottom:"90px",display:"block"}}>歌单  共{this.state.songLists[0].songnum}首</span>
					{
						this.state.songLists[0].songlist.map(function(item,index){
							return (
								<li style={{
									fontSize:"13px",
									color:"16px",
									marginTop:"40px",
									display: "block",
								    maxWidth: "100%",
								    overflow: "hidden",
								    whiteSpace: "nowrap",
								    textOverflow: "ellipsis"
								}} key={index}>
									<ul style={style.songDetail}>
				                        <li style={{
				                        	fontSize:"48px"
				                        }}>{item.songname}</li>
				                        <li style={{overflow: "hidden",
												    whiteSpace: "nowrap",
												    textOverflow: "ellipsis",
												    color: "rgb(119, 119, 119)",
												    fontSize: "39px",
												    paddingTop: "0.5rem"}}>
				                        	{item.albumname}
				                       </li>
				                    </ul>
								</li>


							)
						})
					}
								
								
					
		    	 </ul>
		    </article>
		    <footer style={{
		    	fontSize: "3.2rem",
    			fontWeight: "100",
    			padding:"20px 30px"
		    }} className='transition-In'>
				 <p style={{fontSize:"37px"}}>歌单简介</p>
				 
				 {(()=>{
                        if(this.state.songLists[0]){
                            let arr=[];
                            arr = ((this.state.songLists[0].desc).split('<br>')).map((e,i)=>{
                                if(e==="")return <br key ={i}/>
                                return <p style={{fontSize:"39px",textAlign:"left",color:"#777" ,lineHeight:"60px"}} key={i}>{e}</p>
                            })
                            return arr;
                        }else{
                            return <p>加载中……</p>
                        }
                    })()
                    }
				 <p style={style.footerTitle}><img src="./image/logo.svg" style={style.footerImg}/></p>
                    <p style={style.footerTitle}>QQ音乐</p>
		    </footer>
	    </div>	
	)
  }
}

export default Xtaoge;