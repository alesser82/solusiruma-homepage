$(window).ready(function () {

    // HEADER

    $('.select2').select2()

    $('.home-header .cancel-btn').click(function (e) {
        e.preventDefault()
        $('.home-header .search-menu').toggleClass('active')
    })

    $('.home-header .search-btn').click(function (e) {
        e.preventDefault()
        $('.home-header .search-menu').toggleClass('active')
    })

    $('.home-header .toggle-btn').each(function (i) {
        $('.home-header .toggle-btn').eq(i).click(function (e) {
            e.preventDefault()
            $('.home-header .toggle-btn').addClass('active')
            $('.home-header .toggle-btn').eq(i).removeClass('active')
            $('.home-header .menu-column,.home-header .start-column').toggleClass('active')
        })
    })

    // END HEADER

    // BANNER

    $('.home-banner').hover(function () {
        $('.home-banner .banner-btn a,.home-banner .banner-btn div').toggleClass('active')
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autowidth: true,
        margin: 215
    });

    $('.banner-btn-right a, .banner-content.button a .fa-chevron-right').click(function (e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    })

    $('.banner-btn-left a, .banner-content.button a .fa-chevron-left').click(function (e) {
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    })

    $('.banner-content.button a .toggle-btn').each(function (i) {
        $('.banner-content.button a .toggle-btn').eq(i).click(function (e) {
            e.preventDefault()
            $('.banner-content.button a .toggle-btn').addClass('active')
            // $('.banner-content.button a .toggle-btn').eq(i).removeClass('active')
            if ($('.banner-content.button a .toggle-btn').eq(i).hasClass('fa-pause')) {
                $('.banner-content.button a .toggle-btn.fa-pause').removeClass('active')
            } else {
                $('.banner-content.button a .toggle-btn.fa-play').removeClass('active')
            }
        })
    })

    $('.banner-content.button a .fa-pause').click(function (e) {
        e.preventDefault()
        owl.trigger('stop.owl.autoplay')
    })

    $('.banner-content.button a .fa-play').click(function (e) {
        e.preventDefault()
        owl.trigger('play.owl.autoplay')
    })

    // END BANNER

})