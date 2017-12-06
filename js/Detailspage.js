; (function () {
    //滑动到对应添加的fixed
    $(window).on('scroll',function(){
        var Top = $(this).scrollTop();
        var Height = $('.buc-download').height();
        if (Top > Height){
            $('.head-nav').addClass('hd-nav-act')
            $('.Det-bnner').addClass('Det-bnner-act')
        }else{
            $('.head-nav').removeClass('hd-nav-act')
            $('.Det-bnner').removeClass('Det-bnner-act')
        }
    })
}())
;(function () {
    //点击显示隐藏框
    $(".hd-nav-foor").on('touchstart',function(){
        $('.hd-nav-type').fadeToggle(200)
    })
    $(".head-nav").on('touchstart',function(e){
        e.stopPropagation()
    })
    $(".hd-nav-type").on('touchstart',function(e){
        e.stopPropagation()
    })
    $(document).on('touchstart',function(e){
        $('.hd-nav-type').fadeOut(200)
    })
}())
;(function(){
    //地址信息
    $('.info-sddr').on('touchstart',function(){
        $('.Det-addr-pot').fadeIn(100).children('.addr-list').animate({
            'left':'20%'
        },200)
        $('body').addClass('body-ov')
    })
    $('.addr-Return').on('touchstart',function(){
        $(this).parents('.addr-list').fadeIn(100).css({
            'left':'100%'
        }).parents('.Det-addr-pot').fadeOut(100)
        $('body').removeClass('body-ov')
    })
    //点击获取text
    function getComputedText(obj,Childl,element,slbi,Cls){
        var el = element;
        var cl = Cls ? Cls : 'addr-item-idx'
        obj.on('touchstart',Childl,function(){
            var _this = $(this).index();
            $(Childl).removeClass('province-info-avt').eq(_this).addClass('province-info-avt')
            var THIS = $(this)
            el.text(THIS.text())
            THIS.parent().removeClass(cl)
            THIS.parent().siblings(slbi).addClass(cl)
        })
        var ChildYI = obj.children().eq(0)
        ChildYI.on('touchstart',function(){
            var _this = $(this).parent().index()
            // console.log($(this).parent().removeClass(cl).siblings().eq(_this - 1))
            $(this).parent().removeClass(cl).siblings().eq(_this - 1).addClass(cl)
        })

    }
    getComputedText($('.addr-item'),'.province-info',$('.addrprovince'),'.addr-item-city')
    getComputedText($('.addr-item-city'),'.province-info',$('.addrcity'),'.addr-item2-county')
    getComputedText($('.addr-item2-county'),'.province-info',$('.addrcounty'))
  

}())
;(function(){
    //banner(轮播)
        //获取设备宽度
        var WIDTH = document.documentElement.clientWidth;
        //找到对应的要轮播的父元素
        var ul = document.querySelector('.Det-bnner .bnner-box')
        //找到到要轮播的元素
        var lis = ul.querySelectorAll('.Det-item');     
        //计算长度
        var LI_LENGTH = lis.length;
        

        //克隆节点(第一个)
        var fLi = lis[0].cloneNode(true);
        //克隆节点（最后一个）
        var lLi= lis[LI_LENGTH -1].cloneNode(true);
        //将其添加到页面中（将第一个添加到最后面）
        ul.appendChild(fLi);
        //将其添加到页面中（将最后一个添加到第一个前面 添加元素 到第几个）
        ul.insertBefore(lLi,lis[0])


        //生成指示器（节点）
            //这是找到要生成的指示器的父元素（ul）
            var dot = document.querySelector('.bnner-cator');
            //这是生成文档碎片（这是性能更好）
            var fr = document.createDocumentFragment();
            //循环对应生成节点的元素(下标)
            for (var i = 0; i < LI_LENGTH;i++){
                //生成节点
                var cator_itme = document.createElement('li');
                //给节点添加Class类名
                cator_itme.classList.add('cator-item')
                //让其下标小于等于 上面banner图的length
                cator_itme.index = i
                //当i等于 index的时候 在添加一个类名
                if (i == 0) {
                    //添加一个类名 classList 是一个多样化的Class闲着器
                    cator_itme.classList.add('cator-item-act');
                }
                //将节点添加到文档碎片中
                fr.appendChild(cator_itme);
            }
            //将文档碎片添加到元素的父元素
            dot.appendChild(fr);

            var dots = dot.children;
            //获取到指示器的数组


        LI_LENGTH = lis.length+2;
        //获取到上面的li的length长度 +2 是因为他只会在添加两个节点
        ul.style.width = LI_LENGTH * WIDTH +"px";
        //设置轮播图的父元素的宽度
        
        var index = 1;
        // 这是赋予一个值（为了让其轮播的第一张图之前面）
        var x = 0 , 
        tX = -WIDTH * index, 
        //这是让其他的屏幕宽度*个数
        startX, 
        //这些都是先声明的空函数
        endX;
        //这些都是先声明的空函数


        ul.style.transform = "translate3d("+tX+"px,0,0)";
        //这是添加是为了让其第一张图显示

        ul.addEventListener('touchstart',function(e){
            //这是给外面的banner的父元素添加事件
            this.classList.remove("transition");
            //点击时先删除这个类名

            //这是设置轮播的方向
            if(index == 0){
                //小于或等于0 的时候让他等于length - 2
                index = LI_LENGTH-2;
            }
            if(index == LI_LENGTH-1){
                //这是小于 或等于倒数第二个的时候就让他等于整数第二个
                index = 1;
            }
            changePage(index,this)
            //调用对应的函数
            var touch = e.changedTouches[0];
            //这是获取到点击元素的集合
            startX = touch.clientX;
            //是找到对应的点击的那个点
            x = startX - tX;
            //将对应的那个点获取到
        })
        ul.addEventListener('touchmove', function (e) {
            //这是绑定移动事件
            var touch = e.changedTouches[0];
            //这是获取到点击元素的集合
            tX = touch.clientX - x;
            //只是找到对应的点击的那个点
            this.style.transform = "translate3d(" + tX + "px,0,0)"
            //这是设置他的移动的距离
        })

        ul.addEventListener('touchend', function (e) {
            //这是松开触摸
            this.classList.add('transition');
            //这是添加对应的类名
            var touch = e.changedTouches[0];
            //是获取到点击元素的集合
            endX = touch.clientX;
            //松开时获取到对应的那个点
            if (endX - startX > WIDTH / 3) {
                //判断方向 松开的那个点 减去点击的那个点 >大于屏幕的宽度三分之一
                if (index > 0) {
                    //判断有下标的时候才执行
                    index--;
                }
            } else if (startX - endX > WIDTH / 3) {
                //判断方向 点击的那个点 减去松开的那个点 >大于屏幕的宽度三分之一
                if (index < LI_LENGTH - 1) {
                    //判断有下标的时候才执行
                    index++;
                }
            }
            changePage(index, this)
            //调用对应的函数
        })

        function changePage(i, obj) {
            changeDot(i)
            //这是设置对应的指示器
            tX = -i * WIDTH;
            //这是计算出对应的数值
            obj.style.transform = "translate3d(" + tX + "px,0,0)";
            //让其对应的动画的等于这个数值
        }

        function changeDot(i) {
            var active = document.querySelector('.cator-item-act');
            //这是找到刚开始有这个类名的元素
            active.classList.remove('cator-item-act');
            //让其先删除这个元素
            if (i == LI_LENGTH - 1) {
                i = 1;
            }
 
            if (i == 0) {
                i = LI_LENGTH - 2;
            }

            dots[i - 1].classList.add('cator-item-act');
            //这是给对应的那个下标加上这个名字
        }
}())
