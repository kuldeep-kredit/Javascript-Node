"use strict";

const promise = new Promise(function(resolve, reject) {
    console.log("Promise callback");
    resolve("This is the result");
  }).then(function(result) {
    console.log("Promise callback (.then)", result);
  });
  
  setTimeout(function() {
    console.log("event-loop cycle: Promise (fulfilled)", promise)
  }, 1000);
  
  console.log("Promise (pending)", promise);

  let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250)
    setTimeout( function() {
        reject("404 not found");  // Did not go well!
      }, 249)
    
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
  })
  .catch(error => {
      console.log('error occured ', error);
  })
