const cursor = document.querySelector("#cursor");
document.querySelector("body").addEventListener("mouseenter",(dets)=>{
cursor.style.opacity = "1"
    
})

document.querySelector("body").addEventListener("mousemove",(dets)=>{
    cursor.style.left = ( dets.clientX + 20 )+ "px"
    cursor.style.top =  (dets.clientY + 10
        
    )  + "px"
    
})
document.querySelector("body").addEventListener("mouseleave",(dets)=>{
cursor.style.opacity = "0"
   
    
})



