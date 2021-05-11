/*
  A "main.js" file that will be the main Javascript file responsible for calling the modules that the application needs (at least the module-a and module-b).
*/

// Import ".scss" stylesheet
import "../scss/main.scss";

// Import favicon
import "../img/webpack-icon.png";

// Import module-a (ECMAScript 6)
import { sayHi, Rectangle } from "./module-a.js";

// Import module-b (jQuery)
import { jQueryAction } from "./module-b.js";

// Test module-a is working
console.log(sayHi("Jorge"));

const myRectangle = new Rectangle(5, 4);
console.log(myRectangle.sayDetails());

// Test module-b is working
jQueryAction();

// Code snippet to check whether or not the code has been transpiled by babel
const isBabel = !(class {}.toString().indexOf("class ") === 0);
console.log(isBabel); // should return "true"
