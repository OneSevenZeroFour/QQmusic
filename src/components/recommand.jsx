import React from "react";
import { Carousel, Grid } from 'antd-mobile';
import "../CSS/recommand.css"

class Xrecommand extends React.Component{
	constructor(props) {
	    super(props);
	}
	render() {
		const imgList = [
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136996.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/137001.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136837.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136785.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136105.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136190.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136903.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/118122.jpg"
        ];
	    return (
	      <div>
	      	<Carousel
                    className="slideshow-list"
                    infinite
                    autoplay={true}
                    autoplayInterval={2000}
                >
                    {imgList.map((item, index) => {
                        return (
                            <a key={index} className="slideshow-item-link" href="javascript:;">
                                <img className="slideshow-item-img" src={item} />
                            </a>
                        );
                    })
                    }
            </Carousel>
	      	<div className='box'>
	      		<h3 className='atitle'>电台</h3>
	      		<div className="innerbox">
	      			<a>
	      				<dl>
	      					<dt><img src='./img/6.jpg'/><span className="icon icon_play"></span></dt>
	      					<dd>一人一首招牌歌</dd>
	      				</dl>
	      			</a>
	      			<a>
	      				<dl>
	      					<dt><img src='./img/7.jpg'/><span className="icon icon_play"></span></dt>
	      					<dd>热歌</dd>
	      				</dl>
	      			</a>
	      		</div>

	      		<h3 className='atitle'>热门歌单</h3>
	      		<div className="innerbox">
	      			<a>
	      				<dl>
	      					<dt><img src='./img/8.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>603.3万</span>
	      					<span className="icon icon_play"></span></dt>
	      					<dd>催泪大杀器！盘点演唱...</dd>
	      					<dd>Harry</dd>
	      				</dl>
	      			</a>
	      			<a>
	      				<dl>
	      					<dt><img src='./img/9.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>60.6万</span>
	      					<span className="icon icon_play"></span></dt>
	      					<dd>纳尼？这些歌手竟然...</dd>
	      					<dd>风吹草地</dd>
	      				</dl>
	      			</a>
	      		</div>

	      		
	      		<div className="innerbox">
	      			<a>
	      				<dl>
	      					<dt><img src='./img/10.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>75.9万</span>
	      					<span className="icon icon_play"></span></dt>
	      					<dd>精选内地十大名谣...</dd>
	      					<dd>1's、</dd>
	      				</dl>
	      			</a>
	      			<a>
	      				<dl>
	      					<dt><img src='./img/11.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>115.3万</span>
	      					<span className="icon icon_play"></span>
	      					</dt>
	      					<dd>2016Billboard嘻哈...</dd>
	      					<dd></dd>
	      				</dl>
	      			</a>
	      		</div>

	      		
	      		<div className="innerbox">
	      			<a>
	      				<dl>
	      					<dt><img src='./img/12.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>86.3万</span>
	      					<span className="icon icon_play">
	      					</span></dt>
	      					<dd>浮光掠影：ACG纯...</dd>
	      					<dd>肥喵</dd>
	      				</dl>
	      			</a>
	      			<a>
	      				<dl>
	      					<dt><img src='./img/13.jpg'/>
	      					<span className="icon_listen"><i className="icon_listens "></i>35.7万</span>
	      					<span className="icon icon_play"></span>
	      					</dt>
	      					<dd>tri-hop单曲大推荐</dd>
	      					<dd>哑忍</dd>
	      				</dl>
	      			</a>
	      		</div>

	      		<p className="list_more"><a href="">去发现更多好音乐></a></p>
	      		<footer className="mod_footer">
					<p className="list_more"><a href="">查看电脑版网页</a></p>
					<p className="list_more"><a href="" className="music_logo2">QQ音乐</a></p>
					<p className="copyright">Copyright &copy; 1998-2017 Tencent All Right Reserved.</p>
					<p className="copyright">联系电话：0755-8601388 QQ群：55209235</p>
	      		</footer>
	      	</div>
	      </div>	
	    )
  }
}

export default Xrecommand;
