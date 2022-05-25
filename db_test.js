const mysql = require('mysql');
//mysql 연동
const conn = {  
    host: 'localhost',
    port: '3306',
    user: 'sw_user',
    password: 'sw2022!',
    database: 'sw_data'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
 
var testQuery = "INSERT INTO info (`Id`,`Name`, `ContentsMain`, `ContentsDetail`, `Image`) VALUES (1,'Name test', 'Main test', 'Detail test','https://placeimg.com');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM info;";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); 