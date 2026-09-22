// //Example 1
// console.log("hey");
// setTimeout(()=>{
//     console.log("hey3");

// const { log } = require("async");

// const { log } = require("async");


    
// },0)
// Promise.resolve().then(()=>{
//     console.log("hey2");
    
// })
// console.log("hey4");


// ## 🔁 1. Callback Functions

// ### ✅ Definition:
// A **callback** is a function passed as an argument to another function and is executed after the completion of that function.

// ### 🧠 Why Use Callbacks?
// They allow us to run code **after** a long-running operation is completed (e.g., fetching data from an API).

// function sayBye() {
//   console.log("bye bye miss american pie !");
// }
// function greet(name, fnc) {
//   console.log("Hi " + name);
//   fnc();
// }



// greet("annnnddd", sayBye);


//  2. Callback Hell (Pyramid of Doom)

// ### ❗ Problem:
// When callbacks are **nested within other callbacks**, it leads to code that is hard to read and maintain. This is known as **callback hell**.
// function loginUser(){
//     console.log("heelo");
    
// }

// loginUser("user", function(user) {
//   getUserPosts(user.id, function(posts) {
//     getComments(posts[0], function(comments) {
//       console.log(comments);
//     });
//   });
// });
// loginUser("User",fnc)
// function fnc(user){
//     getUserPosts(user.id,fnc2)
    
// }
// function fnc2(posts){
//     getComments(posts[0],fnc3);

// }
// function fnc3(){
//     console.log('comments');
    
// }

// This leads to:

// - Hard-to-read code
// - Difficult error handling
// - No proper flow control

// ### 🔧 Solution:
// Use **Promises** and **async/await** for better structure

// What is promises:- Promise is an object representing the eventual result of asynchronus operation
// const promise = new Promise((resolve,reject)=>{
        
// })

// here you learn the concept of microtask and Macrotask 
console.log("hey1 sync");
setTimeout(()=>{
    console.log("hey2 async")
},0);
Promise.resolve().then(()=>{
    console.log("hey3 async");
    
})
console.log("hey4 sync");
