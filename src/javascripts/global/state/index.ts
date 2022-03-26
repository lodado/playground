import { atom, selector } from 'recoil';

export const exampleState = atom({
  key: 'exampleState',
  default: 123,
});

export const exampleSelector = selector<number>({
  key: 'exampleSelector',
  get: ({ get }) => get(exampleState) * 5,
});
