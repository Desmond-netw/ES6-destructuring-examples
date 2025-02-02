// in this example we use destructure on default value in objects

const persons: any = { PersonName: "Sandra" };

const { PersonName, Personage = 58 } = persons;

console.log(PersonName);
console.log(Personage);
