
function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            $(window).bind("scroll", function () {
                var top = $(this).scrollTop(); // 当前窗口的滚动距离
                // console.log(top);
                if (e.wheelDelta < 0) {
                    //当滑轮向下滚动时
                    var X = $('.moveOnRight').offset().left;
                    var Y = $(".vwrap").offset().top;
                    console.log($('.moveOnRight').height());
                    // console.log(top+$('.rightcon').height());
                    // console.log(Y);
                    if (top > 500) {
                        if (top + $('.moveOnRight').height() > Y) {
                            $(".moveOnRight").removeClass("move");
                            $(".moveOnRight").css("margin-top", Y - $('.moveOnRight').height()-510);
                        }
                        else if (top + $('.moveOnRight').height() < Y) {
                            $(".moveOnRight").addClass("move");
                            $(".moveOnRight").css("left", X);
                            $(".moveOnRight").css("margin-top", 0);
                        }
                    }


                    else if (top > 470) {
                        $(".moveOnRight").addClass("move");
                        $(".moveOnRight").css("left", X);
                    }
                    else if (top < 470) $(".moveOnRight").removeClass("move");

                }
            });
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
}
windowAddMouseWheel();