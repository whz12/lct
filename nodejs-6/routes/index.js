var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express2',
    name: req.session.username
  });
});

// 注册
router.get('/registor', function (req, res) {
  res.render('registor', {
    isShowNickname: false,
    name: '<b>kailong</b>'
  })
})

// 登录
router.get('/login', function (req, res) {
  res.render('login', {})
})

// 评论添加
router.get('/comment', function (req, res) {
  res.render('comment', {})
})

// 评论列表
// router.get('/comment/list', function (req, res) {
//   res.render('list', {})
// })

module.exports = router;
