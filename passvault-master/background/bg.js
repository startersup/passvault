var tim;
var start,diff,minutes=80,seconds=00,status="idle",duration,resume;
browser.runtime.onMessage.addListener(handleMessage);
function handleMessage(request) {
  if(request.msg==="start")
  {
    duration=(minutes*60)+seconds
    status="start";
    begin();
  }
  if(request.msg==="prod")
  {
    status="prod";
    clearInterval(tim);
  }
  if(request.msg==="reset")
  {
    status="reset";
    clearInterval(tim);
    minutes=80;
    seconds=00;
  }
  if(request.msg==="load")
  {
    notify();
  }
}
function notify()
{
  browser.runtime.sendMessage({msg:status,min:minutes,sec:seconds});
}
function begin()
{
   start=Date.now()
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    tim=setInterval(timer, 1000);
}
