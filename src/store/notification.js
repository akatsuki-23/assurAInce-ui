import { atom } from "recoil";

const alerts = atom({
  key: 'notification',
  default: [],
});

export {
  alerts
}
