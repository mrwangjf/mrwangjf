;(function($){
    $(".m-city").on("touchstart","li",function(){
        var citytext = $(this).find(".J_city").text();
        // console.log(citytext)
        var icon = $('<i class="iconfont icon-selected"></i>');
        var font =$(".cur");
        if(this.className == "pro"){
            $(this).append(icon).addClass("cur")
            font.removeClass("cur").find("i").remove();
        }
    })
    
}(Zepto))