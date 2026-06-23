const accountId = 14453
let accountEmail = "nivedtia@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail ="hc@hc.com"  
accountPassword = "3243454"
accountCity= "agra"

 /*
prefer not to use var because of issue in block and functional scope
 */

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])