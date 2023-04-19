import store from "@/redux";
function Home() {
  console.log("init:", store.getState());
  const addCount = { type: "ADD_COUNT", number: 10 };
  console.log("update:", store.getState());
  const updateCount = () => {
    store.dispatch(addCount);
  };
  return <div onClick={updateCount}>首页</div>;
}
export default Home;
