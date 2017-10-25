import {createStore} from "redux";

let store = createStore((state = {
  isshow: false,
  
}, action) => {
  switch (action.type) {
    case "SETISSHOW":
      return {isshow: action.isshow}
      break;
  }
})

export default store