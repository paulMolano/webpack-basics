/*
  A file called "module-a.js" that contains a javascript module that makes use of the new features of ECMAScript 6 such as:
    ●	An arrow function
    ●	The new ECMAScript 6 class structure
    ●	Template Strings
    ●	"let" and "const"
*/

export let sayHi = (user) => {
  return (`Welcome to the webpack basics pill, ${user}!`);
}

export class Rectangle {

  constructor(width, height) {
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    const area = this.width * this.height;
    return area;
  }

  sayDetails() {
    return "This polygon is a " + (this.name).toLowerCase() + " with an area of " + this.calculateArea() + " units";
  }

}