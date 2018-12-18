var count = 0;

//listen to shake event
var shakeEvent = new Shake({threshold: 5, timeout:200});
shakeEvent.start();
window.addEventListener('shake', function(){
    count ++;
}, false);

//check if shake is supported or not.
if(!("ondevicemotion" in window)){
  alert("Not Supported");
}
