import { connect } from "react-redux"
import React from "react";

import style from "./CssInJs/TopList.css.js"

class TopListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.fixedTop=()=>{
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
    }
    render() {
        return ( 
                <header style = {style.header} id="header"> { /*pic_album*/ } 
                    <img src={this.props.detail.topinfo?this.props.detail.topinfo.pic_album:"#"} style={style.cover} />
                    <div style={style.headTitle}>
                        <div style={style.headIntroduce} >
                            <img src={this.props.detail.topinfo?this.props.detail.topinfo.pic_album:"#"} style={style.coverImage} />
                            <ul style={style.rtitle}>
                                <li style={style.rTopTitle}>{this.props.detail.topinfo?this.props.detail.topinfo.ListName:"加载中……"}</li>
                                <li style={style.listDays}>{
                                    (()=>{
                                        if(this.props.detail.day_of_year){
                                            return '第'+this.props.detail.day_of_year+'天';                                        
                                        }else{
                                            return this.props.detail.date?'第'+(this.props.detail.date).split("_")[1]+"周":"加载中……";
                                        }
                                    })()
                                }</li>
                                <li style={style.listUpdateTime}>{this.props.detail.update_time?`${this.props.detail.update_time} 更新`:`加载中`}</li>
                            </ul>
                        </div>
                        <div style={style.playBottom}>
                            <p style={style.playButton}  id="playBottom"><i style={style.triangle}></i>播放全部</p>
                        </div>
                    </div>
                </header> 
        )
    }
    componentDidMount(){
        this.fixedTop()
    }
}

export default connect((state) => {
    return state
})(TopListHeader);