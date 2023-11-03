function receivesAFunction(callback) {
    console.log(callback());
};
receivesAFunction(() => "I am blessed");

function returnsANamedFunction() {
  
    return function namedFunction () {
      console.log('Lets go')
    };
  };

  function returnsAnAnonymousFunction() { 
        return function() {
          console.log('I have no name')
        }
    };
