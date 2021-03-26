const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addArr = [], arr = [], preRes = "";

  if (!options.separator) {
		options.separator = "+";
	}
	if (!options.additionSeparator) {
		options.additionSeparator = "|";
	}

  if (options.additionRepeatTimes) {    
    for (let n = 0; n < options.additionRepeatTimes; n++) {
        addArr.push(String(options.addition));
    }
  } else {
    addArr.push(options.addition);
  }

  let additionRepeat = addArr.join(`${options.additionSeparator}`);
  
  preRes = str + additionRepeat;

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
        arr.push(preRes);
    }
  } else {
    arr.push(preRes);
  }

  let res = arr.join(`${options.separator}`);
  return res;
};
  