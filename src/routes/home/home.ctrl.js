"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    hello : (req,res) =>{
        res.render("home/index");
    },
    login : (req,res) =>{
        res.render("home/login");
        console.log("getlogin");
    }
}


const process = {
    login: (req,res) => {
        console.log("postlogin");

        const id = req.body.id,
        psword = req.body.psword;
        console.log(id,psword);

        const users = UserStorage.getUsers("id","psword");
        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);

    },
};

module.exports = {
    output,
    process
};