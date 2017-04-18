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

	module.exports = __webpack_require__(9);


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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(10)


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var classifyTpl = __webpack_require__(11)
	var footerTpl = __webpack_require__(4)
	var utilCommon = __webpack_require__(5)

	//页面渲染
	utilCommon.render(classifyTpl)
	$('#classify-footer').html(footerTpl)

	//设置样式；
	utilCommon.setActive($('#classify-footer li'))

	//二级菜单
	utilCommon.secondaryMenu($('.left_menu li'))



/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\">	<section>	<div> 		<div class=\"ss_bar_w ss_bar_l\">			<input class=\"ss_input ss_ipt_w\" type=\"text\" name=\"\" placeholder=\"输入商品名称\" value=\"\">		</div>	</div>		<main>			<div class=\"left_menu\">				<ul class=\"province\">					<li class=\"active\"><a href=\"#javascript\">电器/数码</a></li>					<li><a href=\"#javascript\">食品/饮料</a></li>					<li><a href=\"#javascript\">农产品</a></li>					<li><a href=\"#javascript\">农用物资</a></li>					<li><a href=\"#javascript\">通讯/办公</a></li>					<li><a href=\"#javascript\">个护/化妆</a></li>					<li><a href=\"#javascript\">家居/建材</a></li>					<li><a href=\"#javascript\">服装/饰品</a></li>					<li><a href=\"#javascript\">鞋帽/箱包</a></li>					<li><a href=\"#javascript\">旅游/房产</a></li>					<li><a href=\"#javascript\">母婴/玩具</a></li>				</ul>			</div>			<div class=\"right_menu\">				<ul class=\"active\">					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_259.png\" alt=\"\"><p><a href=\"\">大家电</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_258.png\" alt=\"\"><p><a href=\"\">生活电器</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_260.png\" alt=\"\"><p><a href=\"\">厨房电器</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_261.png\" alt=\"\"><p><a href=\"\">健康护理</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_390.png\" alt=\"\"><p><a href=\"\">电脑整机</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_391.png\" alt=\"\"><p><a href=\"\">电脑配件</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_1067.png\" alt=\"\"><p><a href=\"\">摄影摄像</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_1068.png\" alt=\"\"><p><a href=\"\">数码配件</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_1069.png\" alt=\"\"><p><a href=\"\">时尚影音</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_1070.png\" alt=\"\"><p><a href=\"\">智能设备</a></p></li>					<li><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/category/cate_1071.png\" alt=\"\"><p><a href=\"\">电子教育</a></p></li>				</ul>				<ul>1</ul>				<ul>2</ul>				<ul>3</ul>				<ul>4</ul>				<ul>5</ul>				<ul>6</ul>				<ul>7</ul>				<ul>8</ul>				<ul>9</ul>				<ul>10</ul>			</div>		</main>  	</section>    <footer id = \"classify-footer\">       </footer></div>"

/***/ }
/******/ ]);