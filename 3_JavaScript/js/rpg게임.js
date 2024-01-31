// player status
const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
};

// 임시
player.name = "자신";
player.job = "마법사";
player.gender = "남";


// monster stasus
const monster = {
    name: "Goblin",
    hp: 0,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
};

// item status
const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
};

  

// 캐릭터 생성 버튼 클릭
document.getElementById("createBtn").addEventListener("click", () => {
    
    // 캐릭터 정보를 입력할 section을 불러옴
    const playerArea = document.getElementById("player-area");
    // status-area section
    const statusArea = document.createElement("section");
    statusArea.id = "status-area";
    // 업로드할 정보를 담은 span 태그 요소 생성
    const status = [];
    for(let i = 0; i < 10; i++)
        status[i] = document.createElement("span");
    // 업로드할 캐릭터 이미지를 담는 img 태그 요소 생성
    const img = document.createElement("img");


    // 정보를 입력받음
    // 이름 체크
    const regName = /^[가-힣]{2,5}$/;
    let temp = prompt("이름을 입력하세요 : ");

    if(regName.test(temp)) 
        player.name = temp;
    else {
        alert("잘못된 이름 형식 입니다.");
        return;
    }


    // 직업 체크
    temp = prompt("직업을 입력하세요 : ");

    if(temp == "전사" || temp == "마법사") 
        player.job = temp;
    else {
        alert("잘못 입력하셨습니다.");
        return;
    }


    // 성별 체크
    temp = prompt("성별을 입력하세요 : ");

    if(temp == "남" || temp == "여") 
        player.gender = temp;
    else {
        alert("잘못 입력하셨습니다.");
        return;
    }


    // 이미지 선택
    if(player.job == "전사") {
        if(player.gender == "남") {
            img.src = "../../images/남자_전사.png"
        }
        else {
            img.src = "../../images/여자_전사.png"
        }
    }
    else {
        if(player.gender == "남") {
            img.src = "../../images/남자_마법사.png"
        }
        else {
            img.src = "../../images/여자_마법사.png"
        }
    }


    // span 태그에 내용 입력
    status[0].innerText = `캐릭터 정보`;
    status[1].innerText = `이름 : ${player.name}`;
    status[2].innerText = `직업 : ${player.job}`;
    status[3].innerText = `성별 : ${player.gender}`;
    status[4].innerText = `레벨 : ${player.level}`;
    status[5].innerText = `HP : ${player.hp}`;
    status[6].innerText = `공격력 : ${player.attack}`;
    status[7].innerText = `방어력 : ${player.defense}`;
    status[8].innerText = `경험치 : ${player.exp}`;
    status[9].innerText = `골드 : ${player.gold}`;

    playerArea.append(statusArea);
    for(let i = 0; i<status.length; i++) {
        statusArea.append(status[i]);
    }

    // 이미지 입력
    playerArea.append(img);

});

