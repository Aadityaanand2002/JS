const accountId = 18246
let accountEmail = "eshanrio@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2. // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "2345"
accountCity = "Delhi"
let accountState;

console.log(accountId);

/*
preffer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
