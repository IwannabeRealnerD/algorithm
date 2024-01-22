// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // 1.
  //   const reversedStr = str.split("").reduce((acc, currentValue) => {
  //     return currentValue + acc;
  //   }, "");
  //   return str === reversedStr;
  // 2.
  const originalArr = str.split("");
  return originalArr.every((value, index) => {
    return value === originalArr[originalArr.length - index - 1];
  });
}

module.exports = palindrome;
