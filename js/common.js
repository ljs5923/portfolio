jQuery(function($) {
            //typist
            var $main = $('._main');
            var $titBox01 = $main.find('._tit_box');
            var $tit = $titBox01.find('._tit');
            var $btn01 = $main.find('._btn')
            $btn01.on('click', function() {
                var con02H = $intro.offset().top;
                $('html, body').animate({
                    scrollTop: con02H
                }, 500);
            })
            $tit.typist({
                speed: 5,
                text: 'WEB PUBLISHER'
            }).typistStop();
            //intro
            var $intro = $('._intro');
            var $introBtn = $intro.find('._btn');
            var $conWrap02 = $intro.find('._content_wrap');
            $introBtn.on('click', function() {
                if ($(this).hasClass('_btn_intro')) {
                    $(this).fadeOut(function() {
                        $conWrap02.fadeIn();
                    });
                } else if ($(this).hasClass('_btn_tit')) {
                    $conWrap02.fadeOut(function() {
                        $intro.find('._btn_intro').fadeIn();
                    });
                }
            });
            $('._content_con_lsts ._lsts').bxSlider({
                mode: 'fade',
                controls: false,
                pagerCustom: '._lsts',
                touchEnabled: false
            });
            //skills
            var $skills = $('._skills');
            var $skillsLsts = $skills.find('._content_lsts');
            var $skillsLst = $skillsLsts.find('._content_lst');
            $(window).on('scroll', function() {
                var winST = $(window).scrollTop();
                var introOT = $intro.offset().top;
                var skillsOT = $skills.offset().top;
                if ((introOT + introOT / 2) < winST) {
                    $skillsLst.addClass('animated fadeInUp');
                } else if (skillsOT > winST) {
                    $skillsLst.removeClass('animated fadeInUp');
                }
            })
            //            moblie
            $(window).on('load resize', function() {
                var winW = $(window).width();
                if (winW < 576) {
                    var winH = $(window).height();
                    $('._content._main').css('height', winH)
                }
                //menu
                var $header = $('#_header');
                var $mobileMenu = $header.find('._mobile_menu_wrap');
                var $gnbWrap = $header.find('._gnb_wrap')
                var $btn = $header.find('._btn');
                var $gnbLst = $('._scrollTop');
                var $content = $('article._content');
                var $articleOT = new Array();

                function articleOTpush() {
                    for (i = 0; i < 5; i++) {
                        var $artOt = $('article').eq(i).offset().top;
                        $articleOT.push($artOt);
                    }
                }
                $gnbLst.off().on('click', function() {
                    var index = $gnbLst.index(this);
                    articleOTpush();
                    $('html,body').stop().animate({
                        scrollTop: $articleOT[index]
                    }, 500)
                    if (index > 4 && index < 10) {
                        index = index - 5;
                        $('html,body').stop().animate({
                            scrollTop: $articleOT[index]
                        }, 500);
                    } else if (index > 10) {
                        index = index - 11;
                        $('html,body').stop().animate({
                            scrollTop: $articleOT[index]
                        }, 500);
                    } else if (index = 10) {
                        $mobileMenu.find('._gnb_wrap').slideUp(function() {
                            $header.find('._mobile_btn').fadeIn();
                        });
                    }
                })
                $btn.on('click', function() {
                    if ($(this).hasClass('_show_btn')) {
                        $(this).fadeOut(function() {
                            $header.find('._hidden_btn').fadeIn();
                        });
                        $header.stop().animate({
                            right: 0
                        }, 500)
                    } else if ($(this).hasClass('_hidden_btn')) {
                        $(this).fadeOut(function() {
                            $header.find('._show_btn').fadeIn();
                        });
                        $header.stop().animate({
                            right: -180
                        }, 500)
                    } else if ($(this).hasClass('_mobile_btn')) {
                        $(this).fadeOut(function() {
                            $mobileMenu.find('._gnb_wrap').slideDown();
                        })
                    }
                })
            }).resize();
        })