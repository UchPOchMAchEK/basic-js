const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],

  getLength() {
    return this.res.length;
  },

  addLink(value = ' ') {
    this.res.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if(position > this.res.length || !Number(position) || position !== Math.round(position)){
      this.res = [];
      throw new Error();
    }else {
      this.res = [...this.res.slice(0,position-1), ...this.res.slice(position)];
      return this;
    }
  },

  reverseChain() {
    this.res.reverse();
    return this;
  },
  
  finishChain() {
    try{
      return this.res.join('~~');
    }finally {
      this.res = [];
    }
  }
};

module.exports = chainMaker;