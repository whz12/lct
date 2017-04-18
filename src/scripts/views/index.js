var indexTpl = require('../tpls/index.string')
var footerTpl = require('../tpls/footer.string')
var utilCommon = require('../utils/util.common.js')

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



