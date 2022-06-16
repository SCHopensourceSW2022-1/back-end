// 05.16 / 접속 시 작동함수
// 05/24 데이터베이스 요청시 작동함수 약간 추가(변경예정)
// 05.29 bd추가 삭제 작성

const express = require('express');
const Info = require('../models/info');
const path = require('path');
const fs = require('fs');

const multer = require('multer');
const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'img/');
        },
        filename: function (req, file, cb) {
            const name= new Date().valueOf() + path.extname(file.originalname);
            cb(null, name);
        }
    }),
});
var upload = multer({ storage: storage })

//const { createProxyMiddleware } = require('http-proxy-middleware');

//const dataProxy = createProxyMiddleware('/data', { target: 'http://localhost:8000/data' });


const router = express.Router();

router.get('/', (req, res, next) => {
        return res.send('he');
});

router.get('/centerclub', async (req, res, next) => {
    const data = await Info.findAll({
        where: { Category: 'center'},
    })
    return res.send('hello1');
})

router.get('/academicclub', async (req, res, next) => {
    const data = await Info.findAll({
        where: { Category: 'class' },
    })
    return res.send('hello2');
})



router.get('/data', async (req, res, next) => {
    const data = await Info.findAll();
    if (!data) {
        return res.send('no data');
    }
    //res.send(data);
    const img1  = data.map( (x, i) => {
        const name = path.join(__dirname + '/../img/' + x.Image);
        //const content = fs.readFileSync(name, { encoding: 'base64' });
        const content = fs.readFileSync(name, 'base64');
        //console.log(content);
        //console.log(data);
        data[i].dataValues.img = content;
    });
    //console.log(data);
    return res.send(data);
});


router.get('/read/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await Info.findOne({ where: { Id: id } });
    const name = path.join(__dirname + '/../img/' + data.Image);
    const content = fs.readFileSync(name, 'base64');
    data.dataValues.img = content;
    return res.send(data);
});

/*
models.post.findAll({
    // pagination
    offset: offset,
    limit: 7
    */
router.post('/create', upload.single(), async (req, res, next) => {
    const newclub = await Info.findOne({ where: { title: req.body.name } })
    if (!newclub) {
        const data = await Info.create({
            Name: req.body.name,
            ContentsMain: req.body.main,
            ContentsDetali: req.body.detail,
            Category: req.body.category,
            Class: req.body.class,
            Image: req.file.filename,
        });
        res.send('create');
    }
});

//    /back-end/img/<name>


router.get('/delete/:name', async (req, res, next) => {
    const name = req.params.name;
    const del = await Info.destroy({ where: { Name: name } })
    return res.end('delete');
});

router.get('/img/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await Info.findOne({ where: { Image: id } });
    if (data) {
        const name = path.join(__dirname + '/../img/' + data.Image);
        const content = await fs.readFile(name);
        //console.log(content);
        return res.end(content);
    }
});

/*
router.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});*/

/*
router.get('/data', (req, res, next) => {

})*/




module.exports = router;
