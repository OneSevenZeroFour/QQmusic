import { connect } from "react-redux"
import React from "react";

import style from "./CssInJs/TopList.css.js"

class TopListArticle extends React.Component {
    render() {
        return ( 
                <article>
                    <ul style={style.list}>
                        <span style={style.songCount}>{this.props.detail.cur_song_num?`排行榜  共${this.props.detail.cur_song_num}首`:'加载中……'}</span>
                        {(()=>{
                            let toplist=[];
                            if(this.props.detail.songlist){
                                const songlist=this.props.detail.songlist;
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
                        <li style={this.props.detail.songlist?{display:'none'}:{display:'block'}}>
                            <p style={{width:"400px",margin:"200px auto"}}>加载中……</p>
                        </li>
                    </ul>
                </article>
        )
    }
}

export default connect((state) => {
    return state
})(TopListArticle);