// 전투 시작 버튼 클릭
document.getElementById("fightBtn").addEventListener("click", () => {

    // 경고창
    if(player.name == "" || player.job == "" || player.gender == "") {
        alert("캐릭터가 생성되지 않았습니다.");
        return;
    }

    const logArea = document.getElementById("log-area");
    const message = [];
    for(let i = 0; i<6; i++) {
        message[i] = document.createElement("span");
    }
    

    // 전투 수행

    // 몬스터 생성
    if(monster.hp <= 0) {
        message[5].innerHTML = `--------------------------------<br>
                                ${monster.name}이/가 나타났습니다.!`;
        logArea.append(message[5]);
        monster.hp = 20;
    }
    
    // 플레이어 공격
    // 무기 확인
    let damage1;
    if(player.weapon != null) {
        monster.hp -= damage1 = player.attack 
                           + player.weapon.attackBonus 
                           - monster.defense;
    }
    else {
        monster.hp -= damage1 
                         = player.attack - monster.defense;
    }

    message[0].innerHTML = `${player.name}의 공격!!<br>
                            ${monster.name}은/는 ${damage1} 만큼 피해를 입었다.`
    logArea.append(message[0]);

    // 몬스터 생존 확인
    if(monster.hp <= 0) {
        message[1].innerHTML = `몬스터를 처치했습니다 ${monster.expReward} 경험치 획득!<br>
                                5 골드를 획득했습니다.`;
        logArea.append(message[1]);

        // 제거 보상 (경험치, 골드)
        player.gold += 5;
        player.exp += monster.expReward;

        let random = Math.random();
        let num = Math.floor(random * 1000) % 3;

        // 아이템 드롭
        if(random < monster.dropRate) {
            let drop;
            switch(num) {
                case 0: 
                    drop = items.sword; 
                    player.weapon = drop;
                    break;
                case 1: 
                    drop = items.shield; 
                    player.armor = drop;
                    break;
                case 2: 
                    drop = items.potion; 
                    player.hp += 20;
                    break;
            }

            message[2].innerHTML = `${drop.name}을 드롭했습니다.`;
            logArea.append(message[2]);
        }
        reset();
        return;
    }

    // 몬스터 공격
    // 방어구 확인
    let damage2;
    if(player.armor != null) {
        player.hp -= damage2 
                   = monster.attack 
                   - player.defense 
                   - player.armor.defenseBonus;
    }
    else {
        player.hp -= damage2
                   = monster.attack 
                   - player.defense;
    }
    message[3].innerHTML = `${monster.name}의 공격!!<br>
                            ${player.name}은/는 ${damage2} 만큼 피해를 입었다.`
    logArea.append(message[3]);
    
    if(player.hp <= 0) {

        death();

        message[4].innerHTML = `전투에서 패배했습니다.`
        logArea.append(message[4]);

        return;
    }
    reset();


});

// 구매 버튼 클릭
document.getElementById("purchaseBtn").addEventListener("click", () => {
    
    let addItem = prompt("구매할 아이템의 이름을 작성해 주세요");
    switch(addItem) {
        case "검" : {
            if(player.gold >= 15) {
                player.weapon = items.sword;
            }
            else {
                alert("잔액이 부족합니다!!");
                return;
            }
            break;
        }
        case "방패" : {
            if(player.gold >= 15) {
                player.armor = items.shield;
            }
            else {
                alert("잔액이 부족합니다!!");
                return;
            }
            break;
        }
        case "물약" : {
            if(player.gold >= 10) {
                player.hp += 20;
            }
            else {
                alert("잔액이 부족합니다!!");
                return;
            }
            break;
        }
        default : {
            alert("없는 아이템 입니다.");
            break;
        }
    }  
    
    const logArea = document.getElementById("log-area");
    const message = document.createElement("span");

    message = `${addItem}을 구매했습니다.`;

    logArea.append(message);

    reset();
});

function death() {

    // player 초기화
    player.name =  "",
    player.job =  "",
    player.gender =  "",
    player.level =  1,
    player.hp =  100,
    player.attack =  10,
    player.defense =  5,
    player.exp =  0,
    player.gold =  0,
    player.weapon =  null,
    player.armor =  null

    // html 수정
    const playerArea = document.getElementById("player-area");
    
    playerArea.children[0].remove();
    playerArea.children[0].remove();
}

// 스텟 뷰잉
function reset() {

    const status = document.querySelectorAll("#status-area > *");

    status[4].innerText = `레벨 : ${player.level}`;
    status[5].innerText = `HP : ${player.hp}`;
    status[6].innerText = `공격력 : ${player.attack}`;
    status[7].innerText = `방어력 : ${player.defense}`;
    status[8].innerText = `경험치 : ${player.exp}`;
    status[9].innerText = `골드 : ${player.gold}`;

    if(player.weapon != null) 
        status[6].innerText = `공격력 : ${player.attack}(+${player.weapon.attackBonus})`;
    if(player.armor != null) 
        status[7].innerText = `방어력 : ${player.defense}(+${player.armor.defenseBonus})`;
}