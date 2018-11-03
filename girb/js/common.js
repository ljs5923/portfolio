jQuery(function ($) {
    var $_header = $('#_header');
    var $_logo = $('._logo')
    var $_gnbBtnWrap = $('._gnb_btn_wrap');
    var $_gnbBtn = $('._gnb_btn');
    var $_gnbWrap = $('._gnb_wrap');
    var $_contentMenu = $('._content_menu');
    var $_contentMenuLst = $('._content_menu_lst');
    var $_gnbLst = $('._gnb_lst');
    var $_subGnbBtnWrap = $('._sub_gnb_btn_wrap');
    var $_subGnbBtn = $('._sub_gnb_btn');
    var $_btnTop = $('._scroll_top_btn a');
    var $_contentWrap1st = $('._content_wrap._content01');
    //menu event start
    $_gnbBtn.on('click', function () {
        $(this).toggleClass('_on');
        $_gnbWrap.toggleClass('_on');
    });
    $_gnbLst.on('click',function(){
        $(this).find('._gnb_sub').stop().slideToggle(500);
        $(this).siblings().find('._gnb_sub').stop().slideUp(500);
    })
    //menu envet end
    //sub gnb event start
    $_subGnbBtnWrap.on('click',function(){
        $(this).toggleClass('_active');
    });
    $(window).on('scroll',function(){
        var headerTop = $_header.offset().top;
        var windowTop = $(window).scrollTop();
        if(headerTop<windowTop){
            $_logo.addClass('_fixed');
            $_gnbBtnWrap.addClass('_fixed');
            $_subGnbBtnWrap.addClass('_fixed');
            $_contentMenu.fadeOut(300);
        } else {
            $_logo.removeClass('_fixed');
            $_gnbBtnWrap.removeClass('_fixed');
            $_subGnbBtnWrap.removeClass('_fixed');
            $_contentMenu.fadeIn(300);
        }
    });
    //sub gnb envet end
    //local menu event start
    $_contentMenuLst.on('mouseenter', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $_contentMenu.on('mouseleave', function () {
        $('#fullpage .section').each(function () {
            if ($(this).hasClass('active') == true) {
                var index = $(this).index();
                $_contentMenuLst.eq(index).addClass('active').siblings().removeClass('active');
            }
        })
    });
    //local menu evnet end
    //btn top event start
    $_btnTop.on('click',function(){
        $('html, body').stop().animate({
			scrollTop:0
		},500);
    })
    //btn top event end
    //contentWrap1st 100% event start
    $(window).on('load resize',function(){
        var winH = $(window).height();
        $_contentWrap1st.css('height',winH);
    })
    //contentWrap1st 100% event end
})
