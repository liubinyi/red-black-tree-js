import { toNumber } from '../src/helper';

test('toNumber with a single letter', () => {
  expect(toNumber("a")).toBe(97);
});

test('toNumber with a single capital letter', () => {
  expect(toNumber("A")).toBe(65);
});
