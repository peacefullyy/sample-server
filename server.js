var express = require('express');
var app = express();
var hello = require('./hello');


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));




app.use(function(req,res, next){
	console.log('time :',Date.now());
	next();
})
app.use(express.static('public'));

app.get('/',function(req,res){
res.send('hello world')
});

app.get('/hello',function(req,res){
res.send(hello())
});

app.listen(4000,function(){
console.log('Example app listening on port 4000!')
});


app.post('/user', function (req, res) {
    console.log('데이터 확인', req.body);

  // TODO 실제로 DB 데이터를 저장하는 로직을 개발해야 함.

  res.send({state: 'OK', data: req.body});

});


app.put('/user/:userId', function (req, res) {
  res.send('PUT (Update) ');
});

app.delete('/user/:userId', function (req, res) {
  res.send('DELETE (Delete) ');
});



/*
app.get('/user/:userId', function (req, res) {
// request param
  console.log(req.params.userId + '의 정보를 가져옵니다');

  // TODO 실제로 DB 에서 userId 에 해당하는 사용자 정보를 가져오는 로직을 개발해야 함
  var user = {
    userId: req.params.userId,
    name: 'John',
    email: 'yohany_AT_gmail.com',
    company: 'KossLAB'
  };

  res.send(user);
});
*/

app.get('/user/search', function (req, res) {
// request query
  console.log('데이터 확인', req.query.name);

  // TODO 실제로 DB 데이터를 조회하는 로직을 개발해야 함.

  var users = [{
    userId: req.query.userId,
    name: req.query.name,
    email: 'yohany_AT_gmail.com',
    company: 'KossLAB'
  }];

  res.send({result: users});

});

