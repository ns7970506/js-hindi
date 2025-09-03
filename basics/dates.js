// Dates
let myDate = new Date()
// this method give different format of date
// console.log(myDate); // given random value
// console.log(myDate.toString()); // give understandable date and time
// console.log(myDate.toDateString()); // return a date as a string value
// console.log(myDate.toISOString());// return a date as a string in ISO format
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate); // return object

// let mycreateddate = new Date(2025,0,3)
// console.log(mycreateddate.toDateString());
let mycreateddate = new Date("01-14-2025")
console.log(mycreateddate.toLocaleString());

let myTime = Date.now()

console.log(myTime);
console.log(mycreateddate.getTime()); // it gives time in milli seconds

console.log(Math.floor(Date.now()/1000)); //it reduces the milli seconds

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());

// ${newdate.getDay()} and the time

newdate.toLocaleString('default',{
    weekday:'long',

})





