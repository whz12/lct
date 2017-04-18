/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var commmon = {
	  // 页面渲染
	  render: function (tpl) {
	    $('body').html($('body').html() + tpl)
	  },

	  // footer active
	  setActive: function (obj) {
	    // $('#hot-footer li').each(function (index, value) {
	    //   var pathname = location.pathname.replace('/', '')
	    //   // if (pathname == $(this).attr('data-url')) {
	    //   //   $(this).addClass('active').siblings().removeClass('active')
	    //   // }
	    //   var $li = $(this).find('[data-url="'+pathname+'"]')
	    //   console.log($li);
	    // })

	    var pathname = location.pathname.replace('/', '')
	    obj.filter('[data-url="'+pathname+'"]')
	     .addClass('active').siblings().removeClass('active')
	     .on('click', function () {
	        // $(this).addClass('active').siblings().removeClass('active')
	        // location.href = $(this).attr('data-url')
	      })
	  },
	  secondaryMenu: function(obj){
	    obj.on('click',function(obj){
	      $(this).addClass('active').siblings().removeClass('active');
	      $('.right_menu ul').eq($(this).index()).addClass('active').siblings().removeClass('active')
	    })
	  }
	}

	module.exports = commmon


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(13)


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var loginTpl = __webpack_require__(14)
	var utilCommon = __webpack_require__(5)

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


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\">    <div class=\"wrap\">          <header>          <span class=\"icon-close\" onclick=\"icon_ret()\"></span>          <h2 class=\"l-txt\">登录</h2>        </header>        <div class=\"login-form\">          <div class=\"login-txt\">            <a href=\"javascript:;\" class=\"l-cur\">乐村淘账户登录</a>            <a href=\"./register.html\">免费注册</a>          </div>          <div class=\"login-con\">            <form class=\"form-cur\" id=\"logInFrom\">              <div class=\"f-wrap\">                <input type=\"text\" placeholder=\"输入手机号/用户名\" class=\"username\" name=\"username\" id=\"username\" autocomplete=\"off\"/>                <em class=\"l-line\"></em>                      <input type=\"password\" placeholder=\"请输入密码\" class=\"pwd\" name=\"password\" id=\"userpwd\" autocomplete=\"off\"/>              </div>                    <a href=\"javascript:;\" class=\"btn-login\" id=\"loginBtn\">登录</a>                    <a href=\"./retphone.html\" class=\"btn-password\">找回密码</a>            </form>          </div>        </div>    </div></div>"

/***/ }
/******/ ]);