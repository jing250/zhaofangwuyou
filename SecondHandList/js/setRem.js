
(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 10;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();



// 轮播图 部分
var mySwiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',


    },

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})
