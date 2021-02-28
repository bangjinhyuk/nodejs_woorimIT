"use strict";

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home  = require("./src/routes/home");

// 앱세팅
app.set("views", "./app/src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
console.log(`${__dirname}`);
app.use(bodyParser.json());
//URL을 통해 전달 되는 데이터에 한글, 공백등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home); // use => 미들웨어 등록 메서드

module.exports = app;