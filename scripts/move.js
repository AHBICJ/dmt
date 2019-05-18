
function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            $(window).bind("scroll", function () {
                var top = $(this).scrollTop(); // 当前窗口的滚动距离
                console.log(top);
                if (e.wheelDelta < 0) {
                    //当滑轮向下滚动时
                    if (top > 540) $("#mytop").addClass("mytop");
                    if (top < 540) $("#mytop").removeClass("mytop");
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