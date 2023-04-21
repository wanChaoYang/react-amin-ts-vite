import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
/**
 * 中间件是做异步操作 生产环境
 * redux-thunk 、redux-promise 、redux-sage
 * 调试工具
 * redux-devtools-extension
 */
//引入中间件
import thunk from "redux-thunk";
//映入工具
import { composeWithDevTools } from "redux-devtools-extension";
//导入模块
import Globale from "../redux/modules/globle/reducer";
//集合模块
const reducer = combineReducers({
  Globale,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

//定义数据
// const initStore = {
//     count: 0,
//     name: "A总",
//   };
//   //关联action
//   function countReducer(state = initStore, action: any) {
//     switch (action.type) {
//       case "ADD_COUNT":
//         //作用：覆盖state,如果有种属性避免被覆盖就需要扩展state
//         return { ...state, count: state.count + action.number };
//       case "aaa":
//         return { abc: "" };

//       default:
//         return state;
//     }
//   }
//   const store = createStore(countReducer);

//   export default store;
