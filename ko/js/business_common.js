//jquery start
jQuery(function(){    
    //grid event start
    var $gird = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 282,
        gutter: 24
    });
    $gird.imagesLoaded().progress(function () {
        $gird.masonry('layout');
    })
    var moreIndex = 1
    var gridIndex = Math.ceil($('.grid-item').length / 8);
    $('._btn_more').on('click', function () {
        for (i = 0; i < 8; i++) {
            $('.grid-item').eq(i + (moreIndex * 8)).fadeIn();
        }
        $gird.masonry('layout');
        ++moreIndex;
        if (gridIndex==moreIndex) {
            $('._content_more_box').hide();
//            return false;            
        }
    })
    //grid event end
});
//jquery end