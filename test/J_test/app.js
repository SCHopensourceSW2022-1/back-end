var express = require('express') // node_modules 에 있는 express 관련 파일을 가져온다.
var bodyParser = require('body-parser') // 웹에서 보낸 데이터를 받아 처리하는 bp불러오기
var app = express() // express 는 함수이므로, 반환값을 변수에 저장
app.set('view engine', 'ejs') //ejs는 require 필요x, 뷰엔진을 ejs로 세팅
var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const fs = require('fs')
import fetcch from "node-fetch"

let homeContents = {};
let planningEvent = {};

// data 폴더 안에 들어있는 json 파일들을 파싱하여 객체 안에 넣는다.
homeContents = JSON.parse(
  fs.readFileSync(__dirname + "/public/data/homeContents.json", "utf-8")
);
planningEvent = JSON.parse(
  fs.readFileSync(__dirname + "/public/data/planningEvent.json", "utf-8")
);

// localhost:3000/homeContents.json 으로 접근하면 파싱한 데이터가 렌더링된다. 
app.get("/homeContents.json", (req,res,next) => {
    res.json(homeContents);
})

app.get("/planningEvent.json", (req,res,next) => {
  res.json(planningEvent);
})

//3000번 포트 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

//브라우저에서 오는 응답이 json 일 수도 아닐 수도 있으므로 urlencoded()도 추가
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
    res.send("<h1>Hello Local</h1>\n hello jimin")
})

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
}) 

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워짐 main
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})

// form 
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/form.html")
})

app.get('/form', function(req,res) {
    res.sendFile(__dirname + "/public/form.html")
})

//form에 작성한 내용을 req.body에 저장하여 email_post에서 출력
app.post('/email_post', function(req, res) {
    res.render('email.ejs', {'email' : req.body.email})
})

