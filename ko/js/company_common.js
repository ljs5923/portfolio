//jquery start
jQuery(function ($) {
//    scroll event start
    $(window).on('scroll', function () {
        var winST = $(window).scrollTop();
        var content1Top = $('._relative_content').offset().top;
        var relConTopArr = new Array();
        $('._relative_content').each(function () {
            var offT = $(this).offset().top;
            relConTopArr.push(offT);
        });
        if (winST > relConTopArr[0]) {
            $('._relative_content').eq(0).find('._dec_info_container').addClass('_active');
            if (winST > relConTopArr[1]) {
                $('._relative_content').eq(1).find('._dec_info_container').addClass('_active');
                if (winST > relConTopArr[2]) {
                    $('._relative_content').eq(2).find('._dec_info_container').addClass('_active');
                    if (winST > relConTopArr[3]) {
                        $('._relative_content').eq(3).find('._dec_info_container').addClass('_active');
                    }
                }
            }
        }
    });
//    scroll event end
});
//jquery end