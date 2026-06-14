// // console.log("hello javascript")
// // setTimeout(()=>{
// //     console.log("hello js 2")
// // },3000);
// // console.log("hello js 3")

// // settimeout = delay;
// //use two example to explain 




// // project 1 add and remove Friend {SetTimeOut}

// const btn = document.querySelector("button");
// const h3 = document.querySelector("h3");

// btn.addEventListener("click",()=>{
//     h3.textContent ="request Sending"
//     h3.style.color = "gold"
//    setTimeout(()=>{
//     h3.textContent = "Friends"
//     h3.style.color = "green"
//     btn.textContent = "Remove"
//     btn.style.backgroundColor = "black"
//    },5000)
   
// })

//SetInterval
// setInterval(() => {
//     console.log("hellow");
    
// }, 1000);

// to stop this interval we have something which is clear interval 


                                                                // project 2 progress bar

const btn = document.querySelector("button");
const percent = document.querySelector("#percent")
const growth = document.querySelector("#growth")
let grow = 0
btn.addEventListener("click",()=>{
        btn.disabled = true;
        grow = 0;

   let bar =  setInterval(()=>{
        grow++
        percent.innerHTML = grow+"%" 
        growth.style.width = grow+"%"
         if (grow >= 100) {
            clearInterval(bar);

            btn.innerHTML = "Downloaded";
            btn.style.opacity = 0.5
         };
    },10)

})