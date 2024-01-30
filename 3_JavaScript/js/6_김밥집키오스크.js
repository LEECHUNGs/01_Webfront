let menuList = [["김밥", "라면", "튀김", "떡볶이", "돈까스", "우동"], 
                [0, 0, 0, 0, 0, 0], 
                [3000, 4500, 5000, 6000, 7500, 5000]];
let sum = 0;
let count = 0;

function addToCart(menuItem, cost) {
    // cart
    const cart = document.getElementById("cart");
    const emptyCart = document.getElementById("empty-cart");
    // 메뉴 리스트
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    // 메뉴 명
    const menuName = document.createElement("span");
    // 메뉴 양
    const quantity = document.createElement("div");
    const plusBtn = document.createElement("button");
    const quantityCount = document.createElement("span");
    const minusBtn = document.createElement("button");
    // 삭제 버튼
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-button");


    let menuNum = whatMenu(menuItem);

    let countSum = 0;
    for(let i = 0; i<menuList[1].length; i++){
        countSum += menuList[1][i];
    }

    // cart 활성/비활성화
    if(countSum <= 0){
        emptyCart.style.display = "block";
        cart.style.display = "none";
    }
    else {
        emptyCart.style.display = "none";
        cart.style.display = "bolck";
    }

    // 카트에 이미 있을 경우
    if(menuList[1][menuNum] <= 1) {
        // 카트
        cart.append(cartItem);

        // 메뉴 이름
        menuName.innerText = menuItem;
        cartItem.append(menuName);

        // 메뉴 개수
        cartItem.append(quantity);
        
        plusBtn.innerText = "+";
        quantity.append(plusBtn);

        quantityCount.innerText = `${menuList[1][menuNum]} 개`;
        quantity.append(quantityCount);

        minusBtn.innerText = "-";
        quantity.append(minusBtn);

        // 삭제 버튼
        deleteBtn.innerText = "X";
        cartItem.append(deleteBtn);
    }
    else {
        alert("이미 장바구니에 있습니다.!!");
        menuList[1][menuNum]--;
        return;
    }

        
    plusBtn.addEventListener("click", e => {
        
        menuList[1][menuNum]++;
        e.target.nextSibling.innerText = `${menuList[1][menuNum]} 개`;
        sumFn();
    });
    minusBtn.addEventListener("click", e => {
        
        if(menuList[1][menuNum] <= 1)
            return;

        menuList[1][menuNum]--;
        e.target.previousSibling.innerText = `${menuList[1][menuNum]} 개`;
        sumFn();
    });
    deleteBtn.addEventListener("click", e => {

        let num = whatMenu(e.target.parentElement.firstChild.innerText);
        menuList[1][num] = 0;
        e.target.parentElement.remove();
        sumFn();
    });
    
    sumFn();
}

function whatMenu(menuItem) {
    let returnNum = -1;

    for(let i = 0; i<menuList[0].length; i++){
        if(menuList[0][i] == menuItem)
            returnNum = i;
    }
    menuList[1][returnNum]++;

    return returnNum;
}

function sumFn() {

    const total = document.getElementById("total");

    let sum = 0;
    for(let i =0; i<menuList[1].length; i++) {

        sum += menuList[1][i] * menuList[2][i];
    }

    total.innerText = `합계: ₩${sum}`;
}

