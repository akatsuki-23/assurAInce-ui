import { atom } from "recoil";

const textState = atom({
  key: 'textState',
  default: '',
});

const userDetails = atom({
  key: 'user',
  default: {},
});

const isExistingLoginAtom = atom({
  key: 'isFirstLogin',
  default: false,
});

export {
  textState,
  userDetails,
  isExistingLoginAtom
}
