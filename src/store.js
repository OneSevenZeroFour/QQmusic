import {createStore} from "redux";

let store = createStore((state = {


  hit_newsong:[],
  detail:{},
}, action) => {
  switch (action.type) {
    case "SETRANKLIST":
        return Object.assign({},state,{hit_newsong: action.songList})
      break;
    case "SETDETAIL":
        return Object.assign({},state,{detail: action.detail})
      break;
    default:
      return state
  }
})

export default store

