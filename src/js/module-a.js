/* A file called module-a.js that contains a javascript module that makes use of the new features of ECMAScript 6 such as:
Make use of the arrow function
Make use of the new ECMAScript 6 class structure
Make use of the Template Strings
Make use of Let and Const
 */

export const arrow = () => {
  let variable = 'change let';
  console.log('arrow function ok');
  variable = 'changed let';
  console.log(variable);
};

export class Dog {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `${this.name} say wouf!`;
  }
}
