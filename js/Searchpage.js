//筛选
;(function(){
    //菜单显示
        $('.seach-font').on('touchstart',function(){
            $('.seach-screen').fadeIn(100).children('.screen-chlid').animate({
                "left":'20%'
            }, 200).find('.tete').animate({
                'left':'20%'
            },200);
            // $('body').addClass('body')
        })
        $('.screen-te').on('touchstart',function(){
            $(this).parents('.seach-screen').fadeOut().find('.screen-chlid').css('left', '100%').children('.screen-te').css('left','100%')
            // $('body').removeClass('body')
        })
}())
//导航事件
;(function(){
    //loading显示
        var loadIng = $('.duc-loading')
    //判断是否有值(封装)
        function getIsClass(obj,type){
            if (!obj.is('.' + type)) {
                obj.addClass(type)
            } else {
                obj.removeClass(type)
            }
        }
    //显示公共样式封装（文字变色）
        function getiSactive(obj,child1,active) {
            var active = active ? active : 'type-font-active';
            var _this = obj.index();
            $(child1).removeClass(active).eq(_this).addClass(active);
        }
    //点击显示(type-nav变色)
        $('.type-nav-box').on('touchstart', '.type-nav-list', function () {
            getiSactive($(this), '.type-nav-list')
            if (this != $('#type-nav-list1')[0]){
                $('.type-list-child').fadeOut(100);
                $('body').removeClass('body')
                $('#type-nav-list1').children('.icon-f11').addClass('type-icon-active')
                $('#type-nav-list1').children('.icon-xiajiantou').removeClass('type-icon-active')
            }
        })
    //点击显示(选项变色)
        $('.seach-option').on('touchstart','.option-list', function () {  
            getiSactive($(this), '.option-list')
            $('body').addClass('body')
            $('.menu-list-child').css('display','block')
            getiSactive($(this), '.menu-list','menu-li-ac') 
        })
    //显示公共分封装样式
        function getISBlock(obj, icon, icon2, item){
            var item1 = item ? item : 'type-icon-active'
            var ico1 = icon ? icon : '.icon-f11'
            var ico2 = icon2 ? icon2 :'.icon-xiajiantou'
            var iconfont = obj.children(ico1);
            var iconfont2 = obj.children(ico2)
            if (iconfont.is('.' + item1)) {
                iconfont.removeClass(item1)
                iconfont2.addClass(item1)
            } else {
                iconfont.addClass(item1)
                iconfont2.removeClass(item1)
            }
        }
    //显示对应的应用（综合显示）
        $('#type-nav-list1').on('touchstart', function(){
            // e.stopPropagetion();
            var _this = $(this);
            var child = $('.type-list-child');
            var icon = _this.children('.icon-f11');
            getISBlock(_this)
            if (icon.is('.type-icon-active')){
                child.fadeOut(200);
            }else{
                child.fadeIn(200);
                // $('body').addClass('body')
            }
            $('.menu-list-child').css('display','none')

        })
    // 判断价格
        $('#type-nav-list2').on('touchstart', function () {
            getISBlock($(this))
        })
    //点击渲染text
        $('.search-nav-blick').on('touchstart','.list-font-blick',function(){
            var _this = $(this).index();
            var font_text1 = $(".type-nav-box .font-text1")
            var  span1 = $('.list-font-blick').eq(_this).children('span').eq(0).text()
            var  type_active = 'type-icon-active'
            font_text1.text(span1);
            $('.list-font-blick').removeClass('blick-acrive').eq(_this).addClass('blick-acrive').parents('.type-list-child').fadeOut(200);
            font_text1.siblings('.icon-xiajiantou').removeClass(type_active)
            font_text1.siblings('.icon-f11').addClass(type_active)
            $('body').removeClass('body')
            
        })
    
    //点击变换显示方式
        $('.type-nav-last').on('touchstart', function () {
            getISBlock($(this), '.icon-viewgallery','.icon-viewlist');
            getIsClass($('.list_wrapper'),'list_wrapper-active');
        })
    //点击变换背景图片（促销）
    $('#type-nav-list3').on('touchstart', function () {
        var type_bg = $(this).children('.type-bg')
        getIsClass($(this), 'type-font-active')
        getIsClass(type_bg, 'type-bg-avtive')
    })
    //点击变化字体（自营）
    $('.option-list1').on('touchstart', function () {
        getIsClass($(this), 'type-font-active')
    })
    
}())
//菜单事件
;(function(){
    //点击菜单（内容）
    $('.menu-box').on('touchstart', '.menu-item', function () {
        var mteb = $(this).parent().children();
        if (this != mteb[0]) {
            mteb.eq(0).removeClass('menu-item-active')
            $(this).addClass('menu-item-active')
        } else {
            mteb.removeClass('menu-item-active')
            $(this).addClass('menu-item-active');
        }
    })
    //点击重置
    $('.reset').on('touchstart', function () {
        $(".menu-item").removeClass('menu-item-active')
        $(".menu-list").each(function () {
            $(this).children().eq(0).addClass('menu-item-active');
        })
    })
    //点击确认
    $('.confirm').on('touchstart', function () {
        $(this).parents('.menu-list-child').css('display', 'none')
        $('body').removeClass('body')
    })
}())
//点击退出
;(function(){
    //点击退出
        function getError(obj, paren) {
            obj.on('touchstart', function () {
                $(this).parents(paren).fadeOut(200)
            })
        }
    // getError($('.screen-te'),'.seach-screen')
    
   
}())
;(function(){
    //点击出现（地址）
    $('.sddr').on('touchstart',function(){
        $('.screen-sddr').css('display','block','top','.8rem')
    })
    //点击回来
    $('.sddr-te').on('touchstart',function(){
        $(this).parents('.screen-sddr').css('display','none')
    })
    //点击加上
    $('.screen-sddr-box').on('touchstart','.screen-sddr-list', function () {
        var par = $(this).parent().children()
        var _this = $(this).index()
        par.removeClass('menu-sddr-active').eq(_this).addClass('menu-sddr-active')
    })
}())