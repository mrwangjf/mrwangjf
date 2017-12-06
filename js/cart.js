; (function () {
    $('.select #checkall').on('touchend', function () {
        // alert(1);
        $(this).toggleClass('active').next().toggleClass('active');
    })
}())
;(function(){
    $('.cp-radio .goods-check').on('touchend',function(){
        $(this).toggleClass('active').next().toggleClass('active');        
    })
}())
;(function(){
    $('.goods-choice .goods-check').on("touchend",function(){
        $(this).toggleClass('active').next().toggleClass('active');        
    })
}())
;(function(){
    $(window).on("scroll",function(e){
        var top = $(this).scrollTop();
        if(top>0){
            $(".backTop").addClass('active');
        }else {
            $(".backTop").removeClass('active');
        }
    })
    $('.backTop').on('touchend',function(){
        $(window).scrollTop(0);
    })
}())
;(function (){
    var num = 1;
    var arr = [];
    var sprice,tprice,flag = 1;
    if (num > 1) {
        $('.goods-num .minus').css('opacity', '1');
    } else {
        $('.goods-num .minus').css('opacity', '0.3');
    }
    $('.shop-list .shop-item').on('touchstart','.add',function(){
        num = $(this).prev().text();
        var goods = {
            flag: 1,
            price: 1,
            tprice: 1,
            num: 1,
            diraction:1
        }
        goods['diraction'] = 1;
        calculate.call(this,goods);
    })
    $('.shop-list .shop-item').on('touchend','.add', function () {
        $(this).parent().children('.minus').css('opacity', '1');                
        $(this).prev().text(+num + 1);
    })
    $('.shop-list .shop-item').on('touchstart','.minus', function () {
        num = $(this).next().text();
    })
    $('.shop-list .shop-item').on('touchend','.minus', function () {
        if(num>2){
            $(this).next().text(+num - 1);  
           $(this).parent().children('.minus').css('opacity', '1');                              
        }else if(num==2){
            $(this).next().text(+num - 1);              
           $(this).parent().children('.minus').css('opacity', '0.3');
        }
    })
    function calculate(obj){
        if (!$(this).parents('.shop-item').find('.sign').hasClass('active')){
            obj['flag'] = 0;
        }else{
            obj['flag'] = 1;
        }
        obj["price"] = $(this).parents('.goods-price').find('.int').text() +
            $(this).parents('.goods-price').find('.fl').text();
        obj['num'] = +$(this).prev().text() + obj['diraction']*1;
        obj['tprice'] = obj['flag'] * obj['price'] * obj['num']
        console.log(obj);
        return obj['flag']*obj['price']*obj['num'];
      
    }
    // 由于每一个shop-item都有相同的类名和样式，所以再去选择，计算元素的样式时，
    // 不能直接用类名去选择，只能用当前被操作的元素，去寻找其他的元素。这里面的this，
    // 以及通过this获取到的其他元素就是例子
}())