// in this example I use default value and added more value to the array

let colors: string[] = ["red"];

const [primary, secondry = "blue"] = colors;

console.log(primary);
console.log(secondry);
