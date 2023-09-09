let section2=document.getElementsByClassName("contact")[0];
window.onscroll=function(){
    // fixed navbar at  point
    if(window.pageYOffset >= section2.offsetTop) {
           
        document.getElementsByTagName("nav")[0].classList.add("sticky");
    } 
    else {
        document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }
}

document.getElementById("send-btn").onclick=Validation;

function Validation(){

    let element=document.createElement('h2');
    element.innerHTML='Message has been sent successfully';
    element.classList.add('done');
    
    if(validname()&&validEmail()&&validSubject()&&validMessage())
        document.getElementsByClassName('contact-form')[0].replaceWith(element);
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

function validSubject(){
    
    var subject=document.getElementById("subject");

    if(subject.value.length<3 || subject.value.length==0){
        subject.classList.add('validate');
        alert('pleas enter valid subject');
        return false;
        
    }else{
        
       subject.classList.remove("validate");
       return true;
    }

}

function validMessage(){
    var message=document.getElementById("Message");

    if(message.value.length<3 || message.value.length==0){
        message.classList.add('validate');
        alert('pleas enter valid Message');
        return false;
        
    }else{
        
       message.classList.remove("validate");
       return true;
    }
}