import { AnyAction } from "redux"
import { getToken } from '@/utils/cookies'
//定义数据
const initStore = {
    token: getToken() || "",
    name: "A总",
};
//关联action
function global(state = initStore, action: AnyAction) {
    switch (action.type) {
        case "SET_TOKEN":
            //作用：覆盖state,如果有种属性避免被覆盖就需要扩展state
            return { ...state, token: action.token };
        case "SET_NAME":
            return { ...state, name: action.name };

        default:
            return state;
    }
}
export default global;