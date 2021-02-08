function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  var myFunc = makeFunc();
  //myFunc stores the returned function displayname and when myFunc executed, it executes displayname which logs name
  //mozilla which is outside the scope of the function
  myFunc();

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  //add5 stores the returned function written inside makeAdder which when executed returns a value passed
  //in the execution parameter and value already passed to makeAdder function;
  console.log(add5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

  var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  //The 3 Functions written inside the anonymous functon has access to private privateCounter and changeBy function
  //which are private members of the anonymouse. When IIFE is applied to anonymous functon, the functions are
  //stored in var counter and can be accessed as discussed below;
  console.log(counter.value());  // 0.
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.