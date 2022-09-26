let hours=document.getElementById('hours')
let min=document.getElementById('min')
let sec=document.getElementById('sec')
let am=document.getElementById('am')

function updateclock(){
    let h = new Date().getHours();
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let am1="AM"

    if(h > 12){
        h = h - 12;
        am1 ="Pm"
    }

    if( h < 10){
        h =  "0" + h 
    }
    if( s < 10){
        s =  "0" + s 
    }
    if( m < 10){
        m =  "0" + m 
    }

    hours.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    am,(innerText = am1)
    setTimeout(()=>{
        updateclock();
    },1000)
}
updateclock();

// function Backgroundchange(){
//     let bgc=document.getElementById('main')
//     let colors=["blue","red","gray]"]
//     bgc.style.backgroundColor=colors[i]
//     // bgc.style.backgroundColor=bgc[i]
//     i=(i+1)
// }