
let section2=document.getElementsByClassName("Menu")[0];
let super_container=document.getElementsByClassName("super-container")[0];
let slide=document.getElementsByClassName("slide-shadow")[0];


window.onscroll=function(){


// fixed navbar at  point
    if(window.pageYOffset >= section2.offsetTop) {
       
        document.getElementsByTagName("nav")[0].classList.add("sticky");
    } 
    else {
        document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }

    // animate menu row by row 
    if(window.scrollY>=slide.offsetTop+180){
        document.getElementsByClassName('menu')[0].classList.add('show');

    }

    if(window.scrollY>=slide.offsetTop+300){
        document.getElementsByClassName('catigory')[0].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+370){
        document.getElementsByClassName('sub-conatiner')[0].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+500){
        document.getElementsByClassName('sub-conatiner')[1].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+640){
        document.getElementsByClassName('sub-conatiner')[2].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+800){
        document.getElementsByClassName('sub-conatiner')[3].classList.add('show');

    }
    if(window.scrollY>=slide.offsetTop+930){
        document.getElementsByClassName('sub-conatiner')[4].classList.add('show');

    }

}

let sub_catigory=document.getElementsByClassName("sub-catigory");
let food_img=document.getElementsByClassName("food-img");
let food_txt=document.getElementsByClassName("up");

sub_catigory[0].classList.add("clicked");

// assign the function
sub_catigory[0].onclick= Main;
sub_catigory[1].onclick= Dessert;
sub_catigory[2].onclick= Drinks;

// set and animate main caigory at menu
function Main(){

    // change the clicked catigory style
    sub_catigory[0].classList.add("clicked");
    sub_catigory[1].classList.remove("clicked");
    sub_catigory[2].classList.remove("clicked");

    // assign photos of catigory
    for(let i=0;i<9;i++)
    food_img[i].setAttribute('src','../public/images/Menu/dish-'+(i+3)+'.jpg');


    food_img[9].setAttribute('src','../public/images/Menu/dish-3.jpg');
    move(); 

    //assign text

    food_txt[0].innerHTML='Grilled Beef with potatoes'
    food_txt[1].innerHTML='Savory Watercress Chinese Pancakes'
    food_txt[2].innerHTML='Fruit Vanilla Ice Cream'
    food_txt[3].innerHTML='Soup With Vegetables And Meat'
    food_txt[4].innerHTML='Asian Hoisin Pork'
    food_txt[5].innerHTML='Udon Noodles With Vegetables'
    food_txt[5].innerHTML='Spicy Fried Rice & Bacon'
    food_txt[5].innerHTML='Baked Lobster With A Garnish'
    food_txt[5].innerHTML='Mango Chili Chutney'
    food_txt[5].innerHTML='Octopus with Vegetables'


}

// set and animate dessert caigory at menu
function Dessert(){

    sub_catigory[1].classList.add("clicked");
    sub_catigory[0].classList.remove("clicked");
    sub_catigory[2].classList.remove("clicked");

    for(let i=0;i<10;i++)
    food_img[i].setAttribute('src','../public/images/Menu/dessert-'+(i+1)+'.jpg');
    

    move();

    //assign text

    food_txt[0].innerHTML='Angel Food Cake'
    food_txt[1].innerHTML='Tiramisu'
    food_txt[2].innerHTML='Acorn Squash Pie'
    food_txt[3].innerHTML='Chocolate Cream'
    food_txt[4].innerHTML='Apricot Crumble'
    food_txt[5].innerHTML='Pizza Pie'
    food_txt[6].innerHTML='Sponge Cake'
    food_txt[7].innerHTML='Sicilian Ricotta'
    food_txt[8].innerHTML='Sherbet'
    food_txt[9].innerHTML='Mango FLoat'
   



}

// set and animate main drinks at menu
function Drinks(){


    sub_catigory[2].classList.add("clicked");
    sub_catigory[0].classList.remove("clicked");
    sub_catigory[1].classList.remove("clicked");

    for(let i=0;i<10;i++)
    food_img[i].setAttribute('src','../public/images/Menu/drink-'+(i+1)+'.jpg')
   
    move();
  
    //assign text

    food_txt[0].innerHTML='Lemon Juice'
    food_txt[1].innerHTML='Beer'
    food_txt[2].innerHTML='Guava Juice'
    food_txt[3].innerHTML='Mango Juice'
    food_txt[4].innerHTML='Sprite'
    food_txt[5].innerHTML='Apple Juice'
    food_txt[6].innerHTML='Cola'
    food_txt[7].innerHTML='Strawberry Juice'
    food_txt[8].innerHTML='Wine'
    food_txt[9].innerHTML='Orange Juice'
   
 
}

// animate menu
function move(){
   super_container.classList.add("Move");
    
    let interval=window.setInterval(() => {

        clearInterval(interval);
        super_container.classList.remove("Move");
     }, 1000);
}
