// 클래스 접근 테스트
function classTest() {

    // 유사 배열이란?
    // 배열처럼 index, length를 가지고 있으나
    // 배열 전용 기능(메서드)를 제공하지 않음
    // 제공하지 않는 기능 : pop(), push()

    // .cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);

    // divs 0, 1, 2 번째 요소에 배경색 변경
    divs[0].style.backgroundColor = "rgb(144, 203, 80)";
    divs[1].style.backgroundColor = "blue";
    divs[2].style.backgroundColor = "deepPink";

}


function tagNameTest() {
    
    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와
    // 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");

    console.log(tagList);

    for(let i = 0; i < tagList.length; i++){

        // tagList[i] = abc; : 내용으로 abc 대입
        // tagList[i] : 내부에 작성된 내용 추출
        console.log(tagList[i].innerText);
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}

// name으로 요소 접근하기
function nameTest() {  
    
    // name 속성 값이 hobby인 요소를 모두 얻어와 변수에 저장
    const hobbyList = document.getElementsByName("hobby");
    const name_div = document.getElementById("name-div");
    // console.log(hobbyList);

    let str = ""; // 체크된 값 누적
    let count = 0; // 체크된 수 카운트

    for(let i = 0; i < hobbyList.length; i++){

        // checkbox, radio 전용 속성 (.checked)

        if(hobbyList[i].checked) {
            count++;
            str += hobbyList[i].value + " ";
        }
    }

    document.getElementById("name-div") .innerHTML
        = `선택된 취미 : ${str}<br><br>선택된 취미 개수 : ${count}`;
}


function cssTest() {

    /* 
        [요소 1개]
        1) doucument.querySelector("Css 선택자");
                -> 선택자가 선택한 요소 중 첫번쨰 요소를 반환
        [요소 n개 -> 배열]
        2) doucument.querySelector("Css 선택자");
                -> 선택자가 선택한 요소 모두를 배열(유사배열)로 반환
    */

    // target-div 속성 값이 "css-div" 인 요소에 접근
    const container = document.querySelector('[target-div="css-div"]');

    // 요소의 테두리를 변경
    container.style.border = "10px solid red";

    // 첫번쨰 자식 div 접근
    // 내용을 css 선택자로 선택해서 값 변경됨

    const div1 = document.querySelector('[target-div="css-div"] > div');

    div1.innerText = "CSS 선택자로 선택해서 값 변경됨";

    // 두번쨰 자식 div 접근
    const div2 = document.querySelector('[target-div="css-div"] > div:last-child');
    div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";
    

    // 모든 자식 div 한 번에 선택(배열)
    const divList = document.querySelectorAll('[target-div="css-div"] > div');
    console.log(divList);

    // index를 이용해서 요소 하나씩 접근

    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i = 0; i < divList.length; i++) {
        divList[i].onclick = function() {
            alert(`${i} 번쨰 요소 입니다.`);
        }
    }
}


function readValue() {
    
    // 채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg");
    
    // 채팅 내용 입력 input
    const input = document. querySelector("#user-input");

    // 입력된 값이 없을 경우
    // 1) 진짜 안적음
    // 2) 공백만 적음

    // 문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim().length == 0) {
        alert("채팅 내용을 입력해 주세요");

        input.value = ""; // 이전에 input 작성값 제거

        input.focus(); // input 창에 커서 활성화

        return; // 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
    }


    // 채팅 출력
    bg.innerHTML += `<p><span>${input.value}</p></span>`;
    
    // bg.scrollHeight     : bg의 스크롤 전체 높이
    // bg.scrollTop        : 스크롤 윗부분 위치
    // bg.scrollTop = 값   : 스크롤 윗부분을 값 위치로 이동
    // (값이 너무 크면 자동으로 제일 밑으로 이동)
    
    bg.scrollTop = bg.scrollHeight;
    
    // input.value = "";
    input.focus();


}


/* 
아이디가 user-input인 요소에서
키가 올라오는 동작이 발생 시(감지)
올라온 키가 "Enter" 라면 readValue() 함수 호출
*/

// keydown : 키가 눌러졌을 때 이벤트 발생(+ 꾹 누르고 있으면 계속 인식)
// keyup : 눌러지던 키가 떼어 졌을 떄 발생(1회만 인식)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {
    // e : 이벤트 객체 (발생한 이벤트 정보를 담고있는 객체)
    console.log(e);
    if(e.key == "Enter") readValue();
})