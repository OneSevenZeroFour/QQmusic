import {createStore} from "redux";

let store = createStore((state = {
  hit_newsong:[],
  detail:{},
  song:'',
  image:'',
  bo:'',
  isplaying:false
}, action) => {
  switch (action.type) {
    case "SETRANKLIST":
        return Object.assign({},state,{hit_newsong: action.songList})
      break;
    case "SETDETAIL":
        return Object.assign({},state,{detail: action.detail})
      break;
    case "SETSONG":
        return Object.assign({},state,{song: action.song})
      break;
    case "SETIMAGE":
        return Object.assign({},state,{image: action.image})
      break;
    case "SETBO":
        return Object.assign({},state,{bo: action.bo})
      break;
    case 'SETISPLAYING':
        return Object.assign({},state,{isplaying: action.isplaying})
      break;
    default:
      return state
  }
})

export default store
