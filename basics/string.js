const name="nikhil"
const repoCount=50
// console.log(name + repoCount +" value"); outdated so we don't use
// modern type
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gamename=new String('nikhil') // new creates an  string as a objects in a key value pair
console.log(gamename);
console.log(gamename[4]);

console.log(gamename.__proto__);

// // string method
// // 1 length
// console.log(gamename.length);
// // 2 toLowerCase
// console.log(gamename.toLowerCase());
// // 3 toUpperCase
// console.log(gamename.toUpperCase());
// //CharAt
// console.log(gamename.charAt(5));

// index of to find position of given character
console.log(gamename.indexOf('k'));
// substring method (we cannot give negative value)
const newString = gamename.substring(0,3);
console.log(newString);

// slice method (we can give negative value)
const anotherString= gamename.slice(-5,4);
console.log(anotherString);

// trim method use to erase the extra space
const newStringone = "  nikhil   ";
console.log(newStringone);
console.log(newStringone.trim());

// replace method 
const url = "https://nikhil.com/nikhil%20sharma"
console.log(url.replace('%20',' '));

// include method is used to check the given value in a url
console.log(url.includes('nikhil'));
console.log(url.includes('jsbkj'));







