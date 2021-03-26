const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true){
    this.flag = flag;
  }

  encrypt(mes, key) {
    if (!mes || !key) {
      throw new Error ('Error');
    }

    let res = '';
    let count = 0;

    mes = mes.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < mes.length; i++){
      if (mes.charCodeAt(i) >= 65 && mes.charCodeAt(i) <= 90) {
        res += String.fromCharCode((mes.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) % 26 + 65);
        count++;
      } else {
        res += mes[i];
      }
    }
    if (this.flag) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }  

  decrypt(mes, key) {
    if (!mes || !key) {
      throw new Error ('Error');
    }

    let res = '';
    let j = 0;

    key = key.toUpperCase();
    mes = mes.toUpperCase();

    for (let i = 0; i < mes.length; i++){
      if (mes.charCodeAt(i) >= 65 && mes.charCodeAt(i) <= 90) {
        res += String.fromCharCode(
          (mes.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      } else {
        res += mes[i];
      }
    }
    if (this.flag) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
