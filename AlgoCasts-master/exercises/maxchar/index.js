// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const array = str.split("");
  let maxValue = 0;
  let maxChar = "";
  const charsObj = {};

  for (let element of array) {
    if (!charsObj[element]) {
      charsObj[element] = 1;
    } else {
      charsObj[element]++;
    }
  }
  const keyArr = Object.keys(charsObj);
  keyArr.forEach((key) => {
    if (charsObj[key] > maxValue) {
      maxValue = charsObj[key];
      maxChar = key;
    }
  });
  console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;
