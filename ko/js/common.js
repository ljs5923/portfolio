jQuery(function ($) {
    // main js start
    //nav event start
    $('._main_lst li a').on('mouseenter', function () {
        $('#_header').stop().animate({
            height: 336
        }, 400);
        $('#_header').addClass('_active');
        $('._main_dept').addClass('_active');
        $('._logo_img').addClass('_active');
        $('._siteMap .fa-bars').addClass('_active');
    });
    $('#_header').on('mouseleave', function () {
        $('#_header').stop().animate({
            height: 86
        }, 400, function () {
            $(this).removeClass('_active');
            $('._main_dept').removeClass('_active');
            $('._logo_img').removeClass('_active');
            $('._siteMap .fa-bars').removeClass('_active');
        });
    });
    //nav event end
    //scroll event start
    $('._scroll_top').on('click', function () {
        var wintop = $('html,body').offset().top;
        $('html,body').animate({
            'scrollTop': wintop
        }, 500, 'swing');
    });
    $(window).on('scroll', function () {
        var winST = $(window).scrollTop();
        var content1Top = $('#_company_content').offset().top;
        if (content1Top > winST) {
            $('._scroll_top').fadeOut();
        } else {
            $('._scroll_top').fadeIn().css("bottom", 100);
        }
    });
    //scroll event end
    //email open start

    $('._footer_link_lay').fancybox();
    $('._footer_link_lay').on('click', function () {
        var $emailModal = $('._email_modal');
        var $emailMoCon = $emailModal.find('._modal_content');
        var $emailBtnWrap = $emailMoCon.find('._sel_btn_wrap');
        var $emailDecWrap = $emailMoCon.find('._modal_dec_box');
        var $emailDecCon = $emailDecWrap.find('._modal_dec')
        var $_btn = $emailBtnWrap.find('._btn');
        var emailDecH = $emailDecCon.eq(0).outerHeight();
        $emailDecWrap.css('height', emailDecH);
        $_btn.on('click', function () {
            if ($(this).hasClass('_btn_sel')) {
                $emailModal.find('._sel_lsts').fadeToggle();
                $(this).addClass('_active');
            } else if ($(this).hasClass('_val1')) {
                var reText = $(this).text();
                $emailModal.find('._val').text(reText);
                $emailModal.find('._sel_lsts').hide();
                $emailModal.find('._btn._btn_sel').removeClass('_active');
            } else if ($(this).hasClass('_val2')) {
                var reText = $(this).text();
                $emailModal.find('._val').text(reText);
                $emailModal.find('._sel_lsts').hide();
                $emailModal.find('._btn._btn_sel').removeClass('_active');
            } else if ($(this).hasClass('_btn_view')) {
                if ($emailModal.find('._val').text() == '이메일무단수집거부 v1.1') {
                    var emailDecH = $emailDecCon.eq(1).outerHeight();
                    $emailDecWrap.css('height', emailDecH);
                    $emailDecCon.eq(1).show().siblings().hide();
                } else if ($emailModal.find('._val').text() == '이메일무단수집거부 v1.2') {
                    var emailDecH = $emailDecCon.eq(0).outerHeight();
                    $emailDecWrap.css('height', emailDecH);
                    $emailDecCon.eq(0).show().siblings().hide();
                }
            }
        })
    })
    //email open end
    //    rel_con_nav start
    $('._company_relative_container ._btn._btn_number').on('click', function () {
        $(this).addClass('_active').siblings().removeClass('_active')
    });
    //    rel_con_nav end
    //FAMILY SITE open start
    $('._btn_familysite_open').on('click', function () {
        $('._footer_bottom_familysite_container').fadeToggle(500, function () {
            $('._familysite_title').toggleClass('active');
        });
        $('._btn_familysite_icon').toggleClass('_cancle');
    })
    //FAMILY SITE open end
    //company_information_header event start
    $(window).on('scroll', function () {
        var winHT = $(window).scrollTop();
        var headerTopH = $('._header_spot').height();
        if (winHT >= headerTopH) {
            $('#_company_wrap').addClass('_fixed');
        } else {
            $('#_company_wrap').removeClass('_fixed');
        }
    });
    //company_information_header event end
    //_btn_area event start
    $('._tab_area ._lsts ._lst').hover(
        function () {
            $(this).find('._lst_btn').addClass('_active');
        },
        function () {
            $(this).find('._lst_btn').removeClass('_active');
        }
    )
    //_btn_area event end
    //_tab_radio_area event start
    $('._tab_radio_area ul li button').hover(
        function () {
            $(this).find('span').addClass('_active');
        },
        function () {
            $(this).find('span').removeClass('_active');
        }
    )
    //_tab_radio_area event end
    //grid _cont_txt event start
    $('.grid-item').hover(
        function () {
            $(this).find('._cont_txt').addClass('_active');
        },
        function () {
            $(this).find('._cont_txt').removeClass('_active');
        }
    )
    //grid _cont_txt event end
}); //jQuery End
