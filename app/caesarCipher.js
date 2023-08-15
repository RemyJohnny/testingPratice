class CaeserCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encipher(string, shift = this.shift) {
    const newString = string.toLowerCase();
    let result = "";
    const re = /[a-z]/;
    for (let i = 0; i < newString.length; i += 1) {
      if (re.test(newString.charAt(i))) {
        result += String.fromCharCode(
          ((newString.charCodeAt(i) - 97 + shift) % 26) + 97
        );
      } else result += newString.charAt(i);
    }
    return result;
  }

  decipher(string, shift = this.shift) {
    const newString = string.toLowerCase();
    let result = "";
    const re = /[a-z]/;
    for (let i = 0; i < newString.length; i += 1) {
      if (re.test(newString.charAt(i))) {
        result += String.fromCharCode(
          ((newString.charCodeAt(i) - 97 + 26 - shift) % 26) + 97
        );
      } else result += newString.charAt(i);
    }
    return result;
  }
}

const cipher = new CaeserCipher(13);
module.exports = cipher;
