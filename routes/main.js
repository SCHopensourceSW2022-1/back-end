// 05.16 / ���� �� �۵��Լ�
// 05/24 �����ͺ��̽� ��û�� �۵��Լ� �ణ �߰�(���濹��)

const express = require('express');
const Info = require('../models/info');
const path = require('path');

//const Info = require('../models/info') db���� ���� �� ����

const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('hello');
});

router.get('/pika', async (req, res, next) => {
    const data = await Info.findOne({ where: {Name: 'pika'} });
    if (!data) {
        return res.send('pika');
    }
    else {
        const name = path.join(data.Image);
        return res.send(name);
    }
});

router.get('/img/:name', (req, res, next) => {
    const name = req.params.name;
    res, send(`./img/${name}`);
})
/*
router.get('/data', (req, res, next) => {

})*/




module.exports = router;
