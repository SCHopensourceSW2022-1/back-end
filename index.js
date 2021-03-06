//  05/13 초기 설정 및 틀 작성 - 이은상. 아직 따로 설정한 것은 없고 기본 파일 및 서버 열리는 것만 확인
//  05/15 DB 틀 작성 - 홍지민, 연동부분 코드만 작성하였고, 이후 확인 필요
//  05/22 서버 실행여부 확인(현재 작동 안됨)
//  05/24 서버 실행은 됨... db 아직 안 만듬 조금 만들고 연결하는 거 성공함.
//  05/29 db create, delete 구문 추가(작동여부 모름.)

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const mysql = require('mysql');
const cors = require('cors');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 8000);
const mainPage = require('./routes/main');
const logger = require('./logger');



sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

//배포용 설정
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
}
else {
    app.use(morgan('dev'));
}
//

app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../front-end/build')));  // 접속시 기본 연결 폴더를 front-end 쪽으로 바꿔놓기 위한 설정 구문. 정확한 위치를 모르니 일단 주석처리
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}

// 배포용 설정
if (process.env.NODE_ENV === 'production') {
    sessionOption.proxy = true;
    sessionOption.cookie.secure = true;
}
app.use(session(sessionOption));
//app.use(passport.initialize())
//


app.use("/", mainPage);



//설정된 라우터 이외의 라우터 이동시 작동구문
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    logger.info('hello');
    logger.error(error.message);
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
app.listen(app.get('port'), () => {
    console.log(app.get('port'), ' 포트에서 대기중');
});


