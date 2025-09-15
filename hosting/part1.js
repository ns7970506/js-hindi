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
 */
// console.log(a);
// let a=37;
