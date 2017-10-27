import { connect } from "react-redux"
import React from "react";

import SongList from "./js/SongList"
const songList = new SongList();

import Header from "./TopListHeader.jsx"
import Article from "./TopListArticle.jsx"
import Footer from "./TopListFooter.jsx"

class Toplist extends React.Component {
    render() {
        return ( 
            <div>
                <Header />
                <Article />
                <Footer />
            </div>
        )
    }
    componentWillMount() {
        songList.getTopListFromID(this.props.match.params.id, this)
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        setDetail(obj){
            dispatch({type:'SETDETAIL',detail:obj})
        }
    }
})(Toplist);