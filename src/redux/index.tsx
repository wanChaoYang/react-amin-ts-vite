import { legacy_createStore as createStore } from "redux";
//定义数据
const initStore = {
  count: 0,
  name: "A总",
};
//关联action
function countReducer(state = initStore, action:any) {
  switch (action.type) {
    case "ADD_COUNT":
      //作用：覆盖state,如果有种属性避免被覆盖就需要扩展state
      return { ...state, count: state.count + action.number };
    case "aaa":
      return { abc: "" };

    default:
      return state;
  }
}
const store = createStore(countReducer);

export default store;
