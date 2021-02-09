"use strict";
let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f(); // {a: 1, b: 2}
 
 // add properties in f function's prototype
 f.prototype.b = 3;
 f.prototype.c = 4;

 console.log(o);
 
 console.log(o.a); // 1
 // Is there an 'a' own property on o? Yes, and its value is 1.
 
 console.log(o.b); // 2
 // Is there a 'b' own property on o? Yes, and its value is 2.
 // The prototype also has a 'b' property, but it's not visited.
 // This is called Property Shadowing
 
 console.log(o.c); // 4
 // Is there a 'c' own property on o? No, check its prototype.
 // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
 
 console.log(o.d); // undefined
 // Is there a 'd' own property on o? No, check its prototype.
 // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
 // o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
 // o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
 // no property found, return undefined.

 var k = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };
  
  //console.log(k.m()); // 3
  // When calling k.m in this case, 'this' refers to k
  
  var p = Object.create(k);
  // p is an object that inherits from k
  
  p.a = 4; // creates a property 'a' on p
  console.log(p.m()); // 5

function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );