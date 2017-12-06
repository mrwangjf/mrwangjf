(function () {
  //商品店铺收藏，tab切换
  $('.s-box').on('touchstart', 'a', function () {
    $('.s-box a').removeClass('active1').eq($(this).index()).addClass('active1');
    $('.pic-box').removeClass('act-content').eq($(this).index()).addClass('act-content')
  })
}());
(function () {
  //返回顶部
  function getSrcoll(perate, obj) {
    $(window).on('scroll', function () {
      var top = $(this).scrollTop();
      if (top > 10) {
        perate.show()
      } else {
        perate.hide()
      }
    })
    obj.on('touchstart', function () {
      $("html,body").scrollTop(0);
    })
  }
  getSrcoll($('.buc-scroll-dip'), $('.buc-scroll'))
}());

//如果向下拉让none-d出现
(function(){
  $startY=0,endY=0;
  $(window).on('touchstart',function(e){
    startY=e.changedTouches[0].clientY;
  })
  $(window).on('touchend', function (e) {
    endY = e.changedTouches[0].clientY;
    if(endY-startY>30){
      $('.none-d').show()
    }
  })
//滑动鼠标滚轮时让none-d出现
  document.body.onmousewheel = function (event) {
    event = event || window.event;
    console.dir(event);
    $('.none-d').show()
    
  };
}())