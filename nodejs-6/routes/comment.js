var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/nodeApp'
var async = require('async')

// 上传图片组件
var multiparty = require('multiparty')
var fs = require('fs')

// 定义评论添加接口
router.post('/submit', function (req, res) {
  var title = req.body['title']
  var content = req.body['content']

  // 插入数据
  var insertData = function (db, cb) {
    var ids = db.collection('ids')
    var comment = db.collection('comment')

    // 串行有关联：对comment的添加操作依托于 对ids查询和修改的操作
    async.waterfall([
      function (callback) {
        ids.findAndModify(
          {name: 'comment'},
          [['_id', 'desc']],
          {$inc:{id: 1}},
          function (err, results) {
            callback(null, results.value.id)
          }
        )
      },
      function (id, callback) {
        var data = {id: id, title: title, content: content}
        comment.insertOne(data, function (err, results) {
          if (err) {
            callback(null, err)
          } else {
            callback(null, results)
          }
        })
      }
    ], function (err, results) {
      cb(results)
    })
  }

  // 数据库连接
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err);
    } else {
      insertData(db, function (results) {
        res.redirect('/comment/list')
      })
    }
  })
})

// 定义评论显示列表接口
router.get('/list', function (req, res) {

  // 跨域jsonp,callback
  var callback = req.query['callback']

  // 构造分页基础信息
  var pageNo = parseInt(req.query['pageNo'], 10) //获得get请求地址栏里的参数
  pageNo = pageNo ? pageNo : 1
  var pageSize = 10
  var totalPage = 0
  var count = 0

  // 获取数据列表
  var findData = function(db, cb) {
    var comment = db.collection('comment')
    async.series([
      function (callback) {
        comment.find({}).toArray(function (err, results) {
          count = results.length
          totalPage = Math.ceil(count/pageSize)
        })
        callback(null, '')
      },
      function (callback) {
        comment.find({}).sort({_id:-1}).skip((pageNo-1)*pageSize).limit(pageSize).toArray(function (err, results) {
          callback(null, results)
        })
      }
    ], function (err, results) {
      cb(results[1])
    })

  }

  // 数据库连接
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err);
    } else {
      findData(db, function (results) {
        // 通过EJS模板渲染
        // res.render('list', {
        //   pageNo: pageNo,
        //   totalPage: totalPage,
        //   count: count,
        //   data: results
        // })
        // res.send(callback + '(' + JSON.stringify(results) + ')') // 返回接口数据，做接口时候用
        res.send(results) // 返回接口数据，做接口时候用
        // res.redirect('/list')
      })
    }
  })
})

// 定义上传图片接口
router.all('/uploadImg', function (req, res) {
  var form = new multiparty.Form()

  // 设置编码
  form.encoding = 'utf-8'

  // 设置文件的临时存储路径
  form.uploadDir = './uploadtemp'

  // 设置文件大小限制
  form.maxFileSize = 2 * 1024 * 1024

  // 上传处理
  form.parse(req, function (err, fields, files) {
    // 上传文件的真实路径
    var uploadurl = '/images/upload/'
    // 获得文件域对象
    var file = files['filedata']
    // 获得原始文件名
    var originalFilename = file[0].originalFilename
    // 获得原始文件路径
    var tmpPath = file[0].path

    // 重命名文件
    var timestamp = new Date().getTime()
    uploadurl += timestamp + originalFilename
    newPath = './public/' + uploadurl

    // 接收并保存前端传过来的图片二进制流
    var fileReadStream = fs.createReadStream(tmpPath)
    var fileWriteStream = fs.createWriteStream(newPath)
    fileReadStream.pipe(fileWriteStream) //文件写操作

    // 返回信息给前端
    fileWriteStream.on('close', function () {
      fs.unlinkSync(tmpPath)
      res.send('{"err":"","msg":"' + uploadurl + '"}')
    })

  })
})

router.all('/detail', function (req, res) {
  var id = parseInt(req.query['id'], 10)

  // 数据库连接
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    // 连接集合collection
    var coll = db.collection('comment')

    // 查询数据
    coll.find({id:id}).toArray(function (err, results) {
      res.render('detail', {data: results})
    })
  })
})
// 课堂试验
// $.ajax({
//   url: 'abc.php',
//   type: 'post',
//   dataType: 'json',
//   // contentType: 'application/x-www-form-urlencoded'
//   contentType: 'multipart/formdata'
//   data: JSON.stringify({
//     name: 'kailong',
//     age: 12
//   }),
//   success: function (res) {
//
//   }
// })

module.exports = router
