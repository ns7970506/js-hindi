const myArr=[0,1,2,3,"nikhil",true]// element different bhi ho sakti hai
console.log(myArr[4]); // access of array
// Shallow copy of a object is a copy of a same reference point so
// when you make change to the copy it get changed to the original source too

// deep copy do not share the same referene points so when we change into the copy 
// original source could not be changed

const arr2= new Array(1,2,3,4,6);
const myHeros=['Bhagat Singh','S.C Bose','C.S Azad']


// // methods of array
// // 1 push
// myArr.push(8);
// console.log(myArr);
// //2 pop
// myArr.pop()
// console.log(myArr);

// 3 unshift - it places the element at 0 index
// myArr.unshift(7)
// console.log(myArr);


// 4 shift = it deletes the element at 0 index
// myArr.shift()
// console.log(myArr);

// 5 include =  it check the element in array and return true if present  and false if absent
// console.log(myArr.includes(9));

// 6 indexof = it check the element in an array and return 1 if present and -1 if absent
// console.log(myArr.indexOf(7));

// 7 join = Add all the element of an arary into a string seprated by comma
// const newArr= myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

/* 8 slice = Use: Array ka ek part copy karke naya array banata hai.
🔹 Original array ko change nahi karta.
🔹 Syntax:  array.slice(start, end)
 start → index jahan se copy karna hai (inclusive)

 end → index tak copy karna hai (exclusive)

👉 Example:
let arr = [10, 20, 30, 40, 50];
let result = arr.slice(1, 4);

console.log(result);   // [20, 30, 40]
console.log(arr);      // [10, 20, 30, 40, 50] (no change)

  */

/*Splice = Use: Array ke andar elements add/remove karne ke liye hota hai.
🔹 Original array ko modify karta hai.
🔹 Syntax: array.splice(start, deleteCount, item1, item2, ...)
start → index jahan se change karna hai

deleteCount → kitne elements hatane hai

item1, item2... → jo naye elements insert karne hain

👉 Example:
let arr = [10, 20, 30, 40, 50];
let result = arr.splice(1, 2, 99, 100);

console.log(result);   // [20, 30] (removed elements)
console.log(arr);      // [10, 99, 100, 40, 50] (modified)

Key Difference ek line mein

slice() → Copy banata hai (original array safe rehta hai ✅)

splice() → Original array ko tod-phod karta hai (elements add/remove hote hain 🛠️)
*/
