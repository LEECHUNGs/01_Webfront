// prompt 사용 연습
function test() {
    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null)  //취소
        alert("취소");
    else {
        if(password == "1234")
            alert("비밀번호 일치!");
        else
            alert("비밀번호 불일지!");
    }
}

// -------------------------------------------------

const output = document.getElementById("output");
const amount = document.getElementById("amount");
let cash = 10000;
const pw = "1234";

output.innerText = cash;

function deposit() {
    const val = Number(amount.value);

    // 금액 입력 확인
    if(amount.value.length == 0)
        alert("금액을 입력해 주세요");

    else {
        const password = prompt("비밀번호를 입력하세요");

        // 비밀번호 입력 없으면 취소
        if(password == null)
            alert("취소");

        else { // 비밀번호가 입력 되면 검사

            // 비밀번호 일치 여부 확인
            if(password == pw) { // 비밀번호 일치

                // 금액 입금
                output.innerText = (cash += val);
                amount.value = "";
                alert(`${val}원이 입금되었습니다.`);
            }
            else // 비밀번호 불일치
                alert(`비밀번호가 틀렸습니다. 다시 입력해 주세요.`);
        }
    }
}

function withdrawal() {

    const val = Number(amount.value);
    
    // 금액 입력 확인
    if(amount.value.length == 0)
        alert("금액을 입력해 주세요");

    else {
        const password = prompt("비밀번호를 입력하세요");

        // 비밀번호 입력 없으면 취소
        if(password == null)
            alert("취소");

        else { // 비밀번호가 입력 되면 검사

            // 비밀번호 일치 여부 확인
            if(password == pw) { // 비밀번호 일치

                // 계좌 잔액이 출금 금액보다 작으면 출금 불가
                if(cash < val)
                    alert("잔액이 부족합니다!!");
                else {
                    output.innerText = (cash -= val);  
                    amount.value = "";
                    alert(`${val}원이 출금되었습니다.`);
                }
            }
            // 비밀번호 불일치
            else 
                alert(`비밀번호가 틀렸습니다. 다시 입력해 주세요.`);
        }
    }
}