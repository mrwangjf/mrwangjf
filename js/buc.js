;(function(){
    //获取对应元素
    var buclink = document.querySelectorAll('.foot-link')[2];
    var bucFootFilex = document.querySelector('.buc-foot-filex');
    var bucfilexDox = document.querySelector('.filex-box');
    var bucfilexDoxError = document.querySelector('.filex-box-error');
    var bucOptionError = document.querySelector('.buc-option-error');
    var bucOptionDetermine = document.querySelector('.buc-option-Determine');
    //点击显示
    var t = null;
    function geTouch(element,element2) {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
    function getTouchstart(element,element2){
        element.style.display = 'block';
        element2.style.display = 'block';
    }
    buclink.addEventListener('touchstart',function (){
        clearTimeout(t);
        getTouchstart(bucFootFilex, bucfilexDox);
    })
    //点击消失
    bucOptionError.addEventListener('touchstart', function () {
        geTouch(bucFootFilex, bucfilexDox)
        clearTimeout(t)
    })
    bucOptionDetermine.addEventListener('touchstart', function (){
        clearTimeout(t)
        geTouch(bucFootFilex, bucfilexDox);
        t = setTimeout(function () {
            bucfilexDoxError.style.display = 'block';
            setTimeout(function () {
                bucfilexDoxError.style.display = 'none';
            }, 2000)
        }, 2000)
    })
}())
;(function () {
    $(".cart-top .menu").on("touchstart", function () {
        $(this).toggleClass('active');
        $(".top-nav").toggleClass("active");
    })
    $(".top-nav").on("click", "a", function () {
        var indx = $(this).index();
        $('.top-nav').children().removeClass('active').eq(indx).addClass('active');
    })
}())
;(function(){
    //返回顶部
    function getSrcoll(perate,obj){
        var t = null;
        $(window).on('scroll',function(){
            var top = $(this).scrollTop();
            if(top > 100){
                clearTimeout(t)
                perate.css("display",'block')
            }else{
                clearTimeout(t)
                t = setTimeout(function(){
                    perate.css("display", 'none')                
                },500)
            }
        })
        obj.on('touchstart',function(){
            $("html,body").scrollTop(0);
        })
    }
    getSrcoll($('.buc-scroll-dip'),$('.buc-scroll'))
}())
;(function(){
    //删除app下载
    $('.download-error').on('touchstart',function(){
        $(this).parents('.buc-download').fadeOut(500);
    })
}())