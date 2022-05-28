const express = require('express');
const path = require('path');

const app = express();

//app.use는 아무 조건 없다면 일단 서버가 실행되면 실행되는 기본 설정 느낌으로 보시면 될 것 같습니다.
app.use(express.static(path.join(__dirname, '../hello/build'))); // express.static은 다른 경로의 있는 파일을 참조하고 싶을 때 사용하는 함수입니다.


//여기에 있는 app.use는 '/' 루트일 때만 작동하도록 설정되어있습니다.
app.use('/', (req, res) => {
    res.send('index.html') //index.html를 전송하는 것으로 응답하도록 설정해놨습니다. index.html의 파일 위치는 위의 static함수로 설정해놨습니다.
})

app.listen(8000, () => {
    console.log('8000 port open');
})

