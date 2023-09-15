import { atom } from "recoil";

const textState = atom({
  key: 'textState',
  default: '',
});

const userDetails = atom({
  key: 'user',
  default: {},
});

export {
  textState,
  userDetails
}
