;(function(){
    // var mswidth = $(".swiper-wrapper");
    // var miwidth = $(".swiper-container .swiper-slide");
    // var mwidth = miwidth[0].clientWidth;
    // var mlength = miwidth.length;
    // var Width = mwidth * miwidth.length;
    // $(".swiper-wrapper").width(Width);
    var num = 2;
    num = $('.swiper-container .active').index();
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 'auto',//这个属性本来是一个数字，可以为小数。是来规定屏幕显示几个slide
        //auto 是根据屏幕宽度显示slide的张数，可以3.4张等。
        /* freeMode: true,//自由模式
        freeModeMomentum: false,//自由模式下，能量对抗为0 */
        // centeredSlides: true,//这个属性是让初始化中默认显示的那个slide居中显示        
        // initialSlide: num,//这个属性是规定初始化下默认显示的是哪张图片，并以其为基准
    }) 
    $('.swiper-container').on('touchend','.item',function(){
        var index = $(this).index();
        $('.swiper-container').find('.item').removeClass('active').eq(index).addClass('active');
    })
}())