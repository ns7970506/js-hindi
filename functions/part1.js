function saymyname(){
console.log("N");
console.log("i");
console.log("k");
console.log("h");
console.log("i");
console.log("l");
}
// saymyname()

//  function addtwonumber(number1,number2){
//     console.log(number1+number2);
    
//  }
//  function addtwonumber(number1,number2){
//      let result = number1 + number2;
//      return result;
//  }

// const result = addtwonumber(4,8)
// console.log(result);


function loginUser(username){
    if(username===undefined){
        console.log("please enter the username");
        return;
        
    }
    return `${username} just logged in`
}
// console.log(loginUser("nikhil"));
// console.log(loginUser()); // undefined



// function calcilateCartPrice( val1,...num){  // it basically club the input and store in one place in array
// return num;
// }
// console.log(calcilateCartPrice(200,500,900));


// function with object
// const user={
//     username:"nikhil",
//     price:"879"
// };
// function handleobject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// handleobject(user)


// function with array
const myArray=[200,400,600,800];

function returnvalue(getArray){
    return getArray[2]
}

// console.log(returnvalue(myArray));
console.log(returnvalue([4565,6766,8767]));
