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