
var logElem=document.getElementById("log");
function log(str) {
    logElem.innerHTML+=str;
}



//var rangeplayer  =document.createElement("AUDIO");
var rangeplayer  =document.getElementById("audio2")

var playerStart;
var playerEnd;

var lastplayerSrc="";

function playRange2(src,start,end) {

    if(lastplayerSrc!=src) {
        rangeplayer.src = src;
        rangeplayer.load();
        lastplayerSrc=src;

    }
     if(start<0)
         return;

    playerStart=start;
    playerEnd=end;
    rangeplayer.currentTime=start;
    rangeplayer.play();


}


function onplayRange() {
    //alert('Hello');
    if(rangeplayer.paused ||  rangeplayer.ended )
        return;

    var t=rangeplayer.currentTime;
  //  log("t="+t+"\n");
    if(playerEnd<=0)
        return;

    if(t>playerEnd)
    {
       // log("t="+t+"\n");
        rangeplayer.pause();
        playRangeEnd();
        return;
    }
    setTimeout(onplayRange, 100);
}


rangeplayer.onplaying=onplayRange;
//var  k=preloadAudio("book1/CD-041.mp3#t=48.436351232,52.271934961");
//
//playRange2("book1/CD-043.mp3",23.478154401,26.6989807);
