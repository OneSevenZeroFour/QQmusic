import { connect } from "react-redux"
import React from "react";

import style from "./CssInJs/TopList.css.js"

class TopListFooter extends React.Component {
    render() {
        return ( 
                <footer style={style.footer} className='transition-In'>
                    <p style={style.footerTitle}>简介</p>
                    {(()=>{
                        if(this.props.detail.topinfo){
                            let arr=[];
                            arr = ((this.props.detail.topinfo.info).split('<br>')).map((e,i)=>{
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
        )
    }
}

export default connect((state) => {
    return state
})(TopListFooter);