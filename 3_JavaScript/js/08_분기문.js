// break 확인
function check1() {
    
    // 1부터 10까지 1씩 증가하다 5가 되면 멈춤
    for(let i = 1; i <= 10; i++) {
        console.log("i : ", i);

        if(i == 5) break;
    }
}

// 무한 반복하는 while 문 멈추기
function check2() {

    let i = 1;
    // 10 초과시 멈춤
    while(true) {
        // true 일 때 반복 수행하는 코드
        console.log("i : ", i++);

        if(i > 10) break;
    }
}

// continue 확인
function check3() {
    
    // 1부터 20 까지 출력 단, 3의 배수는 건너뜀
    for(let i = 1; i <= 20; i++) {
        
        // 3의 배수인 경우
        if((i % 3) == 0) continue;

        // 3의 배수인 경우 아래 코드는 수행하지 않음
        console.log("i : ", i);
    }
}

/* 
1부터 30 까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기 
*/
function check4() {

    for(let i = 1; i <=30 ; i++){
        if((i % 10 == 0) || (i % 2 == 1)) continue;

        console.log("i : ", i);
    }
}

/*
0~9 까지 5줄 출력
    - 각 줄에서 4의 배수는 건너뛰기
    - 3번쨰 줄 출력 후 멈추기 
*/
function check5() {

    for(let i = 1; i < 5; i++){

        let text = "";

        if(i > 3) break;

        for(let j = 0; j <= 9; j++){

            // 0을 제외한 4의 배수인 경우
            if(j % 4 == 0 && j != 0) continue;
            
            text += j; 
        }

        console.log(text);
    }
}


function startGame() {

    let val;
    let str;
    let num
    for(let i = 0; i<100; i++){
        num = Math.floor((Math.random() * 101));
        if(num == 100)
            console.log(num);
    }
    val = prompt("값을 입력 하세요");

    while(val !== null) {

        if(num == val) {
            alert("정답입니다!! 게임 종료");
            break;
        }
        else if(num > val){
            str = "up";
        }
        else {
            str = "down";
        }

        val = prompt(`${str} 이전 입력값 : ${val}`);
    }
}