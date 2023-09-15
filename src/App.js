import { RecoilRoot } from "recoil";
import "./styles/global.css";
import Layout from "./routes";

import "./styles/global.css";
import Notification from "./features/notification/Notification";
import NavigationBar from "./components/nav-bar/NavigationBar";

function App() {
  return (
    <RecoilRoot>
      <div className="flex h-screen w-screen flex-row overflow-y-auto">
      <NavigationBar />
      <Layout />
      </div>
      <Notification />
    </RecoilRoot>
  );
}

export default App;
