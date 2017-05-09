import { toNumber } from '../src/helper';

test('toNumber with a single letter', () => {
  expect(toNumber("a")).toBe(1);
});

test('toNumber with a single capital letter', () => {
  expect(toNumber("A")).toBe(1);
});

test('toNumber with a input string', () => {
  expect(toNumber("ABC")).toBe(123);
});
test('toNumber with a input string', () => {
  expect(toNumber("abc")).toBe(123);
});

test('toNumber with a input string', () => {
  expect(toNumber("Aac")).toBe(113);
});
