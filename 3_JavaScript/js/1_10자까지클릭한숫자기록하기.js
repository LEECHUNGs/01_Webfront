// number 클래스인 모든 요소 가져옴
const number = document.querySelectorAll(".number");

// 입력 숫자 개수를 저장하는 전역 변수
let count = 0;

// 마우스 클릭이 입력되었을 경우
document.addEventListener("click", e => {
    
    // 결과 입력 span 가져오기
    const result = document.getElementById("result");

    count++;

    // 클릭된 요소의 class가 number이면 실행
    if(e.target.className == "number") {
        if(count <= 10) 
            result.innerText += " " + e.target.innerText;

        // 저장된 수가 10개를 넘으면 alert창을 띄움
        else {
            alert("10개 이상은 기록할 수 없습니다.");
            count--;
        }
    }

    // reset 버튼이 눌릴 경우 초기화
    if(e.target.id == "reset"){
        result.innerText = "";
        count = 0;
    }
});