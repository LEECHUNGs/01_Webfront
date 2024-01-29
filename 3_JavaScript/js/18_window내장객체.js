// window.setTimeout()
document.getElementById("btn1").addEventListener("click", () => {

    setTimeout(() => {
        alert("3초 후 출력!");
    }, 3000);

});

// window.setInerver
let interval;// setInterval을 저장하기 위한 전역변수

// 현재시간을 문자열로 반환하는 함수
function currentTime() {
    
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    // console.log(hour, min, sec);

    return hour + " : " + min + " : " + sec
}

function clockFn(){
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();
    
    interval = setInterval(function() {
        clock.innerText = currentTime();
    }, 1000);

}

clockFn();

document.getElementById("stop").addEventListener("click", () => {

    clearInterval(interval);
});