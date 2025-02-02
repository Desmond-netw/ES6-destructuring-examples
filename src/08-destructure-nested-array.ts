// in this example we use destructure on nested array

const arNumber: any = [1, [20, 40, 100]];

const [num1, [num2, num3, ,]] = arNumber;

console.log("Array numbers: ", num1, num2, num3);
