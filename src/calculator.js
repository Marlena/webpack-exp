class Calculator{
  constructor(data){
    this.data = data;
  }

  add(numString){

    let sum;

    const parsedString = this.removeNewLine(numString);
    const numArray = this.parseIntArray(parsedString);

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
    numStringArray = numString.split([',']);

    //arrow syntax
    numStringArray.forEach(num => intArray.push(parseInt(num)) );

    return intArray;
  }
}

export {Calculator as default};