
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 20,
        loop:true,
    });
})



$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})







