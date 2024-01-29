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

document.addEventListener("keyup", e => {

    const regId = /^[a-z][a-zA-Z0-9_-]{5,13}$/;
    const regName = /^[가-힣]{2,5}$/;
    const regTel = /^[0][0-9]{2}\-[0-9]{4}\-[0-9]{4}$/;
    const regEmail = /^[a-z][a-zA-Z0-9]/
    

    console.log(regId.test("a12^"));
    console.log(regId.test("abcedf"));
    console.log(regId.test("aGGGGG+d"));
    console.log(regId.test("abcdefgh"));
    console.log(regTel.test("010-8982-1111"));
    console.log(regTel.test("010-882-111"));
    console.log(regTel.test("10-882-111"));
    console.log(regTel.test("01-8823-111"));
    console.log(regTel.test("010-9922-9432"));
});