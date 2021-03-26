const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr is not array!');
  }

  const controls = {
    discardNext: '--discard-next',
    discardPrev: '--discard-prev',
    doubleNext: '--double-next',
    doublePrev: '--double-prev'
  };

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === controls.discardPrev) {
      res.pop();
    }
   else if (arr[i] === controls.doublePrev) {
       if (res[res.length-1] !=undefined) {
        res.push(res[res.length-1]);
    }}
    else if (arr[i] === controls.doubleNext) {
        if (arr[i+1] != undefined) {
        res.push(arr[i+1]);
    }}
    else if (arr[i] === controls.discardNext && 
      (arr[i+2] === controls.doublePrev || arr[i+2] === controls.discardPrev)) {
        i+=2;
    }
    else if (arr[i] === controls.discardNext) {
        i++;
    }
    else {
      res.push(arr[i]);
    }
  }

  return res;
};
