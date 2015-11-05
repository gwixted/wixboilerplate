$(function(){

    $('.header').on('click', function(){
        $('.header, .main').toggleClass('small');
    });

    $(window).on('scroll', function(){
        $this = $(this);
        topPos = $this.scrollTop();

        if ( topPos > 40 ) {
            $('.header, .main').addClass('small');
        } else {
            $('.header, .main').removeClass('small');
        }
    });

});