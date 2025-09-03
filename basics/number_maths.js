const score = 400
console.log(score); // here automatically they identify it is a number

const balance = new Number(100)  // by using new we explicit give instruction that this is a number
console.log(balance);

console.log(balance.toString().length);// convert number into string
console.log(balance.toFixed(2)); // give result in decimal upto given number


const othernumber = 23.9866
console.log(othernumber.toPrecision(3)); // give round off result if lie between range

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // its a usa standard by default
console.log(hundreds.toLocaleString('en-IN'));// its a indian standard

// ===============MATHS====================================

console.log(Math);
console.log(Math.abs(-4));// give absolute value
console.log(Math.round(4.7));// give round value
console.log(Math.ceil(4.3)); // give upper value
console.log(Math.floor(6.8));// give lower value
console.log(Math.sqrt(64)); // find square
console.log(Math.min(5,9,2,0)); // find minimum number
console.log(Math.max(7,9,6,0)); // find maximum number

console.log(Math.random()); // it gives random value between 0 to 1
console.log((Math.random()*10)+1); // // There is minimum value 1
console.log(Math.floor(Math.random()*10)+1);
// formula for required minimum value  
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));













