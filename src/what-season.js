const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  let res = date.getMonth() + 1;

  if(res === 12 || res === 1 || res === 2){
    return 'winter';
  }

  if(res === 3 || res === 4 || res === 5){
    return 'spring';
  }

  if(res === 6 || res === 7 || res === 8){
    return 'summer';
  }

  if(res === 9 || res === 10 || res === 11){
    return 'autumn';
  }
};

// function test(date){
//   let res = date.getMonth() + 1;

//   if(res === 12 || res === 1 || res === 2){
//     return 'winter';
//   }

//   if(res === 3 || res === 4 || res === 5){
//     return 'spring';
//   }

//   if(res === 6 || res === 7 || res === 8){
//     return 'summer';
//   }

//   if(res === 9 || res === 10 || res === 11){
//     return 'autumn';
//   }
// }
// console.log(test(new Date('2021-02-25')));