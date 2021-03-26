const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let tmp = 0;
  matrix.forEach(e => {
    if (e.includes('^^')){
      let cat = e.filter(i => i === '^^');
      tmp += cat.length;
    }
  });
  return tmp;
};
