var express = require('express');
var router = express.Router();

// 调用mongodb桥
var MongoClient = require('mongodb').MongoClient
// 定义连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/nodeApp'

/* GET users listing. */
router.get('/users/abc', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册接口
router.post('/registor', function (req, res) {
  var username = req.body.username
  var password = req.body.password
  var nickname = req.body.nickname

  // 数据库连接
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    // 连接集合collection
    var coll = db.collection('users')
    var data = {username: username, password: password, nickname: nickname}
    // 插入数据
    coll.insertOne(data, function (err, results) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results);
      res.send('用户注册成功~')
    })
  })
})

// 登录接口
router.all('/login', function (req, res) {
  var username = req.body['username']
  var password = req.body['password']

  // 数据库连接
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log(1)
    // 连接集合collection
    var coll = db.collection('users')
    var query = {username:username, password:password}
    // 查询数据
    coll.find(query).toArray(function (err, results) {
      if (results.length > 0) {
        req.session.username = username
        // res.redirect('/')
        res.send({"res": "ok"});
      } else {
        // res.send('登录失败')
        res.send({"res": "fail"});
      }
    })
  })
})

// 退出接口
router.get('/logout', function (req, res) {
  req.session.username = undefined
  res.redirect('/')
})

module.exports = router;
