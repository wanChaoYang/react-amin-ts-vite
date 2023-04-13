import { HashRouter } from "react-router-dom";
import GetRouters from "./router";
import BeforeRouter from "./components/beforeRouter";
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
