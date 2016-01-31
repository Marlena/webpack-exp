class Calculator{

  add(numString){

    let sum;
    //pre-process the string into shape
    const numArray = this.parseIntArray(this.removeNewLine(this.delimitWithCommas(numString)));

    //destructuring
    const [addend] = numArray;

    if(numArray.length > 1){
      //arrow syntax
      sum = numArray.reduce((previous, current) => previous + current);
      return sum;
    }
    return (addend > 0) && addend || 0;
  };

  removeNewLine(str){
    let parsedStr = '';
    const regex = (/\n/);
    parsedStr = str.replace(regex, ',');

    return parsedStr;
  }

  parseIntArray(numString){

    if (numString === '') return [0];

    const intArray = [];
    let numStringArray = numString.split([',']);

    //arrow syntax
    numStringArray.forEach(num => intArray.push(parseInt(num)) );

    return intArray;
  }

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
  };

  delimiterRegEx(str){
    const regEx = new RegExp("^//");
    if (regEx.test(str)) return true;
    return false;
  }

  delimitWithCommas(str){

    if (!this.delimiterRegEx(str)) return str;

    const delimiter = this.delimiter(str);
    const regexDelimiter = new RegExp(delimiter);

    //extract everything after the delimiter line
    const regex = new RegExp("\/\/(.*)\\n(.*)");
    const regexArray = regex.exec(str);
    const delimitedStr = regexArray[2];

    const commaStr = delimitedStr.replace(regexDelimiter, ',');

    return commaStr;
  }
}

export {Calculator as default};