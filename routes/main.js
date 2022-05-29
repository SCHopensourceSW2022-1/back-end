// 05.16 / ���� �� �۵��Լ�
// 05/24 �����ͺ��̽� ��û�� �۵��Լ� �ణ �߰�(���濹��)

const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs').promises;
const multer = require('multer');
const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'img/');
        },
        filename: function (req, file, cb) {
            const name = new Date().valueOf() + path.extname(file.originalname);
            cb(null, name);
        }
    }),
});
var upload = multer({ storage: storage })

//const Info = require('../models/info') db���� ���� �� ����

const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('he');
});


router.get('/data', async (req, res, next) => {
    const data = await Info.findAll();
    console.log(data);
    if (!data) {
        return res.send('no data');
    }
    return res.send(data);
});


router.post('/create', upload.single(), async (req, res, next) => {
    if (await Info.findOne({ where: { title: req.body.name } })) {
        const data = await Info.create({
            Name: req.body.name,
            ContentsMain: req.body.main,
            ContentsDetali: req.body.detail,
            Category: req.body.category,
            Class: req.body.class,
            Image: name,
        });
    }
});


router.get('/delete/:name', async (req, res, next) => {
    const name = req.params.name;
    const del = await Info.destroy({ where: { Name: name } })
    return res.end('');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await Info.findAll({ where: { Category: id } });
    if (!data) {
        return res.send('pika');
    }
    else {
        /*
        const name = path.join(__dirname + '/../img/' + data.Image);
        const content = await fs.readFile(name);
        console.log(content);
        return res.end(content);
        */

        return res.send(data);
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
