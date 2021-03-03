var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: false,
    startPosition: 0,
    slideBy: 1,
    slideTransition: 'ease-in',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".box-filme").on('dragged', function(){
    owl.trigger('prev.owl.carousel');
});

$(".box-filme").on('dragged', function(){
    owl.trigger('next.owl.carousel');
});