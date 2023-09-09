
let slide=document.getElementsByClassName("slide-shadow")[0];
let navbar=document.getElementsByTagName("nav")[0];
let section2=document.getElementsByClassName("section2")[0];

let expert=document.getElementById("EXPER");
let menus=document.getElementById("MENUS");
let staffs=document.getElementById("STAFFS");
let customers=document.getElementById("CUSTOMERS");

let facts=document.getElementsByClassName("facts")[0];


j=0
window.onscroll=function(){

// fixed navbar at  point
    if(window.pageYOffset >= section2.offsetTop) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }

// animate the message
   if(window.scrollY>=slide.offsetTop+200){
      document.getElementsByClassName("welcom-message")[0].classList.add('show')
      document.getElementsByClassName("images")[0].classList.add('show')
   }

//    facts ccounter
   if(j==0)
   if(window.scrollY>=section2.offsetTop+430){
    let  i=0, k=0;
    let interval=window.setInterval(() => {
        i++;
        j+=2;
        k+=500;
        if(i<19)
        expert.innerHTML=i;
        menus.innerHTML=j;
        staffs.innerHTML=i;
        customers.innerHTML=k;
        if(i==50){
        clearInterval(interval);}

    }, 120);
    }


    // animate photos
    if(window.scrollY>=facts.offsetTop-100){
        
        document.getElementsByClassName("row")[0].classList.add('show2');
        
    }
    if(window.scrollY>=facts.offsetTop+50){
        
        document.getElementsByClassName("row")[1].classList.add('show2');
        
    }

   
   
}