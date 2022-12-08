let hr =document.querySelector('#pp');
let min =document.querySelector('#kk');
let sec =document.querySelector('#dd');

setInterval(()=>{
    let day = new Date();
    let pp =day.getHours()*30
    let kk =day.getMinutes()*6
    let dd =day.getSeconds()*6
    
    hr.style.transform =`rotateZ(${dd+(kk/12)}deg)`;
    min.style.transform =`rotateZ(${kk}deg)`;
    sec.style.transform =`rotateZ(${pp}deg)`;


    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');

    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
     let am = h>= 12 ? "PM" : "AM"



     //convert 12hr clock
     if(h>12)
     {
        h = h- 12;

     }
     //add zero before single digit number

     h =(h<10 )?"0"+h:h
     m =(m<10 )?"0"+m:m
     s =(s<10 )?"0"+s:s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML =s;
   ampm.innerHTML = am;

})

