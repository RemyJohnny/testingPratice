const calculator = require("../app/calculator");

/** ************ ADD TEST ************* */

// ADD test on integers
test("add 4 and 5", () => {
  expect(calculator.add(4, 5)).toBe(9);
});
// ADD test on decimals
test("add 0.6 and 0.07", () => {
  expect(calculator.add(0.6, 0.07)).toBeCloseTo(0.67);
});
// ADD test on empty param
test("test on empty param", () => {
  expect(calculator.add()).toBe("there are no number to add");
});
// ADD test on single param
test("test on single param", () => {
  expect(calculator.add(23)).toBe(23);
});
// ADD test on stringed numbers
test("test on stringed numbers", () => {
  expect(calculator.add("14", "10")).toBe(24);
});

/** ************ SUBTRACT TEST ************* */

// SUBTRACT test on integers
test("subtract 45 and 17", () => {
  expect(calculator.subtract(45, 17)).toBe(28);
});
// SUBTRACT test on decimals
test("subtract 0.6 and 0.07", () => {
  expect(calculator.subtract(0.6, 0.07)).toBeCloseTo(0.53);
});
// SUBTRACT test on empty param
test("test on empty param", () => {
  expect(calculator.subtract()).toBe("there are no number to add");
});
// SUBTRACT test on single param
test("test on single param", () => {
  expect(calculator.subtract(23)).toBe(23);
});
// SUBTRACT test on stringed numbers
test("test on stringed numbers", () => {
  expect(calculator.subtract("14", "10")).toBe(4);
});

/** ************ DIVIDE TEST ************* */

// DIVIDE test on integers
test("divide 60 and 6", () => {
  expect(calculator.divide(60, 6)).toBe(10);
});
test("divide 0 and 96", () => {
  expect(calculator.divide(0, 96)).toBe(0);
});
// DIVIDE test on decimals
test("divide 0.6 and 0.07", () => {
  expect(calculator.divide(0.6, 0.07)).toBeCloseTo(8.57);
});
// DIVIDE test on empty param
test("test on empty param", () => {
  expect(calculator.divide()).toBe("there are no number to add");
});
// DIVIDE test on single param
test("test on single param", () => {
  expect(calculator.divide(23)).toBe(23);
});
// DIVIDE test on stringed numbers
test("test on stringed numbers", () => {
  expect(calculator.divide("14", "10")).toBe(1.4);
});

/** ************ MULTIPLY TEST ************* */

// MULTIPLY test on integers
test("multiply 60 and 6", () => {
  expect(calculator.multiply(6, 6)).toBe(36);
});
// MULTIPLY test on decimals
test("multiply 0.6 and 0.07", () => {
  expect(calculator.multiply(0.6, 0.07)).toBeCloseTo(0.042);
});
// MULTIPLY test on empty param
test("test on empty param", () => {
  expect(calculator.multiply()).toBe("there are no number to add");
});
// MULTIPLY test on single param
test("test on single param", () => {
  expect(calculator.multiply(23)).toBe(23);
});
// MULTIPLY test on stringed numbers
test("test on stringed numbers", () => {
  expect(calculator.multiply("14", "10")).toBe(140);
});
