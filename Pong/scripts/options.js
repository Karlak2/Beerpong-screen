readTextFile();

function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "csapatok.inp", true);
    rawFile.overrideMimeType('text/xml; charset=iso-8859-2');
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        lines = rawFile.responseText.split("\n");
        var nteam=lines[0];
        for(var i=1;i<=nteam;i++){
          var s=document.getElementById("select1");
          var option=document.createElement("option");
          option.text=lines[i];
          s.add(option);
        }
        for(var i=1;i<=nteam;i++){
          var s=document.getElementById("select2");
          var option=document.createElement("option");
          option.text=lines[i];
          s.add(option);
        }
      }
    }
    rawFile.send();
  }