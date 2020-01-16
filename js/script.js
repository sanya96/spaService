(function () {
        this.goTop = $('#go-top');
        $(document).on('scroll', () =>{
            ($(this).scrollTop() >= 250) ? this.goTop.fadeIn() : this.goTop.fadeOut();
        });

        this.goTop.on('click', () =>{
            $('html').animate({scrollTop:0},1000);
        })
})();

$(function () {
    $(window).scroll(function(event) {
        ($(this).scrollTop() > 10) ?
            $("header").fadeIn().addClass('menu-top')
            : $("header").removeClass('menu-top')
    });
});

// $(function ($) {
//     $(window).scroll(function(){
//         $(".div").each(function () {
//             var window_top = $(window).scrollTop();
//             var div_top = $(this).offset().top;
//             var div_1 = $(this).attr('id');
//             if (window_top > div_top - 120){
//                 $('#menu').find('td').removeClass('active');
//                 $('#menu').find('td[class="'+div_1+'"]').addClass('active');
//             }
//         else{
//
//                 $('#menu').find('td[class="'+div_1+'"]').removeClass('active');
//             };
//
//         });
//     });
// });

