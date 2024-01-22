// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   1. for of
  //     const paramarray = str.split("");
  //     const resultArray = [];
  //     for (const element of paramarray) {
  //       resultArray.unshift(element);
  //     }
  //     return resultArray.join("");
  // 2. for of
  //   let resultString = "";
  //   for (const character of str) {
  //     resultString = character + resultString;
  //   }
  //   return resultString;
  //   3.for
  //   const paramArray = str.split("");
  //   const resultArray = [];
  //   for (let index = 0; index <= paramArray.length; index++) {
  //     resultArray.push(paramArray[paramArray.length - index]);
  //   }
  //   return resultArray.join("");
  //   4. reduce
  const paramArray = str.split("");
  const resultArray = paramArray.reduce((acc, currentValue) => {
    return currentValue + acc;
  }, "");
  return resultArray;
}

module.exports = reverse;
