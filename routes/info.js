const express = require('express');
const router = express.Router();

// 정보 조회를 위한 라우트
// app.js에서 기본 경로에 /info를 사용하기 때문에 /info 라우트 경로를 가짐
router.get('/', function(req, res) {
    res.send('info 라우트 루트'); 
});
// 정보 추가
router.post('/insert', function(req, res) {
    res.send('/info/insert 라우트'); 
});

// 정보 수정
router.put('/update', function(req, res) {
    res.send('/info/udate 라우트'); 
});

// 정보 삭제
router.delete('/delete', function(req, res) {
    res.send('/info/delete 라우트');
});

module.exports = router;