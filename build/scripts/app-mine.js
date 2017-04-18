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

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = " <ul>      <li class=\"active\"><a href=\"index.html\"><i></i><span>首页</span></a></li>      <li data-url=\"classify.html\"><a href=\"classify.html\"><i ></i><span>分类</span></a></li>      <li data-url=\"car.html\"><i></i><span>购物车</span></li>      <li data-url=\"mine.html\"><a href=\"mine.html\"><i></i><span>我的</span></a></li></ul>"

/***/ },
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(7)



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var mineTpl = __webpack_require__(8)
	var footerTpl = __webpack_require__(4)
	var utilCommon = __webpack_require__(5)

	//页面渲染

	utilCommon.render(mineTpl)
	$('#mine-footer').html(footerTpl)

	//活动样式
	utilCommon.setActive($('#mine-footer li'))


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\">		<section>		<div class=\"per-t\">			<img src=\"http://m.lecuntao.com/resource/images/per/bg_gerenzhongxinbeijing.png?lv=eedef2e054\" alt=\"\">			<p><a href=\"register.html\">注册</a><span>/</span><a href=\"login.html\">登录</a></p>		</div>		<div class=\"total-order-w\">			<a href=\"\">				<span class=\"my-order\">我的订单</span>				<i class=\"icon-r\"></i>				<span class=\"see-order\">查看全部订单</span>			</a>		</div>		<ul class=\"per-status\">			<li>				<a href=\"\">					<i class=\"icon-dfk\"></i>					<span>待付款</span>				</a>			</li>			<li>				<a href=\"\">					<i class=\"icon-dfh\"></i>					<span>待付款</span>				</a>			</li>			<li>				<a href=\"\">					<i class=\"icon-dsh\"></i>					<span>待收货</span>				</a>			</li>			<li>				<a href=\"\">					<i class=\"icon-th\"></i>					<span>退货/售后</span>				</a>			</li>		</ul>		<div class=\"take-delivery pad\">          <a href=\"/tpl/member/address.html\">            <span class=\"per-l\">              <i class=\"icon-loc\"></i>              <span class=\"txt-l\">收货地址</span>            </span>            <span class=\"per-r\">              <span class=\"txt-r\">管理地址信息</span>              <i class=\"icon-right\"></i>            </span>          </a>        </div>        <div class=\"per-bot\" >            <a href=\"javascript:;\" class=\"per-line pad\" id=\"per-tel\">                <span class=\"per-l\">                  <i class=\"icon-tel\"></i>                  <span class=\"txt-l\">联系电话</span>                </span>                <span class=\"per-r\">                  <span class=\"txt-r\">400-088-8888</span>                  <i class=\"icon-right\"></i>                </span>            </a>           <a href=\"/tpl/member/feedback.html\" class=\"per-line pad\" >	            <span class=\"per-l\">	              <i class=\"icon-feedback\"></i>	              <span class=\"txt-l\">意见反馈</span>	            </span>          </a>           <a href=\"javascript:;\" class=\"pad per-line\" id=\'about_use\'>            <span class=\"per-l\">              <i class=\"icon-des\"></i>              <span class=\"txt-l\">关于乐村淘</span>            </span>          </a>        </div>        <div class=\"ft-platforms\">	        <ul class=\"ft-plat-w\">	          <li >	            <a href=\"javascript:;\" class=\"button-khd\">	              <span>	                <img src=\"http://m.lecuntao.com/resource/images/img_kehuduan.png?lv=429d45be11\">	              </span>	              <span class=\"plat-txt\">客户端</span>	            </a>	          </li>	          <li>	            <a href=\"javascript:;\" id=\"local_pc\">	              <span>	                <img src=\"http://m.lecuntao.com/resource/images/img_diannaoban.png?lv=f548be1565\">	              </span>	              <span class=\"plat-txt\">电脑版</span>	            </a>	          </li>	          <li>	            <a href=\"javascript:;\" id=\"local_home\">	              <span>	                <img src=\"http://m.lecuntao.com/resource/images/img_guanwang.png?lv=df748939c3\">	              </span>	              <span class=\"plat-txt\">乐村淘官网</span>	            </a>	          </li>	        </ul>      	</div>	</section>	<footer id = \"mine-footer\">	   	</footer></div>"

/***/ }
/******/ ]);