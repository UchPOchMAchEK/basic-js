const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  const second = Math.floor((1 / (turnsSpeed / 60 / 60)) * turns);

  return { 
    turns: turns,
    seconds: second
  };
};