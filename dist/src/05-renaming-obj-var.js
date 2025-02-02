"use strict";
// In this example we use destructure to rename the variable of an object
Object.defineProperty(exports, "__esModule", { value: true });
const User01 = { name: "Bubu", age: 43 };
const { name: userName, age: userAge } = User01;
console.log(userName);
console.log(userAge);
