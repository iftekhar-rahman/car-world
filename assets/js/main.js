jQuery(document).ready(function($){

    // $(".header-area").sticky({ topSpacing: 0 });

    $('select').niceSelect();

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

    AOS.init();


     /*---------- Double handle Range Slider  ----------*/
     $(function () {
        $("#range-slider-1").slider({
            range: true,
            min: 0,
            max: 5000,
            step: 100,
            values: [1000, 4000],
            slide: function (event, ui) {
                $('.amount1').val("£" + ui.values[0]);
                $('.amount2').val("£" + ui.values[1]);
            }
        });
        $('.amount1').val("£" + $("#range-slider-1").slider("values", 0));
        $('.amount2').val("£" + $("#range-slider-1").slider("values", 1));
    });
        // perfectScrollbar
        // $(".nice-select .list").perfectScrollbar();

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    // $(".logo-carousel-wrap").owlCarousel({
    //     items: 5,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         580: {
    //             items: 3,
    //             margin: 3,
    //             nav: false
    //         },
    //         720: {
    //             items: 4,
    //             margin: 3,
    //             nav: false
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1140: {
    //             items: 6
    //         }

    //     }
    // });

    $(".featured-cars").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 15,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // responsive: {
        //     0: {
        //         items: 1,
        //         margin: 0,
        //         nav: false
        //     },
        //     481: {
        //         items: 2,
        //         margin: 15,
        //         nav: false
        //     },
        //     720: {
        //         items: 3,
        //         margin: 15,
        //         nav: false
        //     },
        //     960: {
        //         items: 3,
        //         margin: 25,
        //     },
        //     1140: {
        //         items: 4
        //     }

        // }
    });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });




    

    

});