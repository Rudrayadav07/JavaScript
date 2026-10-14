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
// console.log("hey1 sync");
// setTimeout(()=>{
//     console.log("hey2 async")
// },0);
// Promise.resolve().then(()=>{
//     console.log("hey3 async");
    
// })
// console.log("hey4 sync");

//Now you are going to see callBack function what is it and what is call back hell 

// what is callback when a function calls another function in it is a call back.

// function name(callback){
//     console.log("hello");
//     callback()
    
// }
// name(()=>{
//     console.log("rudra")
// })
// now what is callback hell

// function stepOne(cb){
//     console.log("step 1")
//     cb();
// }
// function stepTwo(cb){
//     console.log("Step 2")
//     cb();
// }
// function stepThree(cb){
//     console.log("Step 3")
//     cb();
// }
// stepOne(()=>{
//    stepTwo(()=>{
//         stepThree(()=>{
//             console.log("all callBacks are called");
            
//         })
//    })
// })



// ## 🟢 Easy

// ### 1. Callbacks

// Create a function `greetUser` that:

// * takes a user's name
// * takes a callback
// * prints `"Hello, Rudra"`
// * then executes the callback

// Expected output:

// ```text
// Hello, Rudra
// Welcome to JavaScript!
// ```

// **Hint:** You need `greetUser(name, callback)`.

// ---
// function GreetUser(UserName,cb){
// console.log("hello",UserName);
// cb();
// }
// GreetUser("Rudra",()=>{
//     console.log("welcome to Javascript!")
// })




// ## 🟡 Medium

// ### 2. Sequential callbacks

// Create these three functions:

// ```js
// login()
// getUser()
// getPosts()
// ```

// They should execute in this exact order:

// ```text
// Login successful
// User found
// Posts loaded
// ```

// Use **callbacks** so that:

// ```text
// login → getUser → getPosts
// ```

// You should end up with a small nested callback structure.

// **Goal:** Understand how one callback triggers the next operation.

// function login(cb){
// console.log("login SuccessFull");
// cb();
// }
// function getuser(cb){
// console.log("User Found");
// cb();
// }
// function getPost(cb){
// console.log("Post Loaded");
// cb();
// }
// login(()=>{
//     getuser(()=>{
//         getPost(()=>{

//         })
//     })
// })
// ## 🔴 Hard

// ### 3. Build Callback Hell

// Create these functions:

// ```text
// registerUser
// sendVerificationEmail
// verifyUser
// loginUser
// getDashboard
// ```

// They must execute in this exact order:

// ```text
// User registered
// Verification email sent
// User verified
// User logged in
// Dashboard loaded
// ```

// ### Rules

// * Every function must accept a callback.
// * The next function should run **only after** the previous function finishes.
// * Use only callbacks.
// * **Do not use Promises or async/await.**

// Your final code should naturally look something like:
// function registerUser(cb){
// console.log("User registered");
// cb();
// }
// function sendVerificationEmail(cb){
//  console.log("Verification email sent");
//    cb(); 
// }
// function verifyUser(cb){
//   console.log("User verified");
//    cb(); 
// }
// function loginUser(cb){
//   console.log("User logged in");
//    cb(); 
// }
// function getDashboard(cb){
//    console.log("Dashboard loaded");
//     // cb();
// }

// registerUser(()=>{
//     sendVerificationEmail(()=>{
//         verifyUser(()=>{
//             loginUser(()=>{
//                 getDashboard(()=>{

//                 })
//             })
//         })
//     })
// })

// Now we are going to learn promises 
// definatiom of promise :- Promise is a javascript object that represent the eventually result of asynchronous operation
// it means i don't have result right now but i promise i will give it to you 
// why do we need promise :-
// 1 fetching data from the api 
// 2 Database operation 
// 3 waiting for something 
// 4 reading the file 
// 5 sending the request to the server 

// const promise = new Promise((res,rej)=>{
// //res stands for resolve tell that the operation is successful 
// // rej stands for rejected tell that the operation is rejected 
// let success = true;
// if(success){
//     res("resolved")
// }
// else{
//     rej("rejected")
// }
// })

// promise.then((result)=>{
//     console.log(result);
    
// })
// .catch((result)=>{
//     console.log(result);
    
// })

// function StepOne(){
//      return new Promise((res,rej)=>{
//         console.log("Step1");
//         res()
//     })
// }
// function StepTwo(){
//      return new Promise((res,rej)=>{
//         console.log("Step2");
//         rej()
//     })
// }
// function StepThree(){
//      return new Promise((res,rej)=>{
//         console.log("Step3");
//         res()
//     })
// }
// StepOne().then(StepTwo).then(StepThree).then(()=>{
//     console.log("all the steps are resolved");
    
// }).catch(()=>{
//     console.log("rejected");
    
// })


//Now we are going to simulate the good deleviry setup creating a function name OrderedFood that returns a promise after Two second!
// function OrderedFood(){
//     let foodOrdered = true
//     return new Promise((res, rej)=>{
//         if(foodOrdered){
//        setTimeout(()=>{
//            res("Pizza delivered")
//         },2000)
//     }
//     else{
//     rej(()=>{
//         console.log("delivery Failed")
//     })
// }  
//     })
// }
// OrderedFood().then((result)=>{
//     console.log(result);
    
// }).catch((result)=>{
// console.log(result);

// })

function getUsers(){
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({id:1,Name:"Rudra"})
        },1000)
   })
}
function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(["title1","title2"])
        },1000)
    })
}
function getComments(PostId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(["good","amazing","love it"])
        }, 1000);
    })
}

// getUsers().then((data)=>{
//     console.log(data);
//     return getPosts()
// }).then((titles)=>{
//     console.log(titles)
//     return getComments()
// }).then((cmts)=>{
//     console.log(cmts);
    
// })
getUsers().then((data)=>{
    console.log(data)
    return getPosts();
}).then((title)=>{
    console.log(title)
    return getComments()
}).then(()=>{
    console.log("getting post");
})