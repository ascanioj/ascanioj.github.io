(function ($) {
    "use strict";


    /*Pre-loader
    * ----------------------------------------------------------------------------------------------------------------*/
    $(window).load(function(){
        $('#page-loader').fadeOut(400);
        $('.intro').addClass('animated fadeInUp');
        $('#intro-img').addClass('animated slideInRight');


        /*Header Background Video
        * ------------------------------------------------------------------------------------------------------------*/
        $(function(){
            jQuery("#background-video").YTPlayer();
        });

    });


    /* Scrolling Navbar
     *----------------------------------------------------------------------------------------------------------------*/
    $(window).scroll(function() {
        if ($(".nav").offset().top > 30) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    $(document).ready(function() {

        /*AOS Initialize
         * -----------------------------------------------------------------------------------------------------------*/
        AOS.init({
            offset: 0,
            duration: 700,
            delay: 300,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();


        /*Parallax
         * -----------------------------------------------------------------------------------------------------------*/
        $(window).stellar({
            horizontalScrolling: false
        });


        /*Back to Top
         * -----------------------------------------------------------------------------------------------------------*/
        var offset = 300,
            $back_to_top = $('#back-to-top');
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible animated slideInUp').show()
                : $back_to_top.removeClass('is-visible animated slideInUp').hide();
        });



        /*jQuery for page scrolling feature - requires jQuery Easing plugin
         * ------------------------------------------------------------------------------------------------------------*/
        $(".nav a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });

        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });



        /* Page Scrolling Smoothly to Link Target
         * -----------------------------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });
        

        /* Side Navigation
         * -----------------------------------------------------------------------------------------------------------*/
        var $menuBtn = $('#nav-btn');
        var $sideNav = $('#side-nav');
        var $sideNavMask = $('#side-nav-mask');
        var $link = $('.side-nav-link');
        var $nav = $('.navbar-default');
        var $navLogo = $('#logo');

        $menuBtn.on('click', function() {
            $sideNav.animate({left: 0}, 'fast');
            $sideNavMask.addClass('visible');
            $nav.hide();
        });
        $link.on('click', function() {
            $sideNav.animate({left: -260}, 'fast');
            $sideNavMask.removeClass('visible');
            $nav.show().addClass('animated fadeInDown');
            $navLogo.addClass('animated zoomIn');
            $menuBtn.addClass('animated bounceInLeft');
        });
        $sideNavMask.on('click', function() {
            $sideNav.animate({left: -260}, 'fast');
            $sideNavMask.removeClass('visible');
            $nav.show().addClass('animated fadeInDown');
            $navLogo.addClass('animated zoomIn');
            $menuBtn.addClass('animated bounceInLeft');
        });



        /*Service Icon Hover Effect
        * ------------------------------------------------------------------------------------------------------------*/

        $(".service-item").hover(function(){
            $('.icon', this)
                .removeClass('animated bounceIn')
                .hide()
                .addClass('animated bounceIn')
                .show();
        });



        /*Function Number Hover Effect
         * ------------------------------------------------------------------------------------------------------------*/
        $(".functions").hover(function(){
            $('.number', this)
                .removeClass('animated swing')
                .hide()
                .addClass('animated swing')
                .show();
        });



        /*Feature Icon Hover Effect
         * -----------------------------------------------------------------------------------------------------------*/
        $(".single-feature").hover(function(){
            $('.feature-icon', this)
                .removeClass('animated pulse')
                .hide()
                .addClass('animated pulse')
                .show();
        });



        /*Benefit Panel
        * ------------------------------------------------------------------------------------------------------------*/
        var panelActive = '.panel .panel-collapse.in';
        $(panelActive).parent().find('i').addClass('ion-ios-arrow-up');
        $(panelActive).parent().find('i').removeClass('ion-ios-arrow-down');
        $('.panel').on('shown.bs.collapse', function () {
                $(this).find('i').addClass('ion-ios-arrow-up');
                $(this).find('i').removeClass('ion-ios-arrow-down');
            })
            .on('hidden.bs.collapse', function () {
                $(this).find('i').addClass('ion-ios-arrow-down');
                $(this).find('i').removeClass('ion-ios-arrow-up');
            });


        /*Video Section Magnific Popup
         * -----------------------------------------------------------------------------------------------------------*/
        $('.video-wrapper').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'iframe',
            mainClass: 'animated mfp-with-zoom',
            removalDelay: 300,
            duration: 300,

        });



        /*Testimonial Slider
         * -----------------------------------------------------------------------------------------------------------*/
        var testimonialSlider = new Swiper ('#testimonial-slider', {
            slidesPerView: 1,
            loop: true,
            direction: 'horizontal',
            effect: "slide",
            speed: 1000,
            autoplay: 5000,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: true,
        });



        /*App Screen Shot Slider and Magnific Popup
         * -----------------------------------------------------------------------------------------------------------*/
        var screenShotsSlider = new Swiper ('#screen-shots-slider', {
            slidesPerView: 5,
            loop: true,
            direction: 'horizontal',
            effect: "slide",
            speed: 1000,
            autoplay: 3000,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });

        $('.popup-link').magnificPopup({
            removalDelay: 300,
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
                }
            },
            gallery:{
                enabled:true //enable gallery mode
            }
        });




        /*Interesting Facts
        * ------------------------------------------------------------------------------------------------------------*/
        $('.counter').counterUp({
            delay: 50,
            time: 2000
        });



        /*Team Member Picture Hover Effect
         * -----------------------------------------------------------------------------------------------------------*/
        $(".single-team-member").hover(function(){
            $('img', this)
                .removeClass('animated pulse')
                .hide()
                .addClass('animated pulse')
                .show();
        });




        /*Email Handling
        * ------------------------------------------------------------------------------------------------------------*/
        $('form#contact-form').on('submit', function (e) {
            e.preventDefault(); //Prevents default submit
            var form = $(this);
            $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click
            var post_data = form.serialize(); //Serialized the form data

            $.ajax({
                    type: 'POST',
                    url: 'assets/php/mail_handler.php', // Form script
                    data: post_data
                })
                .done(function () {

                    // Get the snackbar DIV
                    var x = document.getElementById("snackbar");
                    // Add the "show" class to DIV
                    x.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

                })
                .fail(function () {

                    // Get the fail-snackbar DIV
                    var y = document.getElementById("fail-snackbar");
                    // Add the "show" class to DIV
                    y.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
                });
        });




        /*Map toggle Button
         * -----------------------------------------------------------------------------------------------------------*/
        $( "#map-toggle" ).on('click', function() {
            $("#google-map").slideToggle();
        });

    });


    /*Mailchimp Newsletter
    * ----------------------------------------------------------------------------------------------------------------*/
    $('.mailchimp').ajaxChimp({
        //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        url: "http://ravelweb.us14.list-manage.com/subscribe/post?u=814d42f8f0db529ea021b1eea&amp;id=f0e1fc4cd8",
        callback: mailchimpCallback
    });

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $("form.mailchimp")[0].reset();
            $('.subscription-success')
                .html('<i class="ion-checkmark mailchimp-response-icon"></i><br/>' + resp.msg)
                .addClass('visible')
                .addClass('animated fadeIn')
                .fadeOut(3000);
            $('.subscription-error')
                .addClass('animated fadeOut')
                .fadeOut(3000);
        } else if(resp.result === 'error') {
            $('.subscription-error')
                .html('<i class="ion-close mailchimp-response-icon"></i><br/>' + resp.msg)
                .addClass('visible')
                .addClass('animated fadeIn')
                .fadeOut(3000);
        }
    }


})(jQuery);