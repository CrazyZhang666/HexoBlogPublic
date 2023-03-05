window.onload = function () {
    if (typeof (killads) == 'undefined') {
        Swal.fire({
            icon: 'warning',
            title: '广告被屏蔽',
            html: '救救孩子吧，检测到您使用了广告屏蔽插件，建议您把广告屏蔽插件关闭或者添加本站为白名单即可。<br/><br/>你可以直接关闭本弹窗，假装没看见，没有任何影响(。・∀・)ノ',
            showDenyButton: true,
            confirmButtonText: '😋 下次一定',
            confirmButtonColor: '#EBAA2A',
            denyButtonText: '😘 点我了解如何解除广告屏蔽',
            denyButtonColor: '#0984E3',
        }).then((result) => {
            if (result.isDenied) {
                window.location.assign("https://crazyzhang.cn/gta5/goog.html");
            }
        })
    }
}
