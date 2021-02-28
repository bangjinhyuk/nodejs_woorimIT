"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
     const req = {
         id: id.value,
         psword: psword.value,
         confirmPsword: confirmPsword.value,
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