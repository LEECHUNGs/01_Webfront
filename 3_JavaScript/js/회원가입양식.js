const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputPwCheck = document.getElementById("inputPwCheck");
const inputName = document.getElementById("inputName");
const gender = document.getElementsByName("gender");
const inputTel = document.getElementById("inputTel");
const inputEmail = document.getElementById("inputEmail");

const inputs = document.querySelectorAll("input");

const btnReset = document.getElementById("btnReset");
const btnJoin = document.getElementById("btnJoin");

const checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비밀번호
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" : false // 전화번호
}

document.addEventListener("keyup", e => {

    const regId = /^[a-z][a-zA-Z0-9_-]{5,13}$/;
    const regName = /^[가-힣]{2,5}$/;
    const regTel = /^[0][0-9]{2}\-[0-9]{4}\-[0-9]{4}$/;
    const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const regPw = /^[a-z][a-zA-Z0-0]+$/;
    
    const idTest = document.getElementById("idTest");
    const nameTest = document.getElementById("nameTest");
    const telTest = document.getElementById("telTest");
    const emailTest = document.getElementById("emailTest");

    
});

// 아이디
inputId.addEventListener("keyup", e => {

    const regId = /^[a-z][a-zA-Z0-9_-]{5,13}$/;

    if(regId.test(e.target.value)){
        e.target.style.backgroundColor = "springgreen";
        checkObj["inputId"] = true;
    }
    else{
        e.target.style.backgroundColor = "white";
        checkObj["inputId"] = false;
    }

});

inputPw.addEventListener("keyup", e => {

    const regPw = /^[a-z][a-zA-Z0-0]{5,13}$/;

    if(regPw.test(e.target.value)){
        e.target.style.backgroundColor = "springgreen";
        checkObj["inputPw"] = true;
    }
    else{
        e.target.style.backgroundColor = "white";
        checkObj["inputPw"] = false;
    }

});

inputPwCheck.addEventListener("keyup", e => {

    const regPw = /^[a-z][a-zA-Z0-0]+$/;

    if(inputPw.value.length == 0){
        e.target.nextElementSibling.innerText = "";
        inputPwCheck.value = "";
        alert("비밀번호를 입력해 주세요");
        e.target.nextElementSibling.style.color = "black";
        checkObj["inputPwConfirm"] = false;
        return;
    }

    if(inputPw.value == e.target.value){
        e.target.nextElementSibling.style.color = "green"
        e.target.nextElementSibling.innerText = "비밀번호 일치";
        checkObj["inputPwConfirm"] = true;
    }
    else {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.innerText = "비밀번호가 불일치";
        checkObj["inputPwConfirm"] = false;
    }

});

inputName.addEventListener("keyup", e => {

    const regName = /^[가-힣]{2,5}$/;

    if(e.target.value.length < 2 || e.target.value.length > 5){
        e.target.nextElementSibling.innerText = "";
        e.target.nextElementSibling.style.color = "black";
        checkObj["inputName"] = false;
        return;
    }

    if(regName.test(e.target.value)){
        e.target.nextElementSibling.innerText = "정상글자";
        e.target.nextElementSibling.style.color = "green";
        checkObj["inputName"] = true;
    }
    else{
        e.target.nextElementSibling.innerText = "한글만 입력하세요";
        e.target.nextElementSibling.style.color = "red";
        checkObj["inputName"] = false;
    }
});

btnReset.addEventListener("click", e => {
    
    const span = document.querySelectorAll("span");

    for(let i = 0; i<span.length; i++){
        span[i].innerText = "";
        span[i].style.color = "black";
    }
});

function validate() {

    const regTel = /^[0][0-9]{2}\-[0-9]{4}\-[0-9]{4}$/;
    
    // gender 선택 여부
    if(gender[0].checked || gender[1].checked){
        checkObj["gender"] = true;
    }

    else {
        alert("성별을 선택해주세요")
        checkObj["gender"] = false;
        return;
    }
    
    // 전화번호 확인
    if(regTel.test(inputTel.value)) {
        
        checkObj["inputTel"] = true;
    }
    else {
        alert("전화번호 형식이 올바르지 않습니다.")
        checkObj["inputTel"] = false;
        return;
    }
    
    for(let i = 0; i<Object.values(checkObj).length; i++){
        if(!Object.values(checkObj)[i]){
            alert("가입 실패!!!");
            return;
        }
    }
    
    alert("회원가입 성공");
}