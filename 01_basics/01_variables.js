const accountId = 14453
let accountEmail = "ishaanjaswal007@gmail.com"
var accountPassword = "1235"
accountCity = "Jaipur"
let accountState;

//accountId = 2  //not allowed 

accountEmail = "ishaanjaswalnot20@gmail.com"

accountPassword = "21212"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);

/* for declaring the variables use let instead of var beacause of issue in block and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);