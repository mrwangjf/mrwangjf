(function () {
  var t = null;
  //发送消息
  function getcenter() {

    $('.content-list').append('<li class="me"><span>' + $('.keyenter ').val().trim() + '</span></li>')
    $('.keyenter').val('');

  }
  //点发送时发送
  $('.cena').on('touchstart', function () {
    clearTimeout(t)
    if ($('.keyenter').val()) {
      getcenter()
      add();
    } else {
      t = setTimeout(function () {
        $('.dist').fadeIn(2000, function () {
          $(this).fadeOut()
        })
      }, 1000);
    }

  })
  //点center键时发送
  $('.keyenter').on('keyup', function (e) {
    clearTimeout(t)

    var e = e || e.which;
    var keycode = e.keycode || e.which;
    if (keycode == 108 || keycode == 13) {
      if ($('.keyenter').val()) {
        getcenter()
        add();
      } else {
        t = setTimeout(function () {
          $('.dist').fadeIn(2000, function () {
            $(this).fadeOut()
          })
        }, 1000);
      }
    }

  })

  function add() {

    var content = document.querySelector('.content-box')
    content.scrollTop = content.scrollHeight;

  }

  //触摸icontime 右边导航出现

  $('.icontime').on('touchstart', function () {
    $('.right-navbox').show()

  })
  //触摸li时让right-navbox消失
  $('.li-item').on('touchstart', function () {
    $('.right-navbox').hide();
  })
  //触摸p时让a显示
  $('.p-show').on('touchstart', function () {
    $('.alj').show()
  })
  //触摸tetun时让左边提示框出现
   $('.retun').on('touchstart', function () {
     $('.left-tip').show(1000)
   })
    //触摸cancel时让left-tip消失
    $('.cancel').on('touchstart', function () {
      $('.left-tip').hide();
    })
}())