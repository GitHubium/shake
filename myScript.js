var count = 0;

//listen to shake event
var shakeEvent = new Shake({threshold: 5, timeout:200});
shakeEvent.start();
window.addEventListener('shake', function(){
    count ++;
    document.getElementById("counter").innerHTML = count+" Shakes";
}, false);

//stop listening
function stopShake(){
    shakeEvent.stop();
}

//check if shake is supported or not.
if(!("ondevicemotion" in window)){
  alert("Not Supported");
}
