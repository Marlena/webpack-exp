//https://ariya.io/2013/07/prime-numbers-factorial-and-fibonacci-series-with-javascript-array


let Factorial = {
  recursive(num){
    if (num == 0){
      return 1;
    }
    else{
      return num * this.recursive(num - 1);
    }
  },

  mapReduce(num){
    return Array.from(Array(num)).reduce((x, y, z)=> {
      return z * x + x; }, 1);
  }
};

module.exports = Factorial;