import { RecoilRoot } from "recoil";
import "./styles/global.css";
import Layout from "./routes";

import './styles/global.css';
import Notification from './features/notification/Notification';

function App() {
  return (
      <RecoilRoot>
        <Layout />
        <Notification />
      </RecoilRoot>
  );
}

export default App;
