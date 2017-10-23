import {connect} from "react-redux"
import React from "react";

import SongList from "./js/SongList"
const songList = new SongList();


class Toplist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songList: []
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
        songList.getTopListFromID(3);
    }
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
    }
})(Toplist);
