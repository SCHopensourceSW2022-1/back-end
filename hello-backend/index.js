const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '../hello/build')));


app.use('/', (req, res) => {
    res.send('index.html')
})

app.listen(8000, () => {
    console.log(app.get('port'), 'port open');
})

