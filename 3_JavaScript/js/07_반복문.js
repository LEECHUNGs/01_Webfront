/* 
for(let num = 0; num <= 5; num++) {
    // 조건식이 TRUE 인 경우 반복 수행할 코드;
    console.log("통과");
}
*/
function check1() {

    let result = ""; // 빈 문자열

    for(let i = 1; i<=5; i++){
        // console.log(i);

        result += i;
        
        //  result = result + num;
        //      "1"    =     ""    + "1";   (1턴)
        //     "12"    =    "1"    + "2";   (2턴)
        //    "123"    =   "12"    + "3";   (3턴)
        //   "1234"    =  "123"    + "4";   (4턴)
        //  "12345"    = "1234"    + "5";   (5턴)
    }
    
    console.log(result);
}


function check2() {
    // 1부터 10까지 1씩 증가하여 출력

    for(let i = 1; i <= 10; i++)
        console.log(i);
}


function check3() {
    // 1부터 20까지 1씩 증가하여 출력

    for(let i = 1; i <= 20; i++)
        console.log(i);
}


function check4() {
    // 5부터 15까지 1씩 증가하여 출력

    for(let i = 5; i <= 15; i++)
        console.log(i);
}


function check5() {
    // 1부터 30까지 2씩 증가하여 출력

    for(let i = 1; i <= 30; i += 2)
        console.log(i);
}


function check6() {
    // 1부터 10까지 모든 정수의 합
    let sum = 0;

    for(let i = 1; i <= 10; i++)
        sum += i;

    console.log(`sum : ${sum}`);
}


const input1 = document.getElementById("inputNumber1-1");
const input2 = document.getElementById("inputNumber1-2");
const result1 = document.getElementById("result1");

function sumFn() {
    const num1 = input1.value;
    const num2 = input2.value;
    let sum = 0;

    for(let i = num1; i <= num2; i++)
        sum += i;

    result1.innerText = sum;
}


function executeFn2() {
    const start = Number((document.getElementById("inputNumber2-1")).value);
    const end = Number((document.getElementById("inputNumber2-2")).value);
    const val = Number((document.getElementById("inputNumber2-3")).value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul 태그

    // 이전 ul에 작성된 내용을 삭제
    ul.innerHTML = "";
    // start 부터 end 까지 val 씩 증가
    for(let i = start; i <= end; i += val){
        ul.innerHTML += `<li>${i}</li>`;
    }
    
}

// 요소.innerText = `<li>${i}</li>`;
// -> 요소의 내용으로 문자열을 대입
//  (HTML 태그를 해석하지 않고 문자열을 그대로 보여줌) 

// 요소.innerHTML = `<li>${i}</li>`;
// -> 요소의 내용으로 해석해서 화면에 태그의 본 기능대로 출력


function executeFn3() {
    const val = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");

    ul.innerText = "";

    // 입력 받은 단이 2~9단이 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기

    if((val < 2) || val > 9){
        alert("2~9 사이만 입력해주세요");
        // 함수를 죵료하고 호출한 곳으로 돌아감
        return; 
    }

    for(let i = 1; i <= 9; i++) 
        ul.innerHTML += `<li>${val} X ${i} = ${val * i}</li>`;

}

/* 다음 모양 출력하기
12345
12345
12345
12345
*/

function check8() {
    // 4바퀴 반복하는 for문
    for(let y = 1; y <= 4; y++){
        
        //"12345" 를 출력하는 구문 
        let str = "";
        for(let x = 1; x<=5; x++)
            str += x;
        console.log(str);
    }
}

/* 다음 모양 출력하기
1
12
123
1234
12345
*/

function check9() {

    for(let i = 1; i <= 5; i++){
        
        let text = "";
        
        for(let j = 1; j <= i; j++)
            text += j;
        
        console.log(text);
    }
}

function check16() {

    // 변수를 선언만 해두기
    let val; // undefined

    // 취소를 누르기 전까지 계속 반복
    // == 취소를 누르면 반복하지 않음
    while(val !== null){

        // 동일 비교 연산자
        // !== 값과 자료형이 모두 다른 경우 true
        // === 값과 자료형이 모두 같은 경우 true

        val = prompt("입력 후 확인"); // 변수에 prompt 값 대입
        // 취소 -> null

        console.log(val);
    }
}


function check17() {

    // 메뉴 가격 
    const gimbap = 3000;
    const ramen = 3500;
    const donkaseu = 5000;

    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스
    
    // prompt로 입력한 값을 저장할 변수 선언
    let input; // undefined

    while(input !== null) { // 취소를 누르기 전까지 반복

        input = prompt("메뉴 번호를 입력해 주세요");
        switch(input) {
            case "1": gCount++; break;
            case "2": rCount++; break;
            case "3": dCount++; break;
            case null: alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 메뉴만 입력해 주세요!"); break;
        }
    }

    console.log(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkaseu);
    console.log(`총 가격 : ${sum} 원`);
}


// while문을 for 문처럼 사용하기
function check18() {

    // 1부터 10까지 출력
    let num = 1;
    while(num < 11)
        console.log(num++);

    // 10부터 1까지 1씩 감소
    num = 10;
    while(num > 0)
        console.log(num--);
}