(function () {
  //返回顶部
  function getSrcoll(perate, obj) {
    $(window).on('scroll', function () {
      var top = $(this).scrollTop();
      if (top > 10) {
        perate.css("display", 'block')
      } else {
        perate.css("display", 'none')
      }
    })
    obj.on('touchstart', function () {
      $("html,body").scrollTop(0);
    })
  }
  getSrcoll($('.buc-scroll-dip'), $('.buc-scroll'))
}());

$(function () {
    //向上的轮播
    var myswiper1 = new Swiper('.hot-box .swiper-container', {
      pagination: '.hot-box .swiper-pagination',
       mousewheelControl: true, 
      direction: 'vertical',//设置滑动方向垂直
      autoplay: 2500,
      loop: true,
      autoplayDisableOnInteraction: false
    });

  $('.buying').on('touchstart', '.five', function () {
    var index = $(this).index();
    $('.five').removeClass('active-list').eq(index).addClass('active-list');
    $('.content-box .img-mbox').removeClass('img-abox').eq(index).addClass('img-abox')

  })
  /* 图片区Tab切换 */
  $('.subbtn1').on('touchstart', 'li', function () {
    $('.subbtn1 li').children().removeClass('active-a').eq($(this).index()).addClass('active-a');
    $('.shops1').removeClass('shop-active').eq($(this).index()).addClass('shop-active')
  })
  /* 图片区Tab切换 2*/
  $('.subbtn2').on('touchstart', 'li', function () {
    $('.subbtn2 li').children().removeClass('active-a').eq($(this).index()).addClass('active-a');
    $('.shops2').removeClass('shop-active').eq($(this).index()).addClass('shop-active')
  })
  //轮播
  var swiper = new Swiper('.Carousel .swiper-container', {
    pagination: '.Carousel .swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true
  });
  //滑动
  var myswiper = new Swiper('.content-box .img-a', {
    slidesPerView: 3.5,
    spaceBetween: 0
  });
 
  //当滚动条卷起的高度等于scrolla时让subnav1固定定位到顶部
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var scrolla = $('.scrolla').height();
    var scrollb = $('.scrollb').height();
    var c = scrolla + scrollb
    if (scrollTop >= scrolla && scrollTop <= c) {
      $('.subnava').addClass('fixed')
    } else {
      $('.subnava').removeClass('fixed')

    }
    if (scrollTop >= c) {
      $('.subnav2').addClass('fixed')
    } else {
      $('.subnav2').removeClass('fixed')

    }
  })
  //点击导航向上箭头让header-fixed-box出现在顶部
  $('.iconk').on('touchstart',function(){ 
    $('.header-fixed-box').show()
    $(this).parents('.subnav1').hide()
  })
  $('.iconnft').on('touchstart',function(e){
    $(this).parents('.header-fixed-box').hide()
    $('.subnav1').show(function(){
      // $(this).children('.btn-box').css('transform', 'rotate(180deg)')
    })
  })
  $('.bg').on('touchstart',function(){
    $(this).parents('.header-fixed-box').hide()
  })
}())