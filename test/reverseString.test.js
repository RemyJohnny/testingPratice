const reverseString = require("../app/reverseString");

test("reverse nigeria", () => {
  expect(reverseString("nigeria")).toBe("airegin");
});

test("reverse RaceCar", () => {
  expect(reverseString("RaceCar")).toBe("raCecaR");
});

test("reverse javascript", () => {
  expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("reverse i love you", () => {
  expect(reverseString("i love you")).toBe("uoy evol i");
});
