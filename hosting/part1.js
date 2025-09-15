// hosting basically jaha par bhi variable declaration hota hai ya phir function declaration hota hai
// usko shift kar deta hai to the top of the scope
saymyname("nkhil");
function saymyname(fullname){
    console.log(fullname);
    
}
/* ya par function call upar hai function declaration ke so compiler automatically
function ko search karege aur result dega isiko bolte hai function hosting

iss mein toh function hosting kaam kar jayega lekin jaise hi hum function expression mein access karne ka kosish karenge
error aa jayega  for example*/


//  sayHello();
// let sayHello= function(){
//     console.log("hello ji");
    
// }


/* now variable hosting
jab hum var keyword ko declare karte hai toh woh throughout the scope hum access 
kar sakte hai jisike ki woh automatically declare toh ho jata hai lekin access nahi ho pata hai
for example */

console.log(a);
var a=25;// yaha par var automatically console.log ke upar declare ho gaya lekin 
// initailase with a valu e nahi ho paya jise undefined ho gaya

/* lekin jab hum let or const keyword ka use karte hai tab uss case mein error aata hai
ya
 */
// console.log(a);
// let a=37;
// yaha par line number 34 ,35 ko hum log temporal dead zone kehte hai.


//***************CLASS******************* */
// CLASS IS BASICALLY A BLUEPRINT JISEE KI OBJECT BANATI HAI
// JUST LIKE NAKSHA OF A GHAR IS A CLASS AND REAL GHAR IS A OBJECT


/** JUST LIKE LET CONST KEYWORD CLASS KI BHI HOSTING NAHI HOTI HAI
 * const object1 = new Human();
 * class human{
 * 
 * }
 * 
 * 
 */


// ==================CALL STACK======================
/**
  FUNCTION IS CALLED  A FIRST CLASS CITIZEN
  BECAUSE
  A ASSIGN TO A VARIABLE
  eg
  let greet = function(){
  console.log("greeting of a day")
  }
 greet();

 AS AN ARGUEMENT
  eg
  function greetme(greet,fullname){
   console.log("hello",fullname);
   greet();
   }

   function greet(){
   console.log("greeting for the day")
   }

   greetme(greet,nikhil);


 RETURN FUNCTION
 eg

 USE IN DATA STRUCTURE
 USE AS A PROPERTY
 */