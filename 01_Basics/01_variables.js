const accountId = 122332;
let accountEmail = "nikhil@gmail.com";
var accountPassword = "12345";
accountCity  = "Jaipur";
let accountState;
// accountId = 2; // not allowed 
accountEmail = "hd@gmail.com";
accountPassword = "13211";
accountCity = "Rajpura";
console.log(accountId);

/*
Prefer not to use var
becouse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);