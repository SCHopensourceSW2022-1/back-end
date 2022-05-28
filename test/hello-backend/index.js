const express = require('express');
const path = require('path');

const app = express();

//app.use�� �ƹ� ���� ���ٸ� �ϴ� ������ ����Ǹ� ����Ǵ� �⺻ ���� �������� ���ø� �� �� �����ϴ�.
app.use(express.static(path.join(__dirname, '../hello/build'))); // express.static�� �ٸ� ����� �ִ� ������ �����ϰ� ���� �� ����ϴ� �Լ��Դϴ�.


//���⿡ �ִ� app.use�� '/' ��Ʈ�� ���� �۵��ϵ��� �����Ǿ��ֽ��ϴ�.
app.use('/', (req, res) => {
    res.send('index.html') //index.html�� �����ϴ� ������ �����ϵ��� �����س����ϴ�. index.html�� ���� ��ġ�� ���� static�Լ��� �����س����ϴ�.
})

app.listen(8000, () => {
    console.log('8000 port open');
})

