/* .js 파일 내부를 <script> 태그
내부라고 생각하면 됨 */

function externalFn() {
    alert("External 버튼이 클릭 되었습니다.");
}


// JS 맛보기
// 버튼 클릭 시 body 택의 글자색, 배경색을 변경

const body = document.querySelector("body"); /* body 태그 선택 */

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
    body.style.color = "white"; // 글자색 흰색으로 변경
    body.style.backgroundColor = "black";
}

function lightMode() {
    body.style.color = "black"; // 글자색 흰색으로 변경
    body.style.backgroundColor = "white";
}
