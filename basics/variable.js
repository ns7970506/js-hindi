const accountId =147
let accountEmail = "nikhil1234@gmail.com"
var accountpassword="12345"
console.log(accountId);
let accountstate;
// accountId not allowed
accountEmail="nikhil@gmail";
accountpassword="18198";
// we don't use var as a keyword because it a global 
// variable so it can be changed and create confusing
console.table([accountId,accountEmail,accountpassword,accountstate])