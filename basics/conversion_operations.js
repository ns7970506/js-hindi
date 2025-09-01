let score="nikhil";
console.log(typeof score);
console.log(typeof(score));

// conversion
let value = Number(score);
console.log(typeof value);
console.log(value);
// "33" is a string gets easily converted in integer but "33abs" is not converted 
// and get result nan
// if we take value true it gets converted in 1 and false value get converted into 0
let isloggedIn =1
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);
// 1=> true; 0=>false
//"" => false , "nikhil"=>true
let somenumber=88;
let stringnumber = String(somenumber);
console.log(stringnumber);

console.log(typeof stringnumber);