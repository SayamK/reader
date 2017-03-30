var tog = 0;
// var cfsize = document.getElementById('displayText').style.fontSize;

function changeSetting() {
    if (tog == 0) {
      document.body.style.backgroundColor = "#222";
      document.getElementById('displayText').style.color = "#fff";
      document.getElementById('startButton').style.borderColor = "#fff";
      document.getElementById('stopButton').style.borderColor = "#fff";
      document.getElementById('textarea').style.borderColor = "#fff";
      document.getElementById('box2').style.borderColor = "#fff";
      document.getElementById('com').style.color = "#fff";
      document.getElementById('com2').style.color = "#fff";
      document.getElementById('com3').style.color = "#fff";
      document.getElementById('box2').style.color = "#fff";
      document.getElementById('startButton').style.color = "#fff";
      document.getElementById('stopButton').style.color = "#fff";

      document.getElementById('startButton').innerHTML='Pause Reading';


        // $("body").css({"background":"#000"});
        // $(".displayText").css({"color":"#fff"});
        // $(".startButton").css({"border-color":"#fff", "color":"#fff"});
        // $("textarea").css({"border-color":"#fff", "color":"#fff"});
        // $(".box2").css({"border-color":"#fff", "color":"#fff"});
        // $(".com").css({"color":"#fff"});
        tog=1;
    }else{

      document.body.style.backgroundColor = "#fff";
      document.getElementById('displayText').style.color = "#000";
      document.getElementById('startButton').style.borderColor = "#000";
      document.getElementById('textarea').style.borderColor = "#000";
      document.getElementById('box2').style.borderColor = "#000";
      document.getElementById('com').style.color = "#000";
      document.getElementById('com2').style.color = "#000";
      document.getElementById('com3').style.color = "#000";
      document.getElementById('box2').style.color = "#000";
      document.getElementById('startButton').style.color = "#000";
      document.getElementById('stopButton').style.borderColor = "#000";

      document.getElementById('stopButton').style.color = "#000";

        // $("body").css({"background":"#fff"});
        // $(".displayText").css({"color":"#000"});
        // $(".startButton").css({"border-color":"#000", "color":"#000"});
        // $("textarea").css({"border-color":"#000", "color":"#000"});
        // $(".com").css({"color":"#000"});
        // $(".box2").css({"border-color":"#000", "color":"#000"});
        tog=0;
    }
}

function settingClick() {
    if (tog == 0) {
      document.body.style.backgroundColor = "#222";
      document.getElementById('displayText').style.color = "#fff";
      document.getElementById('startButton').style.borderColor = "#fff";
      document.getElementById('textarea').style.borderColor = "#fff";
      document.getElementById('textarea').style.color = "#fff";
      document.getElementById('box2').style.borderColor = "#fff";
      document.getElementById('com').style.color = "#fff";
      document.getElementById('com2').style.color = "#fff";
      document.getElementById('com3').style.color = "#fff";
      document.getElementById('box2').style.color = "#fff";
      document.getElementById('startButton').style.color = "#fff";
      document.getElementById('stopButton').style.borderColor = "#fff";

      document.getElementById('stopButton').style.color = "#fff";


        // $("body").css({"background":"#000"});
        // $(".displayText").css({"color":"#fff"});
        // $(".startButton").css({"border-color":"#fff", "color":"#fff"});
        // $("textarea").css({"border-color":"#fff", "color":"#fff"});
        // $(".box2").css({"border-color":"#fff", "color":"#fff"});
        // $(".com").css({"color":"#fff"});
        tog=1;
    }else{

      document.body.style.backgroundColor = "#fff";
      document.getElementById('displayText').style.color = "#000";
      document.getElementById('startButton').style.borderColor = "#000";
      document.getElementById('textarea').style.borderColor = "#000";
      document.getElementById('box2').style.borderColor = "#000";
      document.getElementById('com').style.color = "#000";
      document.getElementById('textarea').style.color = "#000";
      document.getElementById('com2').style.color = "#000";
      document.getElementById('com3').style.color = "#000";
      document.getElementById('box2').style.color = "#000";
      document.getElementById('startButton').style.color = "#000";
      document.getElementById('stopButton').style.borderColor = "#000";

      document.getElementById('stopButton').style.color = "#000";

        // $("body").css({"background":"#fff"});
        // $(".displayText").css({"color":"#000"});
        // $(".startButton").css({"border-color":"#000", "color":"#000"});
        // $("textarea").css({"border-color":"#000", "color":"#000"});
        // $(".com").css({"color":"#000"});
        // $(".box2").css({"border-color":"#000", "color":"#000"});
        tog=0;
    }
}

// $(".plus").click(function () {
//     $(".displayText").css({"font-size":"+=1px"})
// })

function incSize() {
        var id = document.getElementById('displayText');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('displayText').style.fontSize = currentSize.toString();
    }

    function decSize() {
            var id = document.getElementById('displayText');
            var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
            var currentSize = parseInt(style);
            currentSize--;
            document.getElementById('displayText').style.fontSize = currentSize.toString();
        }

// $(".minus").click(function () {
//     $(".displayText").css({"font-size":"-=1px"})
// })

function resetSetting() {
  document.body.style.backgroundColor = "#fff";
  document.getElementById('displayText').style.color = "#000";
  document.getElementById('startButton').style.borderColor = "#000";
  document.getElementById('textarea').style.borderColor = "#000";
  document.getElementById('box2').style.borderColor = "#000";
  document.getElementById('com').style.color = "#000";
  document.getElementById('com2').style.color = "#000";
  document.getElementById('com3').style.color = "#000";
  document.getElementById('box2').style.color = "#000";
  document.getElementById('startButton').style.color = "#000";

  document.getElementById('startButton').innerHTML='Start Reading';
  document.getElementById('stopButton').style.borderColor = "#000";

  document.getElementById('stopButton').style.color = "#000";


        // $("body").css({"background":"#000"});
        // $(".displayText").css({"color":"#fff"});
        // $(".startButton").css({"border-color":"#fff", "color":"#fff"});
        // $("textarea").css({"border-color":"#fff", "color":"#fff"});
        // $(".box2").css({"border-color":"#fff", "color":"#fff"});
        // $(".com").css({"color":"#fff"});
        tog=0;
    }
