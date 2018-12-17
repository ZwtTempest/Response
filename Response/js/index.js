$(function(){
    $('.navbar-toggler').click(function(){
        var $isShow = $(this).attr('aria-expanded')
        if($isShow == 'true'){
            $('.nav-menu').removeClass('menu-is-open')
        }else{
            $('.nav-menu').addClass('menu-is-open')
        }
    })
    $(window).scroll(function(){
        var $hei = $(window).scrollTop();
        if($hei > 10){
            $('.nav-menu').addClass('menu-is-scroll')
        }else{
            $('.nav-menu').removeClass('menu-is-scroll')
        }
    })
})