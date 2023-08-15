class Calculator {
  constructor() {
    this.res = 0;
  }

  add(num1, num2) {
    if (!num1 && !num2) return "there are no number to add";
    if (!num2) return parseFloat(num1, 10);
    if (!num1) return parseFloat(num2, 10);
    this.res = parseFloat(num1, 10) + parseFloat(num2, 10);
    return this.res;
  }

  subtract(num1, num2) {
    if (!num1 && !num2) return "there are no number to add";
    if (!num2) return parseFloat(num1, 10);
    if (!num1) return parseFloat(num2, 10);
    this.res = parseFloat(num1, 10) - parseFloat(num2, 10);
    return this.res;
  }

  divide(num1, num2) {
    if (!num1 && !num2) return "there are no number to add";
    if (num1 === 0) return 0;
    if (!num2) return parseFloat(num1, 10);
    if (!num1) return parseFloat(num2, 10);
    this.res = parseFloat(num1, 10) / parseFloat(num2, 10);
    return this.res;
  }

  multiply(num1, num2) {
    if (!num1 && !num2) return "there are no number to add";
    if (!num2) return parseFloat(num1, 10);
    if (!num1) return parseFloat(num2, 10);
    this.res = parseFloat(num1, 10) * parseFloat(num2, 10);
    return this.res;
  }
}

const calculator = new Calculator();
module.exports = calculator;
