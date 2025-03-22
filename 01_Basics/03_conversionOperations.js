let score = "33";

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

// "33" => 33 convert kar deta hai 
// "33abc" => NaN number main convert karne ki kushis karta hai lakin nhai kar pata
//  true => 1; false => 0
// null => 0; undefined => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" =? false
// "nikhil" => true

let someNumber = 22
let stringNumber = String(someNumber)
console.log(typeof stringNumber);



