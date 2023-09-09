
let section2=document.getElementsByClassName("FORM")[0];

window.onscroll=function(){
// fixed navbar at  point
if(window.pageYOffset >= section2.offsetTop) {
       
    document.getElementsByTagName("nav")[0].classList.add("sticky");
} 
else {
    document.getElementsByTagName("nav")[0].classList.remove("sticky");
}
}

document.getElementById("reservation-btn").onclick=Validation;

function Validation(){

    let element=document.createElement('h2');
    element.innerHTML='Reservation is Done';
    element.classList.add('done');
    if(validname()&&validEmail()&&validPhone()&&validDate()&&validTime()&&validPerson())
        document.getElementsByTagName('table')[0].replaceWith(element);
}

function validname(){
    
    var Username=document.getElementById("name");

    if(Username.value.length<3 || Username.value.length==0||Username.value.match('[0-9]+')){
        Username.classList.add('validate');
        alert('pleas enter valid name');
        return false;
        
    }else{
        
       Username.classList.remove("validate");
       return true;
    }

}

function validEmail(){

    var Email=document.getElementById("email");
    
    if(!Email.value.match(/^[^\s@]+@[^\s@]+\.com$/)||Email.value.length==0){
        Email.classList.add('validate');
        alert('your Email should be like (ex@example.com)');
        return false;
    } else{
        Email.classList.remove('validate');
        return true;
    }

}

function validPhone(){
    var phone=document.getElementById("phone");
    
    if(phone.value.length!=11){
        phone.classList.add('validate');
        alert('pleas valid phone number like(012********)');
        return false;
    }else{
        phone.classList.remove('validate');
        return true;

    }

}
function validDate(){
    let today = new Date();
    today.setHours(0,0,0,0);

    let date=document.getElementById('Date');

    if(new Date(date.value)<=today || date.value.length==0){
        date.classList.add('validate');
        alert("you should enter coming date");
        return false;
    }else{
        date.classList.remove('validate');
        return true;
    }
    
}
function validTime(){
   let Time=document.getElementById('Time');
   
    if(Time.value.substring(0,2)<9 || Time.value.length==0){
    date.classList.add('validate');
    alert("the resturant is closed at "+Time.value+"( our opening time from 9 AM to 11 BM)");
    return false;
    }else{
        phone.classList.remove('validate');
        return true;  
    }

}

function validPerson(){

    let person=document.getElementById("person");
    
    if(person.value.length==0){
       
        person.classList.add('validate');  
        alert('pleas enter person number');
        return false;
    
    } else{
        person.classList.remove('validate');  
        return true;
    }

}