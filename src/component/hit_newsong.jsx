import {connect} from "react-redux"
import React from "react";
import {Link} from 'react-router-dom'
//引入样式
import style from './CssInJs/RankList.css.js'

import SongList from "./js/SongList"
const songList = new SongList();

class HitNewSong extends React.Component {
    constructor(props){
        super(props);
        this.lazyLoad=()=>{
            let items= document.getElementsByClassName('listItems')
            for (let val of items){
                 if(document.documentElement.scrollTop+document.documentElement.clientHeight>=val.offsetTop){
                     val.children[0].children[0].src=val.children[0].children[0].getAttribute("url")
                 }
            }
        }
    }
    render() {
        return (
            <section id="HitNewSong" className="hit-new-song" style={style.listBackGround}>
                {this.props.hit_newsong.map((e, i) => {
                    return  <Link style={{color:'#333'}} to={'/toplist/'+e.id} key={e.id}>
                                <div style={style.rankTab} className="listItems">
                                    <div style={{display: "inline-block",position:'relative'}}>
                                        <img alt={e.topTitle} url={e.picUrl} src="#" style={style.coverStyle}/>
                                        <span style={style.listenCount}><i style={style.earPhoneIcon}></i>{songList.listenCountFilter(e.listenCount)}</span>
                                    </div>
                                    <div style={style.rTab}>
                                        <p style={style.listTitle}>{e.topTitle}</p>
                                        <ul style={style.miniList}>
                                            {(() => {
                                                let miniList = [];
                                                for (let i = 1; i <= 3; i++) {
                                                    miniList.push(
                                                        <li style={style.miniListSong} key={i}>
                                                            <span style={style.miniListOrder}>{i}</span>
                                                            <span style={style.miniListSongName}>{e.songList[i - 1].songname}</span>
                                                            <span style={style.miniListSingerName}>- {e.songList[i - 1].singername}</span>
                                                        </li>
                                                    )
                                                }
                                                return miniList
                                            })()}
                                            <li style={style.arrow}></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                })}
            </section>
        )
    }
    componentWillMount() {
        songList.getCurrnetSongList(this);
    }
    componentDidMount() {
            document.addEventListener("scroll",()=>{
                    this.lazyLoad()
                })
            console.log(this)
    }
    componentDidUpdate() {
            this.lazyLoad();
    }
}

export default connect((state) => {
    return state
},(dispatch)=>{
    return{
        setList(arr){
            dispatch({type:'SETRANKLIST',songList:arr})
        }
    }
})(HitNewSong);
