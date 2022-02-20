$(document).ready(function(){

    // Animation
    anime({
        targets: '.left-inner',
        opacity: [0, 1],
        duration: 3000,
        delay: 1000,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.blob1',
        translateY: [-450, 0],
        duration: 3000,
    });
    anime({
        targets: '.blob2',
        translateY: [450, 0],
        duration: 4000,
        delay: 100,
    });
    anime({
        targets: '.overlay',
        width: 90,
        duration: 2000,
        easing: 'easeInOutQuad',
    });

    // slider
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
    });
});

// let newVar = document.getElementById('menu-btn');
// let hide = document.querySelectorAll('side-nav');

// newVar.addEventListener('click', () => {
//     newVar.classlist.toggle('hide');
// })