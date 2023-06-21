///logic

function updateClock(){
var now = new Date()
var dname= now.getDay()
var mon=now.getMonth()
var dnum=now.getDate()
var yr=now.getFullYear()
var hour=now.getHours()
var min=now.getMinutes()
var sec=now.getSeconds()
var peri="AM"


// document.getElementById('hour').innerHTML=hour;
// document.getElementById('minute').innerHTML=min;
// document.getElementById('seconds').innerHTML=sec;


if(hour==0){
    hour=12
}
if(hour>12){
    hour=hour-12
    peri="PM"
}

Number.prototype.pad=function(digits){
    for(var n=this.toString();n.length<digits;n=0+n);
    return n
}



var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday"]
var ids=["dayname","month","daynum","year","hour","minute","seconds","period"]
var values=[weeks[dname],months[mon],dnum.pad(2),yr,hour.pad(2),min,sec,peri]
for(var i=0;i<ids.length;i++){

document.getElementById(ids[i]).firstChild.nodeValue=values[i]

}
}
//setInterval(updateClock(),10)

function initClock(){
    updateClock()
    window.setInterval("updateClock()",1)
}