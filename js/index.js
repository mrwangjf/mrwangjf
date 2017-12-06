; $(function ($) {
    //搜索框变色/返回顶部显示
    $(window).on("scroll", function () {
        var top = $(this).scrollTop();
        if (top > 0) {
            $(".header").addClass("h-ntop")
            $(".btn-top").addClass("btn-at")
        } else {
            $(".header").removeClass("h-ntop")
            $(".btn-top").removeClass("btn-at")
        }
    })
    //返回顶部
    $(".btn-top").on("touchstart", function () {
        $("body,html").scrollTop(0)
    })
// 计时器
    var hou = 6;
    var min = 0;
    var sec = 0;
    var t = null;
    var t_hou = $(".ms-t-hou");
    var t_min = $(".ms-t-min");
    var t_sec = $(".ms-t-sec");
    function time() {
        sec--;
        if(sec < 0){
            sec = 59;
            min--;
        }
        if(min < 0){
            min = 59;
            hou--;    
        }
        hou = hou<10?"0"+parseInt(hou):hou;
        sec = sec<10?"0"+parseInt(sec):sec;
        min = min<10?"0"+parseInt(min):min;
        t_hou.text(hou);
        t_min.text(min);
        t_sec.text(sec);
        t = setTimeout(function () {
            if(parseInt(hou) + parseInt(min) + parseInt(sec) ==0){
                clearTimeout(t)
            }else{
                time()                
            }
        }, 1000)
            
    }
    time()
    
//轮播  
    //获取屏幕宽
    var WIDTH = window.innerWidth;
    var ul = document.querySelector(".lb-list");
    var lis = ul.children;
    var length = lis.length;
    //生成指示器
    var dc = document.createDocumentFragment();
    var dot = document.querySelector(".lb-dot")

    for (var i = 0; i < length; i++) {
        var nli = document.createElement("li");
        nli.index = i;
        if (i == 0) {
            nli.classList.add("dt-active");
        }
        nli.classList.add("lb-item");

        dc.appendChild(nli)
    }
    dot.appendChild(dc)
    var dots = dot.children;


    //克隆第一张和最后一张
    var fc = lis[0].cloneNode(true);
    var lc = lis[length - 1].cloneNode(true);
    //添加到前面和后面
    ul.appendChild(fc);
    ul.insertBefore(lc, lis[0]);
    ul.style.width = (length + 2) + "00%"
    //定义变量
    var sx, ex, tx, x, index = 1;
    //设置第一张正常显示
    tx = -WIDTH;
    ul.style.transform = "translate3d(" + tx + "px,0,0)";
    //获取开始/结束时的位置
    ul.addEventListener("touchstart", function (e) {
        var touch = e.changedTouches[0];
        if (index == 0) {
            this.classList.remove("lb-active");
            index = lis.length - 2;
        }
        if (index > lis.length - 2) {
            this.classList.remove("lb-active");
            index = 1;
        }
        changedpages(index, this);
        //去除class   PC端兼容不好
        this.classList.remove("lb-active");
        sx = touch.clientX;
        x = sx - tx;
    })
    //获取x是为了让元素随着鼠标移动
    ul.addEventListener("touchmove", function (e) {
        var touch = e.changedTouches[0]
        tx = touch.clientX - x;
        this.style.transform = "translate3d(" + tx + "px,0,0)";
    })
    //离开屏幕时
    ul.addEventListener("touchend", function (e) {
        this.classList.add("lb-active")
        var touch = e.changedTouches[0];
        ex = touch.clientX;
        if (sx - ex > WIDTH / 3) {
            if (index < lis.length - 1) {
                index++;
            }
        } else if (ex - sx > WIDTH / 3) {
            if (index > 0) {
                index--;
            }
        }
        changedpages(index, this);
        dotchange(index);
    })
    function changedpages(n, obj) {
        tx = -WIDTH * n;
        obj.style.transform = "translate3d(" + tx + "px,0,0)";
    }
    //指示器的改变
    function dotchange(i) {
        var dotli = document.querySelector(".dt-active");
        dotli.classList.remove("dt-active")
        if (i == 0) {
            i = length;
        } else if (i == length + 1) {
            i = 1;
        }
        dots[i - 1].classList.add("dt-active")
    }
    setInterval(function () {
        if (index == length + 1) {
            ul.classList.remove("lb-active");
            ul.style.transform = "translate3d(" + (-WIDTH) + "px,0,0)";
            index = 1;
        }
        setTimeout(function () {
            ul.classList.add("lb-active");
            index++;
            changedpages(index, ul);
            dotchange(index);
        }, 10)

    }, 3000)


//滑动 m-container
    var swiper = new Swiper(".m-con.swiper-container", {
        speed: 700,
        pagination: '.swiper-pagination',
    })
    var mswidth = $(".ms-i-list");
    var miwidth = $(".ms-info .ms-i-item");
    var mwidth = miwidth[0].clientWidth;
    var mlength = miwidth.length;
    var lwidth = $(".ms-i-item")[length + 1].clientWidth;
    var Width = mwidth * (miwidth.length - 1) + lwidth;
    mswidth.width(Width);
    new Swiper(".ms-i-con.swiper-container", {
        slidesPerView: 3.61,
        spaceBetween: 0,
    })
    function lbsw(obj) {
        new Swiper(obj + ' .swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: true
        })
    }
    lbsw(".m-ts");
    lbsw(".m-zt");

}(Zepto))