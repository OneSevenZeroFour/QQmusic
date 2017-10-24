import { connect } from "react-redux"
import React from "react";

import SongList from "./js/SongList"
const songList = new SongList();

import style from "./CssInJs/TopList.css.js"

class Toplist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }
    render() {
        return ( 
            <div>
                <header style = {style.header}> { /*pic_album*/ } 
                    <img src={this.state.detail.topinfo?this.state.detail.topinfo.pic_album:"#"} style={style.cover} />
                    <div style={style.headTitle}>
                        <div style={style.headIntroduce} >
                            <img src={this.state.detail.topinfo?this.state.detail.topinfo.pic_album:"#"} style={style.coverImage} />
                            <ul style={style.rtitle}>
                                <li style={style.rTopTitle}>{this.state.detail.topinfo?this.state.detail.topinfo.ListName:"加载中……"}</li>
                                <li style={style.listDays}>第{
                                    (()=>{
                                        if(this.state.detail.day_of_year){
                                            return this.state.detail.day_of_year+'天';                                        
                                        }else{
                                            return this.state.detail.date?(this.state.detail.date).split("_")[1]+"周":"加载中……";
                                        }
                                    })()
                                }</li>
                                <li style={style.listUpdateTime}>{this.state.detail.update_time} 更新</li>
                            </ul>
                        </div>
                        <div style={style.playBottom}>
                            <p style={style.playButton}><i style={style.triangle}></i>播放全部</p>
                        </div>
                    </div>
                </header> 
                <article>
                    <ul style={style.list}>
                        <span style={style.songCount}>排行榜  共{this.state.detail.cur_song_num?this.state.detail.cur_song_num:'加载中……'}首</span>
                        
                        {(()=>{
                            let toplist=[];
                            if(this.state.detail.songlist){
                                const songlist=this.state.detail.songlist;
                                toplist.push(songlist.map((e,i)=>{
                                    return <li style={style.listItem} key={e.data.songid}>
                                                <ul style={style.songOrder}>
                                                    <li style={i<3?{color:'#FF400B'}:{}}>{i+1}</li>
                                                    {/*<li>1</li>*/}
                                                </ul>
                                                <ul style={style.songDetail}>
                                                    <li style={style.songName}>{e.data.songname}</li>
                                                    <li style={style.singerName}>{e.data.singer.map((e,i)=>{
                                                        if(i===0){return e.name}
                                                        return '/'+e.name
                                                    })}</li>
                                                </ul>
                                            </li>;
                                }))
                                return toplist;
                            }else{
                                return;
                            }
                        })()
                        }
                        

                    </ul>
                </article>
                <footer style={style.footer}>
                    <p style={style.footerTitle}>简介</p>
                    {(()=>{
                        if(this.state.detail.topinfo){
                            let arr=[];
                            arr = ((this.state.detail.topinfo.info).split('<br>')).map((e,i)=>{
                                if(e==="")return <br key ={i}/>
                                return <p style={style.footerArticle} key={i}>{e}</p>
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
    componentWillMount() {
        songList.getTopListFromID(this.props.match.params.id, this)
        setTimeout(() => {
            console.log(this.state);
        }, 500)
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {}
})(Toplist);