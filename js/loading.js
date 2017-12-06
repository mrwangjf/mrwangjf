!function(A){A.fn.picLazyLoad=function(a){function t(){o.each(function(){var t=A(this);if(t.is("img")){if(t.attr("data-original")){(o=t.offset().top)-a.threshold<=r+i&&(t.attr("src",t.attr("data-original")),t.removeAttr("data-original"))}}else if(t.attr("data-original")){"none"==t.css("background-image")&&t.css("background-image","url("+a.placeholder+")");var o=t.offset().top;o-a.threshold<=r+i&&(t.css("background-image","url("+t.attr("data-original")+")"),t.removeAttr("data-original"))}})}var o=A(this),i=0,r=A(window).height();a=A.extend({threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},a||{}),t(),A(window).on("scroll",function(){i=A(window).scrollTop(),t()})}}(Zepto);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsiJCIsImZuIiwicGljTGF6eUxvYWQiLCJzZXR0aW5ncyIsImxhenlMb2FkUGljIiwiJHRoaXMiLCJlYWNoIiwiJHNlbGYiLCJ0aGlzIiwiaXMiLCJhdHRyIiwiX29mZnNldFRvcCIsIm9mZnNldCIsInRvcCIsInRocmVzaG9sZCIsIl93aW5IZWlnaHQiLCJfd2luU2Nyb2xsVG9wIiwicmVtb3ZlQXR0ciIsImNzcyIsInBsYWNlaG9sZGVyIiwid2luZG93IiwiaGVpZ2h0IiwiZXh0ZW5kIiwib24iLCJzY3JvbGxUb3AiLCJaZXB0byJdLCJtYXBwaW5ncyI6IkNBQ0MsU0FBVUEsR0FDUEEsRUFBRUMsR0FBR0MsWUFBYyxTQUFTQyxHQW9CeEIsU0FBU0MsSUFDTEMsRUFBTUMsS0FBSyxXQUNQLElBQUlDLEVBQVFQLEVBQUVRLE1BRWQsR0FBR0QsRUFBTUUsR0FBRyxRQUNSLEdBQUdGLEVBQU1HLEtBQUssaUJBQWlCLEVBQ3ZCQyxFQUFhSixFQUFNSyxTQUFTQyxLQUNmVixFQUFTVyxXQUFlQyxFQUFhQyxJQUNsRFQsRUFBTUcsS0FBSyxNQUFNSCxFQUFNRyxLQUFLLGtCQUM1QkgsRUFBTVUsV0FBVyx3QkFLekIsR0FBR1YsRUFBTUcsS0FBSyxpQkFBaUIsQ0FFUyxRQUFqQ0gsRUFBTVcsSUFBSSxxQkFDVFgsRUFBTVcsSUFBSSxtQkFBbUIsT0FBT2YsRUFBU2dCLFlBQVksS0FFN0QsSUFBSVIsRUFBYUosRUFBTUssU0FBU0MsSUFDNUJGLEVBQWFSLEVBQVNXLFdBQWVDLEVBQWFDLElBQ2xEVCxFQUFNVyxJQUFJLG1CQUFtQixPQUFPWCxFQUFNRyxLQUFLLGlCQUFpQixLQUNoRUgsRUFBTVUsV0FBVyxxQkF6Q3JDLElBQUlaLEVBQVFMLEVBQUVRLE1BQ1ZRLEVBQWdCLEVBQ2hCRCxFQUFhZixFQUFFb0IsUUFBUUMsU0FFM0JsQixFQUFXSCxFQUFFc0IsUUFDVFIsVUFBVyxFQUNYSyxZQUFhLDBMQUNkaEIsT0FHSEMsSUFHQUosRUFBRW9CLFFBQVFHLEdBQUcsU0FBUyxXQUNsQlAsRUFBZ0JoQixFQUFFb0IsUUFBUUksWUFDMUJwQixPQWpCWCxDQWtERXFCIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOyhmdW5jdGlvbigkKXtcclxuICAgICQuZm4ucGljTGF6eUxvYWQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgX3dpblNjcm9sbFRvcCA9IDAsXHJcbiAgICAgICAgICAgIF93aW5IZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIOmOu+aErOWioOalguaouuWus+mNlOeKuua1h1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc1FBQUE3RUFaVXJEaHNBQUFBTlNVUkJWQmhYWXpoOCtQQi9BQWZmQTBuTlB1Q0xBQUFBQUVsRlRrU3VRbUNDJ1xyXG4gICAgICAgIH0sIHNldHRpbmdzfHx7fSk7XHJcblxyXG4gICAgICAgIC8vIOmOtdGG7pSR6Y6z5o6R5aee5p2e6JeJ5rWY6ZCX77+9XHJcbiAgICAgICAgbGF6eUxvYWRQaWMoKTtcclxuXHJcbiAgICAgICAgLy8g5amK5rCs5aep55GZ77mA5b2C6Y6544ig5rWYXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIF93aW5TY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkUGljKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOmOs+aOkeWnnuadnuiXiea1mOmQl++/vVxyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlMb2FkUGljKCl7XHJcbiAgICAgICAgICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAvLyDmv6HlgpvngYnpj4Tnl6BtZ1xyXG4gICAgICAgICAgICAgICAgaWYoJHNlbGYuaXMoJ2ltZycpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZigkc2VsZi5hdHRyKCdkYXRhLW9yaWdpbmFsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29mZnNldFRvcCA9ICRzZWxmLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKF9vZmZzZXRUb3AgLSBzZXR0aW5ncy50aHJlc2hvbGQpIDw9IChfd2luSGVpZ2h0ICsgX3dpblNjcm9sbFRvcCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGYuYXR0cignc3JjJywkc2VsZi5hdHRyKCdkYXRhLW9yaWdpbmFsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGYucmVtb3ZlQXR0cignZGF0YS1vcmlnaW5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5r+h5YKb54GJ6Y+E7oid5YSX6Y+F7oia5rWYXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZigkc2VsZi5hdHRyKCdkYXRhLW9yaWdpbmFsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmppvmqL/uhbvpjZfnirHntoXpjaXliaflopZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHNlbGYuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJykgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxmLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCgnK3NldHRpbmdzLnBsYWNlaG9sZGVyKycpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRUb3AgPSAkc2VsZi5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKChfb2Zmc2V0VG9wIC0gc2V0dGluZ3MudGhyZXNob2xkKSA8PSAoX3dpbkhlaWdodCArIF93aW5TY3JvbGxUb3ApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxmLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCgnKyRzZWxmLmF0dHIoJ2RhdGEtb3JpZ2luYWwnKSsnKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGYucmVtb3ZlQXR0cignZGF0YS1vcmlnaW5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKFplcHRvKTsiXX0=
