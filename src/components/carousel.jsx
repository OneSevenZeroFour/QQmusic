var React = require('react');
var createReactClass = require('create-react-class');

var Carousel = require('nuka-carousel');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        mixins: [Carousel.ControllerMixin],
       
      }
  }
 
    render() {
      return (
        <Carousel>
          <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000000FUqEs2TsRZe.jpg?max_age=2592000&max_age=2592000"/>
          <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000001iwVhX2hUO62.jpg?max_age=2592000&max_age=2592000"/>
          <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000001BLDpp2YiovD.jpg?max_age=2592000&max_age=2592000"/>
          <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000001HWamT3AF2xE.jpg?max_age=2592000&max_age=2592000"/>
          <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000002VYJ9g2FsdhF.jpg?max_age=2592000&max_age=2592000"/>
        </Carousel>
      )
    }
}

  


module.exports = App;