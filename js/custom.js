// $(selector).action()

$(function(){

    "use strictly"

    $(window).on("load",function(){
        $(".preloader").delay(1000).fadeOut(500)
    })

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 50){
            $(".menu_bg").addClass("nav_bg")
        }else{
            $(".menu_bg").removeClass("nav_bg")
        }

        if(scrolling > 30){
            $(".back_to_top").fadeIn(500)
        }else{
            $(".back_to_top").fadeOut(500)
        }

    })

    $(".back_to_top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000)
    })

    $('.banner_main').slick({
        slidesToShow:1,
        slidesToScroll:1,
        speed:2000,
        autoplay:true,
        nextArrow:".next",
        prevArrow:".prev",
        dots:true
    });

    $('.screenshot_main').slick({
        slidesToShow:5,
        slidesToScroll:1,
        speed:800,
        autoplay:true,
        arrows:false,
        dots:true,
        centerMode:true,
        centerPadding:"0px"
    });

    new VenoBox({
        selector: ".my-video-links"
    });

    
    $('.feedback_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feedback_img',
        autoplay:true,
        speed:1000
    });
    $('.feedback_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_text',
        dots: true,
        centerMode: true,
        centerPadding:"0px",
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        speed:1000
    });

    $(function(){
        $(".typed").typed({
            strings: ["Human.", "Team.", "Designers."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: true,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });

})

new WOW().init();
