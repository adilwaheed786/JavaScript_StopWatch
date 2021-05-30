var min=0;
var sec=0;
var msec=0;
var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var interval;
function timer()
{
    msec++;
    msecHead.innerHTML=msec;
    if(msec >= 100)
    {
        sec++;
        secHead.innerHTML=sec;
        msec=0;
    }
    else if(sec >=60){
        min++;
        sec=0;
        minHead.innerHTML=min;
    }
}
function start(){
    interval=setInterval(timer,10);
    disableBtn();
}
function Pause(){
    clearInterval(interval);
    enableBtn()
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
    msecHead.innerHTML=msec;
    Pause();
    enableBtn();
}
function disableBtn() {
    document.getElementById("a").disabled = true;
}
function enableBtn() {
    document.getElementById("a").disabled = false;
}
