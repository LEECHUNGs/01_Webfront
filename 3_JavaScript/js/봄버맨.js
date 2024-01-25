const bomberman = document.querySelector(".bomberman");
const moving = document.querySelector(".moving");

let x_move = 0; // x좌표 방향으로 얼마나 이동한지 저장하는 변수
let y_move = 0; // y좌표 방향으로 얼마나 이동한지 저장하는 변수

// addEventListeneer( "이벤트 종류", 함수(이벤트가 발생 시 수행할 기능))
// 전달인자 2개
document.addEventListener("keydown", function(e) {
    
    switch(e.key) {

        case "ArrowUp" : 
            y_move -= 10;  
            break;

        case "ArrowDown" : 
            y_move += 10;
            break;

        case "ArrowLeft" : 
            x_move -= 10;
            break;

        case "ArrowRight" :
            x_move += 10;
            break;

        case 'x' : 
            const game = document.querySelector("#game");
            game.innerHTML += 
                `<img src="../../images/boom.png" style="transform: 
                    translate3d(${x_move}px, ${y_move}px, 0); 
                    position: absolute;">`;
            break;

        default : 
            alert("방향키와 x만 가능"); break;

    }
    
    bomberman.style.transform = 
        `translate3d(${x_move}px, ${y_move}px, 0)`;

    console.log(x_move, y_move);

});