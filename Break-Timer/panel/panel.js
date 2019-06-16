function startTimer(duration, display) {
  var diff,minutes,seconds;
  var start=Date.now();
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);

}
if(document.readyState==="loading"){
    browser.runtime.sendMessage({msg:"load"});
}
browser.runtime.onMessage.addListener(handleMessage);
function handleMessage(request) {
  if(request.msg==="start"){
    var min=request.min;
    var sec=request.sec;
    var duration=(min*60)+sec;
    var progress=100-Math.ceil(duration/48);
    document.getElementById("myBar").style.width=progress+"%";
    document.getElementById("myBar").innerHTML=progress+"%";
    var display = document.querySelector('#time');
    startTimer(duration,display);
  }
  if(request.msg==="prod"){
    var min=request.min;
    var sec=request.sec;
    var duration=(min*60)+sec;
    var mins=Math.floor(duration/60);
    var secs= duration%60;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    var display = document.querySelector('#time');
    var progress=100-Math.ceil(duration/48);
    document.getElementById("myBar").style.width=progress+"%";
    document.getElementById("myBar").innerHTML=progress+"%";
    display.textContent = mins + ":" + secs;
  }
}
