

let  startingSeconds, stoppingSeconds;
function startTime() {
    var start = new Date();
    startingSeconds = start.getTime();


    
}

function stopTime() {
    var stop = new Date();
    stoppingSeconds =  stop.getTime();
 

    alert('Time'+(stoppingSeconds - startingSeconds)/600);
}