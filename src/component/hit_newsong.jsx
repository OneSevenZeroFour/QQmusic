import {connect} from "react-redux"
import React from "react";

import SongList from "./js/SongList"
const songList = new SongList();

let style = {
    listBackGround: {
        backgroundColor: "#eee"
    },
    rankTab: {
        margin: "1rem",
        backgroundColor: "#fff",
        position: "relative"
    },
    rTab: {
        display: "inline-block",
        verticalAlign: "top",
        margin: "0 3rem"
    },
    listTitle: {
        margin: "1rem 0",
        fontSize: "0.9em"
    },
    miniList: {
        fontSize: "0.8em"
    },
    miniListOrder: {
        color: "#aaa"
    },
    miniListSongName: {
        padding: "0 2rem"
    },
    miniListSingerName: {
        color: "#aaa"
    },
    miniListSong: {
        margin: '0 0 .5rem 0'
    },
    arrow: {
        position: "absolute",
        right: "1rem",
        top: "50%",
        marginTop: "-1rem",
        width: "1rem",
        height: "1rem",
        borderRight: ".4rem solid #b2b2b2",
        borderBottom: ".4rem solid #b2b2b2",
        transform: "rotate(-45deg)"
    }
}

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
                    return <div style={style.rankTab} key={i}>
                        <img alt={e.listTitle} src={e.listIMGUrl} style={{
                            display: "inline-block"
                        }}/>
                        <div style={style.rTab}>
                            <p style={style.listTitle}>{e.listTitle}</p>
                            <ul style={style.miniList}>
                                {(() => {
                                    let miniList = [];
                                    for (let i = 1; i <= 3; i++) {
                                        miniList.push(
                                            <li style={style.miniListSong} key={i}>
                                                <span style={style.miniListOrder}>{i}</span>
                                                <span style={style.miniListSongName}>{e.song[i - 1].songName}</span>
                                                <span style={style.miniListSingerName}>- {e.song[i - 1].singerName}</span>
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
        songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js", this, "巅峰榜", "./image/01.png")
        let timeout = 500;
        if (sessionStorage.getItem('http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js')) {
            timeout = 0
        }
        //QQ音乐不允许短时间内请求1次以上，设置延时
        setTimeout(() => {
            songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js", this, "热歌排行", "./image/00.png")
        }, timeout)
        setTimeout(() => {
            songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js", this, "新歌排行", "./image/02.png")
            songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js", this, "网络歌曲", "./image/01.png")
            songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js", this, "内地热歌", "./image/00.png")
        }, timeout * 2)
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        sendName(event) {
            dispatch({type: "SETNAME", name: event.target.value})
        },
        sendSkill(event) {
            dispatch({type: "SETSKILL", skill: event.target.value})
        }
    }
})(HitNewSong);
