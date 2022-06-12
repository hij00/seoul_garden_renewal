const swiper = new Swiper('.swiper', {
    loop: true,

    speed: 1000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    autoplay: {
    delay: 3000,
    pauseOnMouseEnter:'true',
    },
      
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
})


