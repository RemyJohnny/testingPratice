function capitalize(str) {
  if (!str) return "the string is empty";
  const lowerCaseStr = str.toLowerCase();
  const arr = [...lowerCaseStr];
  const fL = arr.shift();
  const FL = fL.toUpperCase();
  const capitalized = lowerCaseStr.replace(fL, FL);
  return capitalized;
}
module.exports = capitalize;
