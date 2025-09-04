/*
there is two method to construct an objects
1.literals  2. constructor
object.create(syntax)
when we make objects by using constructor it becomes singleton objects matlab sirf ek hi instance (object) banega aur wahi baar-baar use hoga.

Matlab chahe jitni baar call karo, naya object nahi banega — hamesha wahi same object return hoga.


object literals
*/
const mySym = Symbol("Key1")
const jsuser={
    name : "Nikhil",
    "fullname":"sharma",
    [mySym]:"myKey1",
    age:23,
    Locations:"Ghaziabad",
    Email:"ns7970506@gmail.com",
    IsloggedIn:false,

};
// console.log(jsuser.Email);
// console.log(jsuser["Email"]); // if input is in string
// console.log(jsuser["fullname"]);
// console.log(jsuser[mySym]);

// jsuser.Email="nikhil@google"
// console.log(jsuser.Email);
// Object.freeze(jsuser)// to freeze the objects
// console.log(jsuser);


jsuser.greeting=function(){
    console.log("Hello Js User");
    
}
jsuser.greetingTwo=function(){
    console.log('Hello js user, ${this.name}');
    
    
}
console.log(jsuser.greeting);
console.log(jsuser.greetingTwo());




