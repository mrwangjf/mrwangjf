;(function(){
    function lbsw(obj) {
        new Swiper(obj + '.swiper-container', {
            slidesPerView: 5,            
        })
    }
    lbsw(".nav")   
    function swiperHd(obj){
        new Swiper(obj+".swiper-container", {
            slidesPerView: 3.5,
            spaceBetween: 0,
        })
    }
    swiperHd(".m-buy")
    
}())
