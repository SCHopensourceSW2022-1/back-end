<<<<<<< HEAD
// 05.16 / ���� �� �۵��Լ�
// 05/24 �����ͺ��̽� ��û�� �۵��Լ� �ణ �߰�(���濹��)
// 05.29 bd�߰� ���� �ۼ�
=======
// 05.16 / 접속 시 작동함수
// 05/24 데이터베이스 요청시 작동함수 약간 추가(변경예정)
// 05.29 bd추가 삭제 작성
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74

const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs').promises;


<<<<<<< HEAD
let nameroute;  //�̹��� ���� ��θ� �����ϱ����� ����
=======
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
const multer = require('multer');
const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'img/');
        },
        filename: function (req, file, cb) {
<<<<<<< HEAD
            nameroute = new Date().valueOf() + path.extname(file.originalname);
            cb(null, nameroute);
=======
            const name= new Date().valueOf() + path.extname(file.originalname);
            cb(null, name);
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
        }
    }),
});
var upload = multer({ storage: storage })

<<<<<<< HEAD
//const Info = require('../models/info') db���� ���� �� ����
=======
//const Info = require('../models/info') db관련 파일 들어갈 예정
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74

const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('he');
});


router.get('/data', async (req, res, next) => {
    const data = await Info.findAll();
    if (!data) {
        return res.send('no data');
    }
    return res.send(data);
});
<<<<<<< HEAD


=======
/*
models.post.findAll({
    // pagination
    offset: offset,
    limit: 7
    */
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
router.post('/create', upload.single(), async (req, res, next) => {
    const newclub = await Info.findOne({ where: { title: req.body.name } })
    if (!newclub) {
        const data = await Info.create({
            Name: req.body.name,
            ContentsMain: req.body.main,
            ContentsDetali: req.body.detail,
            Category: req.body.category,
            Class: req.body.class,
<<<<<<< HEAD
            Image: nameroute,
=======
            Image: req.file.filename,
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
        });
    }
});


<<<<<<< HEAD
=======


>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
router.get('/delete/:name', async (req, res, next) => {
    const name = req.params.name;
    const del = await Info.destroy({ where: { Name: name } })
    return res.end('delete');
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
        //console.log(content);
        return res.end(content);
        
<<<<<<< HEAD

        return res.send(data);
=======
>>>>>>> 30c8f4a354c2742294cdeed808444b553ff5bb74
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