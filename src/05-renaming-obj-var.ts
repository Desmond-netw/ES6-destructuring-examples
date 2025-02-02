// In this example we use destructure to rename the variable of an object

import { Console } from "console";

const User01: any = { name: "Bubu", age: 43 };

const { name: userName, age: userAge } = User01;

console.log(userName);
console.log(userAge);
