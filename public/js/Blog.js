let section2=document.getElementsByClassName("Blog")[0];
let slide=document.getElementsByClassName("slide-shadow")[0];

window.onscroll=function(){
    // fixed navbar at  point
    if(window.pageYOffset >= section2.offsetTop) {
           
        document.getElementsByTagName("nav")[0].classList.add("sticky");
    } 
    else {
        document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }
}