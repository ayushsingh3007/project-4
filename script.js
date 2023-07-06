//first fucntion for real watch//
let ayush = document.getElementsByClassName("spanelement");
let changeTime = document.getElementsByClassName("span_text");
function clockstart(){
    let AMPM = "";
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    

if(hrs>8&&hrs<12){
changeTime[0].innerHTML="grab some healthy breakfast"
}
 else if(hrs>=12&&hrs<16){
changeTime[0].innerHTML="let's have some lunch  !!!!"
}
else if (hrs>=16&&hrs<20){
changeTime[0].innerHTML="let's have dinner !!!"
}
else{changeTime[0].innerHTML="Close your eyes and goto sleep"}






    if (hrs >12){
        hrs -= 12
        AMPM = "PM"
    }
    else{
        AMPM = "AM"
    }
   
    ayush[0].innerHTML = `${hrs}`
    ayush[1].innerHTML = `${mins}`
    ayush[2].innerHTML = `${secs}`
    ayush[3].innerHTML = `${AMPM}`

}

setInterval(() => {
    clockstart();
}, 1000);

//function two for fuctionality///


let selectValue =document.querySelectorAll('select')
let caption=document.getElementsByClassName('item5text')
let pic=document.getElementsByClassName('imgwakeup')
let paragraph=document.getElementsByClassName('morning')
let paragraph2=document.getElementsByClassName('noon')
let paragraph3=document.getElementsByClassName('evening')
let paragraph4=document.getElementsByClassName('night')

function callFunction(){
 let time1=new Date();
 let hrs=time1.getHours();
 


 let wakeup=selectValue[0].selectedIndex;
 let mrng=selectValue[0].options[wakeup];
 let text=mrng.innerHTML;
 paragraph[0].innerHTML=`Wake Up-${text}`;




 let afternoon=selectValue[1].selectedIndex;
 let noontime=selectValue[1].options[afternoon];
 let text1=noontime.innerHTML;
 paragraph2[0].innerHTML=`Lunch Time-${text1}`;




 let nap=selectValue[2].selectedIndex;
 let naptime=selectValue[2].options[nap];
 let text2=naptime.innerHTML;
 paragraph3[0].innerHTML=`Nap Time-${text2}`;


let goodnight=selectValue[3].selectedIndex;
 let nightime=selectValue[3].options[goodnight];
 let text3=nightime.innerHTML;
 paragraph4[0].innerHTML=`Night Time-${text3}`;











 if(parseInt(selectValue[0].value)===hrs){
    caption[0].innerHTML="Good Morning!!Wake up!!"
    pic[0].src="./wakeup.svg"
}
else if(parseInt(selectValue[1].value)===hrs){
    caption[0].innerHTML="Good Afternoon!!"
    pic[0].src="./goodafternoon.svg"
}
else if(parseInt(selectValue[2].value)===hrs){
    caption[0].innerHTML="Good Evening!!"
    pic[0].src="./nap_time.png"
}
else if(parseInt(selectValue[3].value)===hrs){
    caption[0].innerHTML="Good Night!! bye!"
    pic[0].src="./sleep.svg"
}


}
