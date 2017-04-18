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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var indexTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var utilCommon = __webpack_require__(5)

	//页面渲染
	utilCommon.render(indexTpl)
	$('#index-footer').html(footerTpl)

	//设置样式；
	utilCommon.setActive($('#index-footer li'))

	//banner 轮播图
	var mySwiper = new Swiper('#hot-swiper', {
	  autoplayDisableOnInteraction : false,
	  autoplay: 1000,
	  loop: true,
	  pagination : '.swiper-pagination',
	  preloadImages:true,
	})
	//ajax 请求数据；
	$.ajax({
		url:'/api/lct?api_version=2.1.0&platType=2&client=wap&isEncry=0&time=1491833560883&act=index&op=mobile_index&',
		type:'post',
		data: JSON.stringify({
	  	}),
	  	dataType: 'json',
	  	success: function (res){

	  		// console.log(res)
	      var data = eval(res.datas.le6ji);
	  		var data2 = eval(res.datas.feature);
	  		// console.log(data)
	      var html = template('indexList', data);
	  		var html1 = template('indexList1', data2);
	      $('#list').prepend(html)
	   		$('#list1').prepend(html1)


	  	}

	})

	//设置横向滚动
	// var horizontalIscroll = new IScroll('.hot-hscroll', {
	//   scrollX: true,
	//   scrollY: false
	// })

	//设置内容部分滚动；
	setTimeout(function () {
	  var verticalIscroll = new IScroll('.hot-vscroll')

	  var horizontalIscroll = new IScroll('.hot_hscroll', {
		  scrollX: true,
		  scrollY: false
		})

	  var horizontalIscroll = new IScroll('.hot_hscroll1', {
	    scrollX: true,
	    scrollY: false
	  })
	},1000)






/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\">  <header>    <div class=\"sel_city\">      <span>北京市</span>      <i class=\"sel_city_icon\"></i>    </div>    <div class=\"search_wrap\">      <a href=\"#javascript\" class=\"search_btn\"></a>      <input class=\"search_inp\" type=\"text\" placeholder=\"搜索你需要的商品\">    </div>  </header>  <section class=\"hot-vscroll\">    <main>      <div class=\"swiper-container\" id=\"hot-swiper\">          <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1490686820.jpg?722\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1489628827.jpg?857\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1488165772.jpg?122\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1490779924.jpg?903\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1490577113.jpg?898\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1491444877.jpg?119\" alt=\"\">            </div>            <div class=\"swiper-slide\">              <img src=\"http://img.lecuntao.com/data/upload/mobile/app_slider/webFocus-140-1490321050.jpg?902\" alt=\"\">            </div>          </div>          <div class=\"swiper-pagination\"></div>      </div>      <div class=\"cont_b\">        <ul class=\"cont-bg\">          <li><a href=\"\"><span><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/leliuji@3x.png?date=20170408\" alt=\"\"></span><p>乐6集</p></a>          </li>          <li><a href=\"\"><span><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/teseguan@3x.png?date=20170408\" alt=\"\"></span><p>特色馆</p></a></li>          <li><a href=\"\"><span><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/lexianyu@3x.png?date=20170408\" alt=\"\"></span><p>乐县域</p></a></li>          <li><a href=\"\"><span><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/legongyi@3x.png?date=20170408\" alt=\"\"></span><p>乐公益</p></a></li>        </ul>        <ul class=\"cont-nav\">          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/liangyou@60.png\" alt=\"\"></i><span>米面油</span></li>          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/dianqi@60.png\" alt=\"\"></i><span>电器城</span></li>          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/fuzhuang@60.png\" alt=\"\"></i><span>服装城</span></li>          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/shipin@60.png\" alt=\"\"></i><span>美食汇</span></li>          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/rihua@60.png\" alt=\"\"></i><span>日用馆</span></li>          <li><i><img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/nongzi@60.png\" alt=\"\"></i><span>农资圈</span></li>        </ul>      </div>      <div class=\"cont_llj\">        <img src=\"http://m.lecuntao.com/resource/images/homepage/tittle_leliuji.png?lv=fe421b845b\" alt=\"\">        <img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/le6ji_banner_316.png?date=20170410\" alt=\"\">        <div class=\"hot_hscroll\" id = \'list\'>            <script id=\"indexList\" type=\"text/html\">                <ul>                {{each recommend_goods as value i}}                  <li>                    <a href=\"\">                      <img src=\"{{value.goods_image}}\" alt=\"\">                      <span>{{value.goods_name}}</span>                    </a>                    <div>                      <i>￥</i>                      <b>{{value.goods_price}}</b>                    </div>                  </li>                {{/each}}                </ul>            </script>        </div>      </div>      <div class=\"cont_teseguan\">        <img src=\"http://m.lecuntao.com/resource/images/homepage/tittle_teseguan.png?lv=0e04dc418e\" alt=\"\">        <img src=\"http://s0.lecuntao.com/mobile_2.1.0/resource/images/index/teseguan_banner.png?date=20170411\" alt=\"\">        <div class=\"hot_hscroll hot_hscroll1\" id = \'list1\'>            <script id=\"indexList1\" type=\"text/html\">                <ul>                {{each recommend_goods as value i}}                  <li>                    <a href=\"\">                      <img src=\"{{value.goods_image}}\" alt=\"\">                      <span>{{value.goods_name}}</span>                    </a>                    <div>                      <i>￥</i>                      <b>{{value.goods_price}}</b>                    </div>                  </li>                {{/each}}                </ul>            </script>        </div>      </div>    </main>  </section>  <footer id = \"index-footer\">     </footer></div>"

/***/ },
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


/***/ }
/******/ ]);