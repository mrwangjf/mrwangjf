;(function(){
    var fn = new Swiper('#cow-banner .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3500,
        loop:true,
        autoplayDisableOnInteraction: false
    })
   
    // var mswidth = $(".swiper-wrapper");
    // var miwidth = $(".cow-container .cow-slide");
    // var mwidth =miwidth[0].clientWidth;
    // var mlength = miwidth.length;
    // var Width = mwidth * (miwidth.length - 1);
    // mswidth.width(Width);
    // console.log(mswidth.width())
     new Swiper('.cow-moudel .swiper-container', {
        paginationClickable: true,
        slidesPerView:3.5,
        spaceBetween: 0,
    })
}())
;(function(){
    //返回顶部
    function getSrcoll(perate,obj){
        $(window).on('scroll',function(){
            var top = $(this).scrollTop();
            if(top > 100){
                perate.css("display",'block')
            }else{
                perate.css("display",'none')                
            }
        })
        obj.on('touchstart',function(){
            $("html,body").scrollTop(0);
        })
    }
    getSrcoll($('.buc-scroll-dip'),$('.buc-scroll'))
}())


// 充值
;(function(){
    $(".cow-tabs").on('click', ".cow-tab", function () {
        $('.cow-tab').removeClass("active").eq($(this).index()).addClass('active');
        $('.cow-tab_l .cow-first').removeClass('hid-cow').eq($(this).index()).addClass('hid-cow');      
    })
    // $(".cow-tab-first").on('click', ".cow-tab-list", function () {
    //     $('.cow-tab-list').removeClass("cow-tab-list1").eq($(this).index()).addClass('cow-tab-list1');
    // })
    // $(".cow-last .cow-tab-last").on('click', ".cow-tab-lastList", function () {
    //     $('.cow-tab-lastList').removeClass("cow-tab-list2").eq($(this).index()).addClass('cow-tab-list2');
    // })

    $('.cow-tab_l').on('touchstart','.cow-tab-list',function(){
        var _this = $(this).index();
        var ParentL = $(this).parent().children()      
        ParentL.removeClass('cow-tab-list1').eq(_this).addClass('cow-tab-list1')
    })
}())  