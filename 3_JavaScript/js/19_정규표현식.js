// 정규 표현식 객체 생성 + 확인
document.getElementById("btn1").addEventListener("click", () => {

    // 정규표현식 객체 생성
    const regExp1 = new RegExp("script");
            // "script" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;

    console.log(regExp1, regExp2);

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page) 도 나중에 할겁니다.";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));
    console.log("regExp1.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));
    console.log("regExp2.test(str3) : " + regExp2.test(str3));
    console.log(regExp1.exec(str3));

    
});

// 메타문자 확인하기
document.getElementById("btn2").addEventListener("click", () => {

    const div1 = document.getElementById("div1");

    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>" ; // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>" ; // false
    
    // [abcd] : 문자열 내에 a, b, c, d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/a/, apple : " + regExp2.test("apple") + "<hr>" ; // true
    div1.innerHTML += "/a/, price : " + regExp2.test("price") + "<hr>" ; // false


    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/;
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>" ; // false
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>" ; // false

    // $ (달러) : 문자열의 끝을 의미
    const regExp4 = /group$/;
    div1.innerHTML += "/^group/, group100 : " + regExp4.test("group100") + "<hr>" ; // false
    div1.innerHTML += "/^group/, 100group : " + regExp4.test("100group") + "<hr>" ; // false

});

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", e => {

    // 화살표 함수에서 this는 이벤트 객체를 지정하는 것이 아닌
    // 상위(부모)의 scope 값이 상속됨

    const span = document.getElementById("inputNameResult");

    // 한글 2글자에서 5글자 정규표현식
    const regExp = /^[ㄱ-힣]{2,5}$/;

    console.log(this);

    // input창이 빈칸인지 검사
    if(e.target.value == ""){
        span.innerText = "";
        return;
    }

    if(regExp.test(e.target.value)){
        span.innerText = "유효한 이름 형식입니다."
        span.style.color = "green";
        span.style.fontWeight = "bold";
    }
    else {
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});


// 주민등록번호 유효성 검사

document.getElementById("inputPno").addEventListener("keyup", e => {

    const span = document.getElementById("inputPnoResult");

    if(e.target.value.length == 0){
        span.innerText = "주민등록 번호를 입력하세요";
        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    }

    // 생년월일(6)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(e.target.value)){
        span.innerText = "유효한 주민번호 형식입니다.";
        span.classList.remove("error");
        span.classList.add("confirm");
    }
    else {
        span.innerText = "유효하지 않습니다.";
        span.classList.remove("confirm");
        span.classList.add("error");
    }
});