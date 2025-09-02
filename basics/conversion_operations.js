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


// OPERATONS

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)


// let str1="hello"
// let str2="nikhil"
// let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2+2);// string conversion takes place
// console.log(1+2+"2");// no 

// comparison of datatype


// console.log(2>1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1) // automaticallly js converts string to a number type
// console.log("02">1)

console.log(null >0);
console.log(null==0);
console.log(null>=0);// null get converted to zero so it give true others are false

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);// all get false because no conversion takes place

// === it check value as well as their datatype
console.log("2"===2);





