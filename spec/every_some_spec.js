
let validate = {
  checkUsersValid(){
    return true;
  }

};

describe('Node School -- FP -- every, some', () => {


  let goodUser;
  let testAllValid;

  beforeEach(() => {

    goodUser = [
      { id: 331, name: 'Mollit Quis' },
      { id: 1000, name: 'Ipsum Qui' },
      { id: 325, name: 'Dolore Sint' },
      { id: 241, name: 'Minim In' } ];

    spyOn(validate, 'checkUsersValid').and.callThrough();

    testAllValid = validate.checkUsersValid(goodUser);
    
  });


  describe('checkUsersValid', () => {

    it('returns true', () => {
      expect(validate.checkUsersValid()).toBe(true);
    });

    it('was called', () => {
      expect(validate.checkUsersValid).toHaveBeenCalled();
    });

    it('was called with a list of users', () => {
      expect(validate.checkUsersValid).toHaveBeenCalledWith(goodUser);
    });

  });

  describe('test all valid', () => {
    it('', () => {
      
    });

  });




  
});