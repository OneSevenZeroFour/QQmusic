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
    backgroundColor: "#fff"
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
    fontSize: "0.8em",
    position: "relative"
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
    right: "-12rem",
    top: "50%",
    marginTop: "-2rem",
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
      //   songlist: []
    }
  }
  render() {
    return (
      <section id="HitNewSong" className="hit-new-song" style={style.listBackGround}>
        <div style={style.rankTab}>
          <img alt="#" src="./image/01.png" style={{
            display: "inline-block"
          }}/>
          <div style={style.rTab}>
            <p style={style.listTitle}>新歌排行</p>
            <ul style={style.miniList}>
              <li style={style.miniListSong}>
                <span style={style.miniListOrder}>1</span>
                <span style={style.miniListSongName}>遗憾(Live)</span>
                <span style={style.miniListSingerName}>- 薛之谦</span>
              </li>
              <li style={style.miniListSong}>
                <span style={style.miniListOrder}>1</span>
                <span style={style.miniListSongName}>遗憾(Live)</span>
                <span style={style.miniListSingerName}>- 薛之谦</span>
              </li>
              <li style={style.miniListSong}>
                <span style={style.miniListOrder}>1</span>
                <span style={style.miniListSongName}>遗憾(Live)</span>
                <span style={style.miniListSingerName}>- 薛之谦</span>
              </li>
              <li style={style.arrow}></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
  componentDidMount() {
    let self = this;
    songList.getSongList("http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js", self)
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
