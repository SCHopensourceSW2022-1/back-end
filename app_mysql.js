const express = require("express");
require('dotenv').config({ path: './.env' }); // mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
const mysql = require("./mysql/sql.js"); 
const app = express();

app.use(express.json({
    limit: '50mb' 
})); // 클라이언트 요청 body를 json으로 파싱 처리


app.listen(8000, () => {
    console.log('8000 port open');
})

// 정보 조회 라우터
app.get('//info', async (req, res) => {
  const info = await mysql.query('infolist'); //sql.js 파일에 작성된 infoList 쿼리를 실행
  console.log(info);
  res.send(info); // 결과를 클라이언트로 보냄
});

// 정보 추가 
app.post('/routes/info/insert', async (req, res) => {
  console.log(req.body)
  const result = await mysql.query('insert', req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 정보 수정 
app.put('/routes/info/update', async (req, res) => {
  console.log(req.body)
  const result = await mysql.query('infolist', req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 정보 삭제 
app.delete('/routes/info/delete/:id', async (req, res) => {
  const {id} = req.params;  // 라우트 경로의 :id 에 맵핑되는 값
  const result = await mysql.query('infolist', id);
  res.send(result); // 결과를 클라이언트로 보냄
});
 