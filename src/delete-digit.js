const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = Array.from(n.toString());
  return Math.max(
    ...arr.map((item, i) => {
      max = arr.slice();
      max.splice(i, 1);

      return +max.join('');
    })
  );
}

module.exports = {
  deleteDigit,
};
