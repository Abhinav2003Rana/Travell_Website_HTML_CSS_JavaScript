const nav = document.querySelector(".nav-bar");


window.addEventListener('scroll', () =>{
    if (window.scrollY >= 80){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})

let next = document.querySelector(".next");
next.addEventListener("click", ()=>{
    let img = document.querySelectorAll(".img1");
    document.querySelector(".items").prepend(img[img.length-1])
})