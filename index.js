//  05/13 초기 설정 및 틀 작성 - 이은상. 아직 따로 설정한 것은 없고 기본 파일 및 서버 열리는 것만 확인
//  05/15 DB 틀 작성 - 홍지민, 연동부분 코드만 작성하였고, 이후 확인 필요

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const mysql = require('mysql');
const sql = require('mysql/sql.js'); // SQL 쿼리문이 작성되어 있는 파일


dotenv.config();
const app = express();
app.set('port', process.env.PORT || 8000);
//const mainPage = require('./routes/main');  //메인페이지 미작성

//데이터베이스 연결
const pool  = mysql.createPool({  // Pool(커넥션 과부하 방지를 위한) 생성
    host            : process.env.MYSQL_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USERNAME,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DB
  });
  
  /* 쿼리문을 실행하고 결과를 반환하는 함수 */
  const query = async (alias, values) => {
    return new Promise((resolve, reject) => pool.query(sql[alias], values, (error, results) => {
      if (error) {  // 에러 발생시 
        console.log(error);
        reject({
          error
        });
      } else resolve(results); // 쿼리 결과를 전달
    }));
  }
  
  module.exports = {
    query
  };


app.use(morgan('dev'));
//app.use(express.static(path.join(__dirname, '../front-end/public')));   접속시 기본 연결 폴더를 front-end 쪽으로 바꿔놓기 위한 설정 구문. 정확한 위치를 모르니 일단 주석처리
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));



//app.use('/', mainPage);

//설정된 라우터 이외의 라우터 이동시 작동구문
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});


//오류 처리부
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});


//서버 실행부
app.listen(app.get('port', 8000), () => {
    console.log(app.get('port',8000), '8000번 포트에서 대기중');
});


