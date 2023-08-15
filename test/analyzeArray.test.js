const analyzeArray = require("../app/analyzeArray");

test("test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});

test("test 2", () => {
  expect(analyzeArray([8.3, 45.0, 1.4, 47.1, 2.9, 6.0])).toStrictEqual({
    average: 18.45,
    length: 6,
    min: 1.4,
    max: 47.1,
  });
});

test("test 3", () => {
  expect(analyzeArray([450, 120, 940, 420, 930, 670, 250])).toStrictEqual({
    average: 540,
    length: 7,
    min: 120,
    max: 940,
  });
});
test("test 4", () => {
  expect(analyzeArray([])).toBe("arr is empty");
});
