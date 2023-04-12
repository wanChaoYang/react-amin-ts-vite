import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./view/login";
import GetRouters from "./router";
// import Home from "./view/home";
// import User from "./view/user";
// import Layout from "./view/layout";
function App() {
  return (
    <HashRouter>
      <GetRouters />
      {/* <Routes>
        <Route path="/" element={<Navigate to="layout" />} />
        <Route path="layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes> */}
    </HashRouter>
  );
}

export default App;
