// 전화번호 버튼
const cell = document.querySelector(".cell-table");
const add_btn = document.querySelector("#add-num");
const reset_btn = document.querySelector("#reset-num");
const input = document.querySelector("#num");
const cellList = document.querySelector(".cell-list");

// 전화번호 입력
cell.addEventListener("click", e => {

    input.innerText += e.target.innerText;
});

// 전화번호 초기화
reset_btn.addEventListener("click", () => {
    const input = document.querySelector("#num");

    input.innerText = "";
});

// 전화번호 추가
add_btn.addEventListener("click", e => {
    
    const create_list = document.createElement("div");
    const numbers = document.createElement("span");
    const stars_btn = document.createElement("span");
    const remove_btn = document.createElement("span");

    if(input.innerText == "") {
        alert("번호를 입력해 주세요!!");
        return;
    }

    // 클래스 추가
    create_list.classList.add("lists");
    numbers.classList.add("numbers");
    stars_btn.classList.add("fa-regular");
    stars_btn.classList.add("fa-star");
    stars_btn.classList.add("stars");
    remove_btn.classList.add("remove-row");

    // 내용 추가
    numbers.innerText =  input.innerText;
    remove_btn.innerHTML = "&times;";

    // 목록 추가
    cellList.append(create_list);
    create_list.append(numbers);
    create_list.append(stars_btn);
    create_list.append(remove_btn);

    // 입력창 비우기
    input.innerText = "";




    // 전화번호 삭제
    remove_btn.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.remove();
    });



    // 전화번호 즐겨찾기
    stars_btn.addEventListener("click", e => {

        if(e.target.style.backgroundColor == "yellow"){
            e.target.style.backgroundColor = "rgba(255,255,255,1)";
            e.target.previousSibling.style.color = "black";
        }
        else {
            e.target.style.backgroundColor = "yellow";
            e.target.previousSibling.style.color = "red";
        }
    });

});


