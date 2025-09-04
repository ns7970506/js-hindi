// singleton eg
// const user = new Object()
// console.log(user);

// non singleton
 const user = {}
 user.id ="67567"
 user.name="nikhil"
 user.isLoggedIn = false;;
// console.log(user);

// we can do nesting of loop
const regularuser={
    email:"someone@google.com",
    fullname:{
        username:{
            firstname:"Nikhil",
            lastname:"Sharma"
        }
    }
}
console.log(regularuser.fullname.username.firstname);

// combining of two object
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3={obj1,obj2}
// console.log(obj3);/// problem

//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
/*
Object.assign() kya hai?

JavaScript ka built-in method hai.

Iska use ek ya ek se zyada source objects ki properties ko target object me copy karne ke liye hota hai.

Target object modify hota hai (aur wahi return bhi hota hai).
Object.assign(target, ...sources)

*/
// mostly used is spread operator(...) to combine two object in another objects
// const obj3={...obj1,...obj2}
// console.log(obj3);
 


// // method
// console.log(Objects.keys(user));


// Destructure

const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstruction:"hitesh"
};
// console.courseInstruction
const{courseInstruction}=course
console.log(courseInstruction);

 // json = backened se value aati hai us value ko hum kaise likte hai usiko hum json kehte hai
//  {
//     "name":"nikhil",
//     "coursename":"js in hindi",
//     "price":"free"
//  }