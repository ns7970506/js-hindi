/* types of datatypes
There are two types of data types
1 primitive datatypes
they are basically call by value types so we don't get the actual address 
we get the copy of the data and whatever the changes have been made are made to the copy 
of the data
   types of primitive datatype
   String,
   Number
   Boolean
   Null(empty, not zero,ekdam khali)
   undefined (means variable declare kar diya hai lekin usme value assigh nahi hua hai)
   Symbol(kisi bhi value ko unique banane ke liye use mein liya jata hai,mainly use in react)
   BigInt(it is use to handle large integer value)

   2 Reference types(Non primitive types)
   we get access to the reference in the memory

   types of non primitive types
   Array
   eg: const heros ={"shakkti","naagraj","bheem"};


   Objects
   eg:
   let students{
   name:"Nikhil",
   age:23,
   city:"Delhi NCR",
   College:"Gandu College"
   };


   Functions
   eg:
   const myfunctions = functions(){
   console.log("Hello World");
   }

   javascript is a dynamically types language because one variable can store multiple types
*/
/*  MEMORY ALLOCATIONS(stack , heap)
   All primitive data type are using stack memory
   when stack memory is used we get copy of variable
   

   All Non primitive data types are using heap memory
   when heap memory is used we get access to the address of original value

*/