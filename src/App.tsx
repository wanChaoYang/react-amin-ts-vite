import { HashRouter } from "react-router-dom";
import GetRouters from "./router";
import { BeforeRouter } from "./components/index";
import "./App.scss";
function App() {
  return (
    <HashRouter>
      <BeforeRouter>
        <GetRouters />
      </BeforeRouter>
    </HashRouter>
  );
}

export default App;
