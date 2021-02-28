"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {

    if (!id.value || !name.value|| !psword.value) return alert("전부 입력해주세요.")
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
     const req = {
         id: id.value,
         psword: psword.value,
         name: name.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));
    fetch ("/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }) 
    .then((res)=> res.json())
    .then((res) =>{
        if (res.success){
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입중 에러 발생");
    });
}