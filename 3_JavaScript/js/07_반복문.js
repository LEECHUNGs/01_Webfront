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
    
    console.log(ul);

    ul.innerText = "";

    for(let i = 1; i <= 9; i++) 
        ul.innerHTML += `<li>${val} X ${i} = ${val * i}</li>`;

}