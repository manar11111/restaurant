let section2=document.getElementsByClassName("specialties")[0];
let slide=document.getElementsByClassName("slide-shadow")[0];


window.onscroll=function(){


    // fixed navbar at  point
        if(window.pageYOffset >= section2.offsetTop) {
           
            document.getElementsByTagName("nav")[0].classList.add("sticky");
        } 
        else {
            document.getElementsByTagName("nav")[0].classList.remove("sticky");
        }

     // animate row by row 
        if(window.scrollY>=slide.offsetTop+150){
            document.getElementsByTagName('h2')[0].classList.add('show');
    
        }

        if(window.scrollY>=slide.offsetTop+230){
            document.getElementsByClassName('row')[0].classList.add('show');
    
        }
        if(window.scrollY>=slide.offsetTop+500){
            document.getElementsByClassName('row')[1].classList.add('show');
    
        }
        if(window.scrollY>=slide.offsetTop+700){
            document.getElementsByClassName('row')[2].classList.add('show');
    
        }
        if(window.scrollY>=slide.offsetTop+900){
            document.getElementsByClassName('row')[3].classList.add('show');
    
        }
        if(window.scrollY>=slide.offsetTop+1100){
            document.getElementsByClassName('row')[4].classList.add('show');
    
        }
}