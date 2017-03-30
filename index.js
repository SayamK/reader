
var i = 0;
var words;
var display;
function myLoop () {
   setTimeout(function () {
       if(i==words.length) return;
       display.innerHTML=words[i];
       i++;
       myLoop();
   }, 200)
}

var started = 0;

// myLoop();


function start()    {

  if (started == 0) {
    changeSetting();
    console.log("started");

    started = 1;
     console.log("START CLICKED!");
     var textArea = document.getElementsByClassName("textArea")[0];
     var text=textArea.value;
     display=document.getElementsByClassName("displayText")[0];
     var box1=document.getElementsByClassName("box1")[0];
     var box2=document.getElementsByClassName("box2")[0];
     box1.style.display="none";
     box2.style.display="block";
     box2.innerHTML=text;

     words=text.split(" ");
     i=0;
     myLoop();
     // for(int i=0;i<n;i++) {

     // }
  }
  else {
    started = 0;
    console.log("reset");
    resetSetting();
  }

}

function stop() {
console.log("stopped!");
}
