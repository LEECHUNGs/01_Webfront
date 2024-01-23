// 변수 선언

// document : HTML 문서 내에서 

const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");

// 두 수를 더해서 화면에 출력하는 함수

function input1Fn() {
    const value1 = number1.value;
    return value1;
}
function input2Fn() {
    const value2= number2.value;
    return value2;
}

function plusFn() {
    // input요소.value : input 요소에 저장된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;

    console.log(value1, value2);
    console.log("두 수의 합 : ", value1 + value2);
    
    // ->input 요소에 작성된 값은 무조건 string 이라서
    // 더했을 떄 이어쓰기가 되는 문제가 발생
    
    // [해결 방법]
    // 문자열을 숫자로 변경하는 코드를 수행
    
    // 숫자만 작성된 문자열("123") 을
    // 진짜 숫자(123)으로 바꾸는 법
    // -> Number("123")
    
    
    console.log("두 수의 합 : ", Number(value1) + Number(value2));

    /**
     * 두 수의 합을
     * 아이디가 "calResult"인 요소(result 변수)의
     * 내부 글자(innerRext, HTML 요소 내용)로 대입
     */

    result.innerText = Number(value1) + Number(value2);
}// plusFn 끝

function minusFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    result.innerText = value1 - value2;
}

function multiFn() {
    result.innerText = input1Fn() * input2Fn();
}

function divFn() {
    result.innerText = input1Fn() / input2Fn();
}

function modFn() {
    result.innerText = input1Fn() % input2Fn();
}


//----------------------------------------------------

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function totalFn() {
    total.innerText = Number(num1.value) + Number(num2.value)+ Number(num3.value);
}


// ---------------------------------------------------

// 증가/감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언
let count = 0;
// (주의) const로 선언하면 값을 증가/감소 시킬 수 없다
let result2 = document.getElementById("result2");

// 1 증가 함수
function increase() {
    count++; // 또는 ++count -> count 값이 1 증가

    // 증가한 count 값을 result2의 span태그 값으로 변경
    result2.innerText = count;
}
function decrease() {
    result2.innerText = --count;
}

// 전위, 후위 연선 확인하기
function check() {
    // 함수 밖, 함수 안은 구분되는 공간으로 생각하면 됨

    // 밖에 작성한 변수 count, 안에 작성한 count는
    // 서로 다른 변수(동명이인)
    let count= 100;

    // 컴퓨터한테 연산은 +, - ,* / 뿐만 아니라
    // 코드를 하나하나 실행하는 것들이 연산임

    // 전위 연산(++count, --count) 확인
    // -> 다른 연산보다 먼저 수행
    // -> count 값이 먼저 증가, 감소된 후 console에 출력

    console.log("++count : ", ++count);
    console.log("++count : ", ++count);
    console.log("++count : ", ++count);
    console.log("--count : ", --count);
    console.log("--count : ", --count);
    console.log("--count : ", --count);


    // 후위 연산 (count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행

    count = 50;

    console.log("count++ : ", count++);
    console.log("후위 연산 후 count", count); // 51

    console.log("count-- : ", count--);
    console.log("후위 연산 후 count", count); // 51



    console.log("----------------------------")

    let a = 10;
    let b = 5;
    let c = ++a * b--;
    
    /* 최종적으로 a, b, c 에 저장된 값은 얼마?
        a == 11;
        b == 4;
        c == 55;
    */

    console.log(a);
    console.log(b);
    console.log(c);
}




function printJSObject() {
    const name = document.getElementById("userName"); 
    const age = document.getElementById("userAge");
    const gender = document.getElementById("userGender");

    const user = { 
        name : name.value, 
        age : age.value,
        gender : gender.value
    }

    console.log(user)
}