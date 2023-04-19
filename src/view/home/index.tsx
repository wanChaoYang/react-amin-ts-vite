import store from "@/redux";
import { setToken, setNmae } from "@/redux/modules/globle/actions";
function Home() {
  console.log("init:", store.getState());
  // const addCount = { type: "ADD_COUNT", number: 10 };
  const updateCount = () => {
    store.dispatch(setToken("123465"));
    store.dispatch(setNmae("B总"));
    console.log("update:", store.getState());
  };
  return <div onClick={updateCount}>首页</div>;
}
export default Home;
