//  문자열.toLowerCase() : 영어를 모두 소문자로 변경(A->a)
//  문자열.toUpperCase() : 영어를 모두 대문자로 변경(a->A)

const keyBoard = document.querySelectorAll(".key");

/* document.addEventListener("keydown", function(e) {
    const val = e.key.toLowerCase();

    switch(val) {
        case 'q': 
            keyBoard[0].style.backgroundColor = "red"; 
            break;
        case 'w': 
            keyBoard[1].style.backgroundColor = "blue"; 
            break;
        case 'e': 
            keyBoard[2].style.backgroundColor = "yellow"; 
            break;
        case 'r': 
            keyBoard[3].style.backgroundColor = "green"; 
            break;
    }
});

document.addEventListener("keyup", function(e) {
    const val = e.key.toLowerCase();

    for(let i = 0; i<keyBoard.length; i++){
        if(val == keyBoard[i].innerText.toLowerCase())
            keyBoard[i].style.backgroundColor = "whiteqwe";
    }
});
 */

document.addEventListener("keydown", function(e) {

    let idx;

    // 입력된 키를 소문자로 바꾸어 
    switch(e.key.toLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;
    }

    keyBoard[idx].style.backgroundColor = "deepPink";
});

// 키를 떼면 배경색을 흰색으로 되돌리기
document.addEventListener("keyup", function(e) {

    let idx;

    switch(e.key.toLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;
    }

    keyBoard[idx].style.backgroundColor = "white";

});