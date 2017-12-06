;
(function ($) {
    $(".cart-top .menu").on("click", function () {
        $(this).toggleClass('active');
        $('body').toggleClass('active')
        $('.c-content').toggleClass('c-active');
        $(".top-nav").toggleClass("active");

    })
    $(".top-nav").on("click", "a", function () {
        var indx = $(this).index();
        $('.top-nav').children().removeClass('active').eq(indx).addClass('active');
    })

    //tab切换，点击左边，右边出现
    $(".classify").on('click', "li", function () {
        $('li').removeClass("current").eq($(this).index()).addClass('current');
        $('.c-right .wrapper').removeClass('hid-cur').eq($(this).index()).addClass('hid-cur');      
    })

   $('.classify').on('touchstart','li',function(){
         //左边点击滑动
        var index = $(this).index();
        var LI_HEIGHT = $('li').height();
        var UL_WIDTH = LI_HEIGHT*(index+1);
        console.log(UL_WIDTH)
        
        $('#c-wrapper').scrollTop(index*LI_HEIGHT)
        
   })



}(Zepto))