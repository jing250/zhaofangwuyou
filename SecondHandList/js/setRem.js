function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    // 设备的宽 最大是600px
    clientWidth = clientWidth > 600 ? 600 : clientWidth;
    var html = document.querySelector('html');

    clientWidth = clientWidth < 230 ? 230 : clientWidth;
    // console.log(clientWidth);
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px';
}

window.onload = setRem;
window.onresize = setRem;


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