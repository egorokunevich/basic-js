const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = [...s1];
  let a2 = [...s2];
  return a1.reduce((acc, curr) => {
    if (a2.includes(curr)) {
      a2.splice(a2.indexOf(curr), 1);
      return (acc += 1);
    }
    return (acc += 0);
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
