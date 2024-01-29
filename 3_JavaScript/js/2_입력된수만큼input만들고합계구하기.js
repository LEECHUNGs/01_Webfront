const btn = document.getElementById("btn");
const sumBtn = document.getElementById("sumBtn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {

    const count = document.querySelector("input");
    // const newInput = document.createElement("input");

    const newInput = [];

    for(let i = 0; i < Number(count.value); i++){
        newInput[i] = document.createElement("input");

        newInput[i].type = "number";
        newInput[i].classList.add("input-number");
        container.append(newInput[i]);
    }
});

sumBtn.addEventListener("click", () => {

    const inputs = document.querySelectorAll(".input-number");

    
    let sum = 0;
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == "") {
            alert("값을 모두 입력해 주세요!");
            break;
        }
        sum += Number(inputs[i].value);
    }

    console.log(sum);
});