; (function () {
  var swiper1 = new Swiper('.shop .swiper-container', {
    pagination: '.shop .swiper-pagination',
    slidesPerView: 3,
    spaceBetween: 8,
    slidesPerGroup: 3,
    autoplay: 2000,
    loop: true,
    paginationClickable: true,    
    loopFillGroupWithBlank: false,
  })
}())

;(function(){

  //轮播

  var swiper = new Swiper('.banner-box .swiper-container', {
    pagination: '.banner-box .swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true
  });
}())
