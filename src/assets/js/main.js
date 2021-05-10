//A main.js file that will be your main Javascript file responsible for calling the modules that your application needs (at least the module-a and module-b)
import '../scss/main.scss';
import { arrow, Dog } from './module-a';
import { jq } from './module-b';

arrow();
const golfo = new Dog('golfo');
console.log(golfo.sayHi());

jq();
