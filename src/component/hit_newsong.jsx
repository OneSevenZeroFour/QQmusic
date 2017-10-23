import {connect} from "react-redux"
import React from "react";

import SongList from "./js/SongList"
const songList = new SongList();

import {Link} from 'react-router-dom'

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
        margin: "0 3rem",
        minWidth:"496px",
        width:'50%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
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
        padding: "0 2rem",

        overflow: 'hidden',
    },
    miniListSingerName: {
        color: "#aaa",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
                
    },
    miniListSong: {
        margin: '0 0 .5rem 0',

        display:"flex"
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
    },
    listenCount:{
        position:'absolute',
        left:'.5rem',
        bottom:"1rem",
        color:'#fff',
        fontSize:'2rem'
    },
    coverStyle:{
        display:"inline-block",
        minWidth:"300px",
        minHeight:"300px",
        marginTop:".7rem"
    },
    earPhoneIcon:{
        display:'inline-block',
        backgroundImage:"url(./image/list_sprite.png)",
        backgroundSize: "4rem 7rem",
        width:"1.8rem",
        height:"1.2rem",
        backgroundPosition: '0 1.2rem',
    marginRight: '.5rem',
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
