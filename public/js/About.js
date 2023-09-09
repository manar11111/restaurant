let section2=document.getElementsByClassName("ABOUT")[0];
let slide=document.getElementsByClassName("slide-shadow")[0];

window.onscroll=function(){
    // fixed navbar at  point
    if(window.pageYOffset >= section2.offsetTop) {
           
        document.getElementsByTagName("nav")[0].classList.add("sticky");
    } 
    else {
        document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }

    // animation
    if(window.scrollY>=slide.offsetTop+200){
        document.getElementsByClassName('about-txt')[0].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+500){
        document.getElementsByClassName('intro')[0].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+700){
        document.getElementsByClassName('chef')[2].classList.add('show');
        document.getElementsByClassName('chef')[1].classList.add('show');
        document.getElementsByClassName('chef')[0].classList.add('show');

    }

}