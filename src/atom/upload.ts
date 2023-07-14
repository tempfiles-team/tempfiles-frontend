import { atom } from 'recoil';

export const uploadState = atom({
  key: 'uploadState',
  default: {
    file: false,
    text: false,
  },
});
