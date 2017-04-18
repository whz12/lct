var mineTpl = require('../tpls/mine.string')
var footerTpl = require('../tpls/footer.string')
var utilCommon = require('../utils/util.common.js')

//页面渲染

utilCommon.render(mineTpl)
$('#mine-footer').html(footerTpl)

//活动样式
utilCommon.setActive($('#mine-footer li'))