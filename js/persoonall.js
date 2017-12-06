(function(){
    $(".Centr-list").on("touchstart",'.Centr-list-nav',function(){
        var  _this = $(this);
        var  index = $(this).index();
        $(".Centr-list-nav").siblings().removeClass('Centr-list-active')
        $(".Centr-list-nav").eq(index).addClass('Centr-list-active')
        
        // $(".Centr-ted-type").attr("class", "Centr-ted-type Centr-type-active").removeClass('Centr-type-active').eq(index).addClass('Centr-type-active')

        $(".Centr-ted-type").attr("class", "Centr-ted-type Centr-type-active").animate({
            "margin-right":"-12rem",
            'opacity':'0',
            // 'display':'none'
        },500).css('display','none').eq(index).animate({
            "margin-left": "0rem",
            "margin-right": "0rem",
        },100,function(){
            $(this).fadeIn()
        })

       // $(".Centr-ted-type").siblings().removeClass('Centr-type-active').fadeOut();
        // $(".Centr-ted-type").eq(index).addClass('Centr-type-active').fadeIn()
    })
}())