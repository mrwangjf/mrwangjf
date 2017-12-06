(function(){
  $('.act2').on('touchstart',function(){
    $(this).removeClass('act1');
    $('.act3').addClass('act1');
    $('.footer').css('display','flex')

  })
  $('.circu').on('touchstart',function(){
    $(this).addClass('active')
  })
  $('.act3').on('touchstart',function(){
    $(this).removeClass('act1');
    $('.act2').addClass('act1');
    $('.footer').css('display', 'none')
    
  })
}())