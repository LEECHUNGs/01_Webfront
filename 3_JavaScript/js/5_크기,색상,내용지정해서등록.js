document.getElementById("apply").addEventListener("click", () => {

    const size = document.getElementById("size");
    const color = document.getElementById("color");
    const content = document.getElementById("content");
    
    content.style.fontSize = size.value + "px";
    content.style.color = color.value;
});

document.getElementById("registration").addEventListener("click", () => {

    const result = document.getElementById("result");
    const span = document.createElement("span");

    span.style.fontSize = size.value + "px";
    span.style.color = color.value;
    span.innerText = content.value;

    result.append(span);
});