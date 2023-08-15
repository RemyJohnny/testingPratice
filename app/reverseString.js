function reverseString(str) {
  if (!str) return "the string is empty";
  const arr = [...str];
  const result = [];
  for (i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }

  return result.toString().replaceAll(",", "");
}

module.exports = reverseString;
