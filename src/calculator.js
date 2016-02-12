let Calculator = {

  //the add signature uses concise method syntax
  //https://github.com/esnext/es6-object-concise
  add(numString){

    //pre-process the string into an array of int
    const numArray = this.buildIntArray(numString);

    return numArray.reduce((previous, current) => previous + current, 0);
  },

  delimiterRegEx(str){
    const regEx = new RegExp("^//");
    if (regEx.test(str)) return true;
    return false;
  },

  delimiter(str){

    let regexArray;
    //had to use quotes for this regex because of the ///
    const regex = new RegExp("\/\/(.*)\\n");

    //should return everything between the // and the /n
    //ex. "//;\n1;2" should return ;
    if (this.delimiterRegEx(str))
    {
      //exec returns an array with the delimiter in the 2nd position
      regexArray = regex.exec(str);
      return regexArray[1];
    }
    return str;
  },

  buildIntArray(str){

    if (!this.delimiterRegEx(str)){
      return JSON.parse(`[${str.replace(/\n/, ',')}]`);
    }

    const delimiter = this.delimiter(str);

    return JSON.parse(`[${this.extractList(str).replace(delimiter, ',')}]`)
  },

  extractList(str){
    if (!this.delimiterRegEx(str)) return str;

    //extract the last line into a regex group
    const regex = new RegExp("\/\/(.*)\\n(.*)");
    const regexArray = regex.exec(str);
    return regexArray[2];
  }
};

module.exports = Calculator;