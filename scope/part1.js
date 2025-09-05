if(true){
    let a=10;
    const b=20;
}
var c=30;


// here we find that let and const are the block scope which is defined within
// parenthesis {} called block scope so if we access those a and b outside the scope
// we cannot do that because we can only access it within {} 
// but var is a global scope we can access outside the block scope 
// so it can hold updated input from the multiple developer


// console.log(a);
// console.log(b);
console.log(c);

// nested function
// function one(){
//     const username ="nikhil"
//     function two(){
//         const website="youtube"
//         console.log(username);
        
//     }
//     two()

// }

// one()

// we can perform similar operation by using if 
// if(true){
//     const username ="nikhil"
//     if(username==="nikhil"){
//         const website ="  youtube"
//         console.log(username + website);
        

//     }
//   //  console.log(website);
    
// }

// ++++++++++++++++++Intersting+++++++++++++++++
// technique 1
function addone(num){
 return num+1
}
addone(5)
// technique 2
const addtwo = function(num){
    return num+2;
}
addtwo(8)