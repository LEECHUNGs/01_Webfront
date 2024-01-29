const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    // input 데이터들 가져오기
    // 박스 너비/높이/글자크기
    const wid = document.querySelector("#width");
    const hei = document.querySelector("#height");
    const fontSize = document.querySelector("#font" );

    // 글자 굵기
    const fontWeight = document.getElementsByName("border");

    // 글자색 배경색
    const fontColor = document.querySelector("#fontColor");
    const backColor = document.querySelector("#backgroundColor");

    // 가로/세로 정렬
    const row = document.getElementsByName("row");
    const col = document.getElementsByName("col");

    // 출력 문자열
    const text = document.querySelector("#text");


    // 입력 값이 모두 입력되었는지 확인
    const input = document.querySelectorAll("input");

    let alertText;
    for(let i = 0; i < input.length ; i++) {
        if(input[i].value == ""){
            switch(i) {
                case 0: alertText = "너비를 입력해 주세요!!!"; break;
                case 1: alertText = "높이를 입력해 주세요!!!"; break;
                case 2: alertText = "글자 크기를 선택해 주세요!!!"; break;
                case 5: alertText = "글자색을 입력해 주세요!!!"; break;
                case 6: alertText = "배경색을 입력해 주세요!!!"; break;
                case 13: alertText = "출력문자열을 입력해 주세요!!!"; break;
            }
            alert(alertText);
            break;
        }
    }


    // 글자 굵기 확인
    let fontW = "";
    for(let i = 0; i < fontWeight.length; i++)
        // 굵게(1) 이 선택되면 fontW를 bold로 설정
        // 그렇지 않으면 공백
        if(fontWeight[i].checked) 
            if(i == 1)
                fontW = "bold";


    // 가로 정렬 위치 확인
    let rowSort = "";
    for(let i = 0; i < row.length; i++){

        // 왼쪽이 선택되면 left
        // 가운데가 선택되면 center
        // 오른쪽이 선택되면 right
        if(row[i].checked) {

            switch(i){
                case 0: rowSort = "left"; break; 
                case 1: rowSort = "center"; break; 
                case 2: rowSort = "right"; break; 
            }  
        }
    }


    // 세로 정렬 위치 확인
    let colSort = "";
    for(let i = 0; i < col.length; i++){

        // 위가 선택되면 baseline
        // 가운데가 선택되면 center
        // 오른쪽이 선택되면 end
        if(col[i].checked) {

            switch(i){
                case 0: colSort = "baseline"; break; 
                case 1: colSort = "center"; break; 
                case 2: colSort = "end"; break; 
            }  
        }
    }



    // container 가져오기
    const container = document.querySelector(".container");

    // container의 너비/높이설정
    container.style.width = wid.value + "px";
    container.style.height = hei.value  + "px";

    // 글자크기 설정
    // container의 자식 요소인 span 태그에 글자 크기를 설정
    container.children[0].style.fontSize = fontSize.value + "px";

    // 글자 굵기/색 설정
    // container의 자식 요소인 span 태그에 글자 굵기/색 설정
    container.children[0].style.fontWeight =  fontW;
    container.children[0].style.color = fontColor.value;
    
    // container의 배경색 설정
    container.style.backgroundColor = backColor.value;

    // 가로정렬 설정
    container.style.justifyContent = rowSort;
    
    // 세로정렬 설정
    container.style.alignItems = colSort;

    // container의 자식 요소인 span 태그에 출력될 출력 문자열 설정
    container.children[0].innerText = text.value;

});