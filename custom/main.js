window.onload = function () {
    if (typeof (killads) == 'undefined') {
        Swal.fire({
            icon: 'warning',
            title: '广告被屏蔽',
            text: '谷歌广告是维持小助手网站正常运转的唯一收入来源，检测到您使用了广告屏蔽插件，建议您把广告屏蔽插件关闭或者添加本站为白名单，感谢你的支持',
            showDenyButton: true,
            confirmButtonText: '😭 下次一定',
            confirmButtonColor: '#EBAA2A',
            denyButtonText: '😘 点我了解如何解除广告屏蔽',
            denyButtonColor: '#0984E3',
        }).then((result) => {
            if (result.isDenied) {
                window.location.assign("https://crazyzhang.cn/gta5/googleads.html");
            }
        })
    }
}
