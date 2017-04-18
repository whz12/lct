<?php
  include 'WechatJssdk.class.php';
  $appid = "wxe6dc58a3b92aae61";
  $appsecret = "620813b7d915ad73dc46b9bc9529ac1d";
  $jssdk = new WechatJssdk($appid,$appsecret);
  $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./scripts/libs/swiper.min.css">
  <link rel="stylesheet" href="./style/app.css">
  <title>乐村淘</title>
</head>
<body>
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

  <script src="./scripts/libs/zepto.min.js"></script>
  <script src="./scripts/libs/iscroll.js"></script>
  <script src="./scripts/libs/template.js"></script>
  <script src="./scripts/libs/swiper.min.js"></script>
  <script src="./scripts/app.js"></script>
</body>
</html>
