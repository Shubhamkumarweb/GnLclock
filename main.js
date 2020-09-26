$(document).ready(function() {DisplayDate();    });
function DisplayDate()
{
    var date=new Date();
    var h=date.getHours();// 0-23
    var m=date.getMinutes(); //0-59
    var s=date.getSeconds();
     //0-59
    var amPm=(h<12) ? "AM":"PM";
    h=(h>12) ? h-12:h;
    h=("0"+h).slice(-2);
    m=("0"+m).slice(-2);
    s=("0"+s).slice(-2);
    var time=h+":"+ m+":"+ s;
    document.getElementById("Local").innerHTML=h+":"+ m+":"+ s+" "+amPm;
    
    var hg=date.getUTCHours();// 0-23
    var mg=date.getUTCMinutes(); //0-59
    var sg=date.getUTCSeconds(); //0-59
    var amPmg=(hg<12) ? "AM":"PM";
    hg=(hg>12) ? hg-12:hg;
    h=("0"+hg).slice(-2);
    mg=("0"+mg).slice(-2);
    sg=("0"+sg).slice(-2);
    document.getElementById("global").innerHTML=hg+":"+mg+":"+sg+" "+amPmg+" ";
    
     setTimeout(DisplayDate,200);
    }