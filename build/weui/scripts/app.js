$(function() {
    // 接口测试
    wx.ready(function() {
        wx.checkJsApi({
            jsApiList: [
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
            ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function(res) {
                // alert(JSON.stringify(res));
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });
    });

    // 分享接口
    // $('#tab-bar a').eq(0).on('touchstart', function() {
    //     $('#tab-panel').html($('#tpl-share').html());
    //
    //     $('#tab-panel button').eq(0).on('touchstart', function() {
    //         wx.ready(function() {
    //             wx.onMenuShareTimeline({
    //                 title: '分享到朋友圈测试', // 分享标题
    //                 link: 'http://felixlu.bceapp.com', // 分享链接
    //                 imgUrl: 'http://a.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=17b8cc91050828387c00d446d9f0c264/37d12f2eb9389b507f0587dc8735e5dde6116e41.jpg', // 分享图标
    //                 success: function() {
    //                     // 用户确认分享后执行的回调函数
    //                     alert(0);
    //                 },
    //                 cancel: function() {
    //                     // 用户取消分享后执行的回调函数
    //                     alert(1);
    //                 }
    //             });
    //         });
    //     });
    //
    // });

    // 扫描二维码
    $('#tab-bar a').eq(0).on('touchstart', function() {
        $('#tab-panel').html($('#tpl-scan').html());
        $('#tab-panel button').eq(0).on('touchstart', function() {
            wx.ready(function() {
                wx.scanQRCode({
                    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function(res) {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    }
                });
            });
        });
    });


    // 图像接口
    $('#tab-bar a').eq(1).on('touchstart', function() {
        $('#tab-panel').html($('#tpl-photo').html());

        // 拍照或从手机相册中选图接口
        $('#tab-panel button').eq(0).on('touchstart', function() {
            wx.ready(function() {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function(res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        $('#photo1 img').attr('src', localIds);
                    }
                });
            })
        });

    });

    // 语音接口
    // $('#tab-bar a').eq(2).on('touchstart', function() {
    //     $('#tab-panel').html($('#tpl-audio').html());
    //
    //     var localId;
    //
    //     // 开始录音接口
    //     $('#tab-panel button').eq(0).on('touchstart', function() {
    //         wx.ready(function() {
    //             wx.startRecord();
    //
    //             // 监听录音自动停止接口
    //             wx.onVoiceRecordEnd({
    //                 // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    //                 complete: function(res) {
    //                     localId = res.localId;
    //                     alert(localId);
    //                 }
    //             });
    //         })
    //     });
    //
    //     // 停止录音接口
    //     $('#tab-panel button').eq(1).on('touchstart', function() {
    //         wx.ready(function() {
    //             wx.stopRecord({
    //                 success: function(res) {
    //                     localId = res.localId;
    //                 }
    //             });
    //         });
    //     });
    //
    //     // 播放语音接口
    //     $('#tab-panel button').eq(2).on('touchstart', function() {
    //         wx.ready(function() {
    //             alert(localId);
    //             wx.playVoice({
    //                 localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
    //             });
    //
    //             // 监听语音播放完毕接口
    //             wx.onVoicePlayEnd({
    //                 success: function(res) {
    //                     localId = res.localId; // 返回音频的本地ID
    //                 }
    //             });
    //         });
    //     });
    //
    //     // 暂停播放接口
    //     $('#tab-panel button').eq(3).on('touchstart', function() {
    //         wx.ready(function() {
    //             wx.pauseVoice({
    //                 localId: localId // 需要暂停的音频的本地ID，由stopRecord接口获得
    //             });
    //         });
    //     });
    //
    //     // 停止播放接口
    //     $('#tab-panel button').eq(4).on('touchstart', function() {
    //         wx.ready(function() {
    //             wx.stopVoice({
    //                 localId: localId // 需要停止的音频的本地ID，由stopRecord接口获得
    //             });
    //         });
    //     });
    // });

    // 地理位置
    $('#tab-bar a').eq(2).on('touchstart', function() {
        $('#tab-panel').html($('#tpl-location').html());

        // 使用微信内置地图查看位置
        $('#tab-panel button').eq(0).on('touchstart', function() {
            wx.ready(function() {
                wx.openLocation({
                    latitude: 0, // 纬度，浮点数，范围为90 ~ -90
                    longitude: 0, // 经度，浮点数，范围为180 ~ -180。
                    name: '锡林浩特', // 位置名
                    address: '', // 地址详情说明
                    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                });
            });
        });

        // 获取地理位置
        $('#tab-panel button').eq(1).on('touchstart', function() {
            wx.ready(function() {
                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function(res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        wx.openLocation({
                            latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                            longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                            name: '', // 位置名
                            address: '', // 地址详情说明
                            scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                        });
                    }
                });
            });
        });
    });

    // 获取网络状态接口
    $('#tab-bar a').eq(3).on('touchstart', function() {
        $('#tab-panel').html($('#tpl-network').html());

        $('#tab-panel button').eq(0).on('touchstart', function() {
            wx.ready(function() {
                wx.getNetworkType({
                    success: function(res) {
                        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                        alert(networkType);
                    }
                });
            });
        });
    });

    // 界面操作
    $('#tab-bar a').eq(4).on('touchstart', function() {
        $('#tab-panel').html($('#tpl-ui').html());

        $('#tab-panel button').eq(0).on('touchstart', function() {
            wx.ready(function() {
                wx.hideOptionMenu();
            });
        });
    });
});
