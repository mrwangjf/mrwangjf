;(function(){         
    /* var WIDTH = document.documentElement.clientWidth;
    var sx,ex,x,tx = 0,index = 0,xx = 0;
    xx = tx;
    $('.col').on('touchstart',function(e){
        $(this).removeClass('transtion')
        var touch = e.changedTouches[0];
        sx = touch.clientX;
        x = touch.clientX -tx;
    })
    $('.col').on('touchmove',function(e){
        var touch = e.changedTouches[0];
        tx = touch.clientX - x;
        $(this).css({
            "transform":"translate3d("+tx+"px,0,0)"
        })
    })
    $('.col').on('touchend',function(e){
        var touch = e.changedTouches[0];
        ex = touch.clientX;
        x = touch.clientX - sx;
        if(ex-sx>0){
            if (xx >= 0) {
                xx = 0;
                $(this).css({
                    "transform": "translate3d(" + xx + "px,0,0)"
                }) 
            }
        }else if(sx-ex>0){
            if (xx <= -434.4) {
                xx = -434.4;
                $(this).css({
                    "transform": "translate3d(" + xx + "px,0,0)"
                }) 
            }
        } 
        // console.log(xx);
        
       
    }) */
   /*  $('.col .item').on('touchstart',function(){
        $(this).a
    }) */
    var mswidth = $(".swiper-wrapper");
    var miwidth = $(".swiper-container .swiper-slide");
    var mwidth = miwidth[0].clientWidth;
    var mlength = miwidth.length;
    var Width = mwidth * (miwidth.length - 1);
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: false,
        // grabCursor: true
    })  
}())
;(function(){
    $('.col ').on('touchend', ".item", function (e) {
        e = e || window.event;
        var index = $(this).index();
        $('.col .item').removeClass('active').eq(index).addClass('active');
        $('.join-nav .join-list').removeClass('active').eq(index).addClass('active');
        // e.stopPropagation();
    })
}())
;(function(){
    $('.join-list .cart').on('touchend',function(){
        $('.in-cart').addClass('active');
        setTimeout(function(){
            $('.in-cart').removeClass('active');
        },3000)
    })
}()) 