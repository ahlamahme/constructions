/*-----------------------------------------------------------------------------------

    Theme Name: Archic - Construction and Architecture HTML Template
    Description: Construction and Architecture HTML Template
    Author: Website Design Templates
    Version: 2.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Resize function
        07. FullScreenHeight function
        08. ScreenFixedHeight function
        09. Copy to clipboard
        10. Change Background Image
        11. FullScreenHeight and screenHeight with resize function
        12. Wow animation - on scroll
        13. Sliders
        14. Tabs
        15. CountUp
        16. Countdown
        17. Current Year
        18. Gallery
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/all-white-logo.webp');
                logodefault.attr('src', 'img/logos/logo.webp');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.webp');
                logodefault.attr('src', 'img/logos/logo.webp');
            }
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /*------------------------------------
            05. Video
        --------------------------------------*/

        // It is for local video
        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        /*------------------------------------
            06. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            07. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            08. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            09. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        /*------------------------------------
            10. Change Background Image
        --------------------------------------*/

        $('.vision-wrapper').on('mouseenter', function (e) {
            var bg = $(this).data('background');
            $('.vision-changebg').animate({ opacity: 0.9 }, 50, function(){
                $('.vision-changebg').css('background-image', 'url(' + bg + ')');
            });
            $('.vision-changebg').delay(50).animate({ opacity: 0.9 }, 50);
        });

        /*------------------------------------
            11. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

        /*------------------------------------
            12. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();

    // === when document ready === //
    $(document).ready(function(){

        /*------------------------------------
            13. Sliders
        --------------------------------------*/

        // portfolio-carousel
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: true,
            dots: false,
            autoWidth:true,
            center:false,
            margin: 50,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        // portfolio-carousel2
        $('.portfolio-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        
        // Clients carousel
        $('.client-style1').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed:1500,
            autoplayTimeout: 4000,
            responsiveClass: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 30
                },
                481: {
                    items: 2,
                    margin: 15
                },
                576: {
                    items: 2,
                    margin: 30
                },
                768: {
                    items: 3,
                    margin: 30
                },
                1600: {
                    items: 3,
                    margin: 80
                }
            }
        });

        // testimonial-carousel2
        $('.testimonial-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: true,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: false,
            margin: 50,
            center: false,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1
        });

        // Vision
        $('.vision-changebg').owlCarousel({
            loop: true,
            responsiveClass: true,
            center: false,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 0,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 4,
                    loop: false,
                    nav: false,
                }
            }
        });

        // Sliderfade
        $('.slider-fade').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            nav: false,
            navText: ["<span class='ti-arrow-left'></span>", "<span class='ti-arrow-right'></span>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                nav: true
                }
            }
            
        });
        
        // Default owlCarousel
        $('#owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            autoplay:true,
            nav: true,
            smartSpeed:500
        }); 
        //sec owl project
        $('#carousel1').owlCarousel({
            items: 2,
            loop:true,
            dots: true,
            margin: 10,
            autoplay:false,
            nav: true,
            smartSpeed:500
          });

        $("#ab-slider").on("input change", (e)=>{
          const sliderPos = e.target.value;
          // Update the width of the foreground image
          $('.foreground-img').css('width', `${sliderPos}%`)
          // Update the position of the slider button
          $('.ab-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
        });

        // Slider text animation
        var owl = $('.slider-fade');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('span').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        /*------------------------------------
            14. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            15. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            16. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Aug 2025 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        /*------------------------------------
            17. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            18. Gallery
        --------------------------------------*/

        $('.portfolio-gallery').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });

    });

})(jQuery);