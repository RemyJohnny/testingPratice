const cipher = require("../app/caesarCipher");

// shift factor of 13 on default
test("test on plaintext", () => {
  expect(cipher.encipher("i love you")).toBe("v ybir lbh");
});

test("decipher test on plaintext", () => {
  expect(cipher.decipher("v ybir lbh")).toBe("i love you");
});

test("test on punctuations ", () => {
  expect(cipher.encipher("loading...")).toBe("ybnqvat...");
});

test("decipher test on punctuations ", () => {
  expect(cipher.decipher("ybnqvat...")).toBe("loading...");
});

test("test on test wrapping ", () => {
  expect(cipher.encipher("jazz")).toBe("wnmm");
});

test(" decipher test on test wrapping ", () => {
  expect(cipher.decipher("wnmm")).toBe("jazz");
});

// custom shift factor 20
test(" test on test custom shift factor", () => {
  expect(cipher.encipher("i love juicewrld", 20)).toBe("c fipy docwyqlfx");
});

test("Decipher test on test custom shift factor", () => {
  expect(cipher.decipher("c fipy docwyqlfx", 20)).toBe("i love juicewrld");
});
