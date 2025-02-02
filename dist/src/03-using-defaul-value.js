"use strict";
// in this example I use default value and added more value to the array
let colors = ["red"];
const [primary, secondry = "blue"] = colors;
console.log(primary);
console.log(secondry);
