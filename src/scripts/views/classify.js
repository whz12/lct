var classifyTpl = require('../tpls/classify.string')
var footerTpl = require('../tpls/footer.string')
var utilCommon = require('../utils/util.common.js')

//页面渲染
utilCommon.render(classifyTpl)
$('#classify-footer').html(footerTpl)

//设置样式；
utilCommon.setActive($('#classify-footer li'))

//二级菜单
utilCommon.secondaryMenu($('.left_menu li'))
