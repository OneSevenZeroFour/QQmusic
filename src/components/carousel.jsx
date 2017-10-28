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
          <img src="./img/1.jpg"/>
          <img src="./img/2.jpg"/>
          <img src="./img/3.jpg"/>
          <img src="./img/4.jpg"/>
          <img src="./img/5.jpg"/>
        </Carousel>
      )
    }
}

  


module.exports = App;