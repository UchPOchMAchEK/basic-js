const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = [];

  if (Array.isArray(members)){
    members.forEach(item => {
      if(typeof item === 'string'){
        if(item === ''){
          return false;
        }
        item = item.trim();
        res.push(item[0].toUpperCase());
      }
    });
    return res.sort().join('');
  }
  return false;
 
};
