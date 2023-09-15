import { RecoilRoot } from "recoil";
import "./styles/global.css";

import "./styles/global.css";
import RouteLayout from "./routes/RouteLayout";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <RouteLayout />
      </Router>
    </RecoilRoot>
  );
}

export default App;
