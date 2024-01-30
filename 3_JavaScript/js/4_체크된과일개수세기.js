const cost = [2000, 3000, 5000];

document.getElementById("btn").addEventListener("click", () => {

    // 체크 여부 확인
    const result = document.getElementById("result"); // 결과
    const count = document.querySelectorAll(".row"); // lastChild : 개수
    const fruit = document.querySelectorAll(".fruit"); // 체크 여부
    let checked = 0;

    let sum = 0;
    
    for(let i = 0; i<fruit.length; i++) {
        if(Number((count[i].lastElementChild).value) < 0){
            alert("과일의 개수는 음수일 수 없습니다!!")
            return;
        }

        if(fruit[i].checked){
            checked = 1;
        }
        sum += checked * Number((count[i].lastElementChild).value) * cost[i];
    }
    
    result.innerText = 
             `사과 ${Number((count[0].lastElementChild).value)}개
              바나나 ${Number((count[1].lastElementChild).value)}개
              멜론 ${Number((count[2].lastElementChild).value)}개
              총합 ${sum}원`;
});