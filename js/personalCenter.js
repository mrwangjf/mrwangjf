(function () {
    $('.customer').on('click', function () {
        $(this).parent().hide();
        $('.oder-x').show();
    })

    $('.btnb').on('click', function () {
        $(this).parents('.oder-x').hide();
        $('.box-f').show()
    })
    //点击签到时文字换成已签到
    $('.sign').on('touchstart',function(){
        $(this).children('span').text('已签到')
    })

}())