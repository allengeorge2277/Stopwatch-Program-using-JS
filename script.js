let running = false;
let hours = 0,minutes = 0,seconds = 0,milliseconds = 0;
let timer;

function updateDisplay() {
    document.getElementById("display").textContent = 
    `${String(hours).padStart(2,0)}:${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}:${String(Math.floor(milliseconds/10)).padStart(2,0)}`;
}

function start(){
    if(!running){
        running = true;
        timer = setInterval(()=>{
            milliseconds += 10;
            if(milliseconds === 1000){
                milliseconds = 0;
                seconds++;
            }
            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
            if(minutes === 60){
                minutes = 0;
                hours++
            }
            updateDisplay()
        },10);
    }
}

function stop(){
    running = false;
    clearInterval(timer);
}

function reset(){
    running = false
    clearInterval(timer)
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;
    document.getElementById("display").textContent = "00:00:00:00";
}