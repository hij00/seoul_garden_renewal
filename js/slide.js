const swiper = new Swiper('.swiper', {
    loop: true,

    speed: 1000,

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
    hideOnClick: 'false'
    
    },

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    autoplay: {
    delay: 3000,
    pauseOnMouseEnter:'true',
    }
      
})

const bulEl = document.querySelectorAll('.swiper-pagination-bullet')

bulEl[0].style.backgroundColor = 'white'
bulEl[1].style.backgroundColor = 'white'
bulEl[2].style.backgroundColor = 'white'
bulEl[2].style.marginRight = '70px'



const bulWrap = document.querySelector('.swiper-pagination')
bulWrap.style.marginRight = '50px'

// const bullEl = document.querySelector('.swiper-pagination-bullet')

// bullEl.style.backgroundColor = 'white'
// bullEl.style.opacity = '1.0'


// const handleTime = () => {
//     const bulEl = document.querySelectorAll('.swiper-pagination-bullet-active')

// // bulEl[0].style.marginRight = '200px'
// // bulEl[1].style.marginRight = '200px'
// bulEl[0].style.backgroundColor = 'black'
// bulEl[1].style.backgroundColor = 'black'
// bulEl[2].style.backgroundColor = 'black'

// const bullEl = document.querySelector('.swiper-pagination-bullet')

// bullEl.style.backgroundColor = 'white'
// bullEl.style.opacity = '1.0'
// }

// setInterval(handleTime, 2000)




