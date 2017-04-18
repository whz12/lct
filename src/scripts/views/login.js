var loginTpl = require('../tpls/login.string')
var utilCommon = require('../utils/util.common.js')

//页面渲染

utilCommon.render(loginTpl)

$('#loginBtn').on('click', function () {
  var username = $('input[type=text]').val()
  var password = $('input[type=password]').val()

  $.ajax({
    url: '/api2/users/login',
    type: 'post',
    data: {
      username: username,
      password: password
    },
    dataType: 'json',
    success: function (result) {
      if (result.res == 'ok') {
        location.href="/index.html"
      } else {
        $('input[type=text]').val('')
        $('input[type=password]').val('')
      }
    }
  })
  // console.log(1)
})