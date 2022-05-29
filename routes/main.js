// 05.16 / 접속 시 작동함수
// 05/24 데이터베이스 요청시 작동함수 약간 추가(변경예정)

/* const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs').promises;

//const Info = require('../models/info') db관련 파일 들어갈 예정

const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('hello');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await Info.findOne({ where: { Name: id } });
    if (!data) {
        return res.send('pika');
    }
    else {
        const name = path.join(__dirname + '/../img/' + data.Image);
        const content = await fs.readFile(name);
        console.log(content);
        return res.end(content);
    }
});

router.get('/img/:name', (req, res, next) => {
    const name = req.params.name;
    res, send(`./img/${name}`);
})

module.exports = router; 
/*
router.get('/data', (req, res, next) => {

})*/

const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs').promises;

//const Info = require('../models/info') db관련 파일 들어갈 예정

const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('hello');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await Info.findOne({ where: { Name: id } });
    if (!data) {
        return res.send('pika');
    }
    else {
        const name = path.join(__dirname + '/../img/' + data.Image);
        const content = await fs.readFile(name);
        console.log(content);
        return res.end(content);
    }
});

router.get('/img/:name', (req, res, next) => {
    const name = req.params.name;
    res, send(`./img/${name}`);
})

module.exports = router; 