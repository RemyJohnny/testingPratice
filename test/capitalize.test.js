const capitalize = require("../app/capitalize");

test("capitalize -remy-", () => {
  expect(capitalize("remy")).toBe("Remy");
});

test("test on empty param", () => {
  expect(capitalize("")).toBe("the string is empty");
});

test("capitalize REMY", () => {
  expect(capitalize("REMY")).toBe("Remy");
});
test("capitalize Remy", () => {
  expect(capitalize("Remy")).toBe("Remy");
});
