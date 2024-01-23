// if - 양수인지 검사
const input1 = document.getElementById("input1");

function check1() {
    const value = Number(input1.value);

    if(value > 0) {alert("양수입니다.");}

    // value 가 0과 같거나 작아서 true 인 경우
    // -> value가 양수가 아닌 경우
    if(value <= 0) alert("양수가 아닙니다.");
}

function check2() {
    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= Math.random() < 1

    const randomNumber = Math.floor(Math.random() * 101);

    if(randomNumber % 2 == 0) 
        alert(`${randomNumber} 는 홀수입니다.`);
     else 
        alert(`${randomNumber} 는 짝수입니다.`);
}

// -3 ~ 3 사이의 난수를 발생시켜 양수, 음수, 0 판별
function check3() {
    const randomNumber2 = Math.floor((Math.random() * 7) - 3);

    let message = randomNumber2 + "은/는 ";

    if(randomNumber2 == 0)
        // message = message + "0 입니다.";
        message += "0 입니다."; // 복합 대입 연산자 활용
    else if(randomNumber2 > 0) // 양수인 경우
        message += "양수 입니다.";
    else // 음수인 경우
        message += "음수 입니다.";
    
    alert(message);
}

// 어린이, 청소년, 성인 구분하기
const inputAge = document.getElementById("inputAge");

function check4() {
    // 입력한 나이 값 얻어오기
    const age = Number(inputAge.value);
    let message = "값을 입력해주세요";

    console.log("age", age);

    console.log(inputAge.value.length);

    // 입력된 나이의 길이가 0인 경우 == 입력 안한 경우
    if(inputAge.value.length == 0) 
        message = "값을 입력하세요";
    else { // 입력한 경우 -> 이 때 어린이, 청소년, 성인 검사
            if((age < 0) || (age > 150))
            message = "잘못 입력하셨습니다.";
        else if((age <= 13) || (age >= 0)) 
            message = "어린이";
        else if(age <= 19) 
            message = "청소년";
        else
            message = "성인";
    }

    alert(message);
}

// switch 문 이용한 계산기
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op) {
    // 매개 변수 (Parameter) op
    // - 함수 호출 시 전달되는 값을 저장하는 변수

    // ex) cal('+')
    //      '+' 값이 op 변수에 저장됨

    console.log(op);

    const v1 = Number(num1.value);
    const v2 = Number(num2.value);

    // switch(식) 에서
    // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

    let result;

    // break : swtich 문을 멈춤
    //      -> case에 break; 를 작성하지 않으면
    //         멈추지 않고 다음 case로 넘어간다.

    switch(op) {
        case '+' : result = v1 + v2; break;
        case '-' : result = v1 - v2; break;
        case '*' : result = v1 * v2; break;
        case '/' : result = v1 / v2; break;
        case '%' : result = v1 % v2; break;
        default : result = "잘못된 연산자"; break;
    }

    calcResult.innerText = result;
}


