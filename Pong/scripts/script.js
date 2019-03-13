var x=0;
var y=1;
var sel1=document.getElementsByClassName("teams")[0];
var sel2=document.getElementsByClassName("vsorder")[0];
var but1=document.getElementsByClassName("submitbut")[0];
var but2=document.getElementsByClassName("changebut")[0];
document.getElementById("num").innerHTML = x;
document.getElementById("numtable").innerHTML = y;
function numUp(){
    x = x + 1;
    document.getElementById("num").innerHTML = x;
}

function numDown(){
    if(x > 0){
        x = x - 1;
        document.getElementById("num").innerHTML = x;   
    }
}

function tableUp(){
    if(y < 5){
    y = y + 1;
    document.getElementById("numtable").innerHTML = y;
    }  
}

function tableDown(){
    if(y > 1){
        y = y - 1;
        document.getElementById("numtable").innerHTML = y;   
    }
}


function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "csapatok.inp", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        console.log(allText);
      }
    }
    rawFile.send();
  }

function submit(){
    var team1=document.getElementById("select1").value;
    var team2=document.getElementById("select2").value;
    if(team1 !="" & team2 !=""){
        if(team1 !="Team1" & team2 !="Team2"){
            document.getElementById("team1").innerHTML = team1;
            document.getElementById("team2").innerHTML = team2;
            sel1.classList.add("hidden");
            but1.classList.add("hidden");
            sel2.classList.remove("hidden");
            but2.classList.remove("hidden");
        }
    }
}

function change(){
        sel1.classList.remove("hidden");
        but1.classList.remove("hidden");
        sel2.classList.add("hidden");   
        but2.classList.add("hidden");
}