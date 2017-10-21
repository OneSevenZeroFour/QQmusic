import {createStore} from "redux";

let store = createStore((state = {
  name: "asd",
}, action) => {
  switch (action.type) {
    case "SETNAME":
      	return Object.assign({},state,{name: action.name})
      break;
     case "SETSKILL":
      	return Object.assign({},state,{skill: action.skill})
      break;
    default:
      return state
  }
})

export default store
