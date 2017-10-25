import {connect} from "react-redux"
import React from "react";
import {Link} from 'react-router-dom'
//引入样式
import style from './CssInJs/RankList.css.js'

import SongList from "./js/SongList"
const songList = new SongList();

class HitNewSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songList: []
        }
    }
    render() {
        return (
            <section id="HitNewSong" className="hit-new-song" style={style.listBackGround}>
                {this.state.songList.map((e, i) => {
                    return <div style={style.rankTab} key={e.id}>
                        <Link style={{display: "inline-block",position:'relative'}} to={'/toplist/'+e.id}>
                            <img alt={e.topTitle} src={e.picUrl} style={style.coverStyle}/>
                            <span style={style.listenCount}><i style={style.earPhoneIcon}></i>{songList.listenCountFilter(e.listenCount)}</span>
                        </Link>
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
                })}
            </section>
        )
    }
    componentDidMount() {
        songList.getCurrnetSongList(this);
    }
}

export default connect((state) => {
    return state
})(HitNewSong);
