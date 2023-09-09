window.setInterval(() => {
    var date=new Date();

    // Time
    let time=date.getHours()+" : "+date.getMinutes()+":"+date.getSeconds();
    document.getElementById("clock").innerHTML=time;
    
    // date
    let DATE=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    document.getElementById("date").innerHTML=DATE;

    // open or closed
    if(date.getHours()>=9){
     
        document.getElementById("img").setAttribute('src','../public/images/Home/open-sign.png')
    }
    else{
        document.getElementById("img").setAttribute('src','../public/images/Home/closed.png')
    }

  }, 1000);