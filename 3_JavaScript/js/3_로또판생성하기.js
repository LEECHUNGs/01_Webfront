let count = 0;

document.getElementById("createBtn").addEventListener("click", e => {

    const lottoBoard = document.getElementById("lottoBoard");
    const lotto = [];
    
/*     if(lottoBoard.children.length != 0){
        console.log(lottoBoard.children);
        for(let i = 0; i<lottoBoard.children.length; i++){
            lottoBoard.children[i].remove();
        }
    } */

    if(lottoBoard.children.length == 0) {
        for(let i = 0; i<45; i++){
            lotto[i] = document.createElement("div");
            lotto[i].innerText = i + 1;
            lotto[i].classList.add("number");
            lottoBoard.append(lotto[i]);
        }
    }
    else {
        const lottos = document.querySelectorAll(".number");
        for(let i = 0; i<lottos.length; i++){
            lottos[i].remove();
        }
    }

    for(let i = 0; i<lotto.length; i++){
        lotto[i].addEventListener("click", e => {


            if(e.target.classList.value == "number active") {
                e.target.classList.remove("active");
                count--;
            }
            else {
                if(count > 5){
                    alert("저장 가능한 갯수는 6개 까지 입니다.!!!");
                    return;
                }
                e.target.classList.add("active");
                count++;
            }

            return;
        });
    }
});