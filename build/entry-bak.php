<?php
  include 'WechatJssdk.class.php';
  $appid = "wx2c1e562826be84b3";
  $appsecret = "932523ef893c39512e6ab4dc3472226c";
  $jssdk = new WechatJssdk($appid,$appsecret);
  $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="//res.wx.qq.com/open/libs/weui/1.0.0/weui.css">
    <link rel="stylesheet" href="/weui/styles/app.css">
    <script>
        document.ontouchmove = function(e) {
            if (e.target.tagName.toUpperCase() !== 'IFRAME') {
                e.preventDefault();
            }
        };
    </script>
    <title>微信公众号</title>
</head>

<body>
  abc
  <!-- <div class="weui-tab">
    <div class="weui-tab__panel" id="tab-panel">
      WeUI 与 JSSDK 开发
    </div>
    <div class="weui-tabbar" id="tab-bar">
        <a href="#" class="weui-tabbar__item weui-bar__item_on">
            <i class="weui-icon-success weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">扫一扫</p>
        </a>
        <a href="#" class="weui-tabbar__item">
            <i class="weui-icon-info weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">图像接口</p>
        </a>
        <a href="#" class="weui-tabbar__item">
            <i class="weui-icon-search weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">地理位置</p>
        </a>
        <a href="#" class="weui-tabbar__item">
            <i class="weui-icon-waiting weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">网络状态</p>
        </a>
        <a href="#" class="weui-tabbar__item">
            <i class="weui-icon-warn weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">界面操作</p>
        </a>
    </div>
  </div> -->

  <!-- <script type="text/html" id="tpl-share">
    <button class="weui-btn weui-btn_mini weui-btn_primary">分享到朋友圈</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">分享给朋友</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">分享到QQ</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">分享到腾讯微博</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">分享到QQ空间</button>
  </script> -->

  <!-- <script type="text/html" id="tpl-scan">
    <button class="weui-btn weui-btn_mini weui-btn_primary">扫一扫</button>
  </script>

  <script type="text/html" id="tpl-photo">
    <button class="weui-btn weui-btn_mini weui-btn_primary">拍照或从手机相册中选图</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">预览图片</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">上传图片</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">下载图片</button>
    <div id="photo1"><img src="http://placehold.it/200x200"></div>
  </script>

  <script type="text/html" id="tpl-location">
    <button class="weui-btn weui-btn_mini weui-btn_primary">使用微信内置地图查看位置</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">获取地理位置</button>
  </script>

  <script type="text/html" id="tpl-network">
    <button class="weui-btn weui-btn_mini weui-btn_primary">获取网络状态</button>
  </script>

  <script type="text/html" id="tpl-ui">
    <button class="weui-btn weui-btn_mini weui-btn_primary">隐藏右上角菜单</button>
  </script> -->

  <!-- <script type="text/html" id="tpl-audio">
    <button class="weui-btn weui-btn_mini weui-btn_primary">开始录音</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">停止录音</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">播放语音</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">暂停播放</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">停止播放</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">上传语音</button>
    <button class="weui-btn weui-btn_mini weui-btn_primary">下载语音</button>
  </script> -->

  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
    wx.config({
      debug: false,
      appId: "<?php echo $signPackage['appId']; ?>",
      timestamp: '<?php echo $signPackage["timestamp"]; ?>',
      nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
      signature: '<?php echo $signPackage["signature"]; ?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode'
      ]
    });
  </script>
  <!-- <script src="/weui/scripts/zepto.min.js"></script>
  <script src="/weui/scripts/app.js"></script> -->
</body>

</html>
