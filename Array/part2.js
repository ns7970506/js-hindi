const marvel=["thor","Ironman","Spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel.push(dc_heros);
// console.log(marvel);
// console.log(marvel[3][2]);

// marvel.concat(dc_heros);
// console.log(marvel);

const allHeros =marvel.concat(dc_heros)
console.log(allHeros);

// new method using spread operator
const all_heros =[...marvel,...dc_heros]
console.log(all_heros);


// Data scrapping = jab hum kisi webpage se data lenge tab woh data kisi bhi form mein ho sakta hai like
// string , objects to usko hum array mein convert karne ke liye from method ka use karte hai
console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil"));

console.log(Array.from({name:"nikhil"})); // intersting not able to convert into array because it an objects so 
// have to give instruction whether we can array by using key or value otherwise it return an empty array

let score1=100
let score2= 200
let score3=300
console.log(Array.of(score1,score2,score3));



