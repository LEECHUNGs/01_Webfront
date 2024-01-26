// 요소.remove() 요소 제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 만드려는 기능 중 공통 요소를 전역 변수 선언

const add = document.querySelector("#add");
const calc = document.querySelector("#calc");

// input박스를 넣을 container 가져옴
const container = document.querySelector(".container");

// 추가
add.addEventListener("click", () => {

    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    const remove_box = document.createElement("span");

    // div에 class 삽입
    newDiv.classList.add("row");

    // input에 type, class 삽입
    // newInput.type = "number";
    newInput.setAttribute("type", "number"); // 초기화-> 기존 내용을 삭제하고 새 내용으로 초기화
    newInput.classList.add("input-number");

    // span에 class 삽입
    remove_box.classList.add("remove-row");
    remove_box.innerHTML = "&times";

    // 
    container.append(newDiv);
    container.lastChild.append(newInput);
    container.lastChild.append(remove_box);

    // -----------------------------------------
    // 클릭된 x버튼의 부모요소 제거

    // 1. 만들어지는 x버튼에 이벤트 리스너 추가

    remove_box.addEventListener("click", e => {
        
        // 2. 현재 이벤트가 발생한 요소의 부모요서 선택(탐색)
        const parent = e.target.parentElement;

        // 3. 부모 요소 제거
        parent.remove();
    });
});


// 계산
calc.addEventListener("click", () => {

    // input 요소 모두 불러오기
    const inputs = document.querySelectorAll(".input-number");

    let sum = 0;
    for(let i = 0; i < inputs.length; i++)
        sum += Number(inputs[i].value);

    alert("결과 : " + sum);
});
