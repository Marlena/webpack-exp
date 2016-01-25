
class Calculator{
  constructor(data){
    this.data = data;
  }

  add(){
    return parseInt(this.data);
  }
};


export {Calculator as default};