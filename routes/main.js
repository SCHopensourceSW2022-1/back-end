// 05.16 / ���� �� �۵��Լ�
// 05/24 �����ͺ��̽� ��û�� �۵��Լ� �ణ �߰�(���濹��)

/* const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs').promises;

//const Info = require('../models/info') db���� ���� �� ����

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

//const Info = require('../models/info') db���� ���� �� ����

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