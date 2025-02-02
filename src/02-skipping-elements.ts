// in this example use destructure to skipy an element of an array

let values: number[] = [1, 2, 4, 5, 6, 8];

const [firstvalue, secondvalue, , fouthvalue, fiftvalue, sexvalue] = values;

console.log(firstvalue);
console.log(secondvalue);
console.log(fiftvalue);
