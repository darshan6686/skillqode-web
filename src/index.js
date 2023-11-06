// -----------------------------------------------------------------
//                               Header                     
// -----------------------------------------------------------------

const openMenuButton = document.getElementById('openmenu');
const closeMenuButton = document.getElementById('closemenu');
const mobileMenu = document.getElementById('mobilemenu');

console.log(openMenuButton);
console.log(closeMenuButton);
console.log(mobileMenu);

openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    openMenuButton.classList.add('hidden');
    closeMenuButton.classList.remove('hidden');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
    closeMenuButton.classList.add('hidden');
});



// -----------------------------------------------------------------
//                 SECTION 1 ==> Grow with skill
// -----------------------------------------------------------------


function toggleModal() { document.getElementById('modal').classList.toggle('hidden')
}



// -----------------------------------------------------------------
//               SECTION 2 ==> Popular Courses
// -----------------------------------------------------------------




$('#popularCourses').slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="slide-arrow prev-arrow1 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow1 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-right"></i></button>',
  responsive: [ 
    { 
      breakpoint: 1024, 
      settings: { 
        slidesToShow: 3, 
        slidesToScroll: 3, 
        infinite: true, 
        dots: true 
      } 
    }, 
    { 
      breakpoint: 640, 
      settings: { 
        slidesToShow: 2, 
        slidesToScroll: 2 
      } 
    }
  ]
});



// -----------------------------------------------------------------
//                SECTION 3 ==> Success Student
// -----------------------------------------------------------------




  new Glide('.student1', {
    type: 'carousel',
    startAt: 0,
    perView: 6, // Number of visible slides at a time
    breakpoints: {
      1536: {
        perView: 5
      },
      1280: {
        perView: 4
      },
      768: {
        perView: 3
      },
      464: {
        perView: 2,
        gap: -40
      }
    },

    gap: 16,   // Adjust this value to control the gap between slides
    autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
    hoverpause: true, // Pause autoplay on hover
    focusAt: 'center', // Center the active slide
    bound: true, // Allow continuous looping
    animationTimingFunc: 'linear',
    animationDuration: 5000
  }).mount();


  new Glide('.student2', {
    type: 'carousel',
    startAt: 0,
    perView: 6, // Number of visible slides at a time
    breakpoints: {
      1536: {
        perView: 5
      },
      1280: {
        perView: 4
      },
      768: {
        perView: 3
      },
      464: {
        perView: 2,
        gap: -40
      }
    },
    gap: 16,   // Adjust this value to control the gap between slides
    autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
    hoverpause: true, // Pause autoplay on hover
    focusAt: 'center', // Center the active slide
    bound: true, // Allow continuous looping
    direction: 'rtl',
    animationTimingFunc: 'linear',
    animationDuration: 5000
  }).mount();




// -----------------------------------------------------------------
//               SECTION 5 ==> Student Review
// -----------------------------------------------------------------




$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    arrows: false,
    speed: 300,
    centerPadding: '0px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [ 
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 3, 
          slidesToScroll: 1, 
          infinite: true, 
          dots: true 
        } 
      }, 
      { 
        breakpoint: 700, 
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 1 ,
        } 
      }, 
      { 
        breakpoint: 550, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1 
        } 
      }
    ] 
  });
});


// -----------------------------------------------------------------
//               SECTION 6 ==> Our Hiring Partner
// -----------------------------------------------------------------





$('#slick1').slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slide-arrow prev-arrow mt-10 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow mt-10 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-right"></i></button>',
  responsive: [ 
    { 
      breakpoint: 1024, 
      settings: { 
        slidesToShow: 4, 
        slidesToScroll: 4, 
        infinite: true, 
      } 
    }, 
    { 
      breakpoint: 600, 
      settings: { 
        slidesToShow: 2, 
        slidesToScroll: 2 
      } 
    }
]
});




// -----------------------------------------------------------------
//               SECTION 8 ==> Skillqode Family
// -----------------------------------------------------------------


  new Glide('.skillqodefamily', {
    type: 'carousel',
    startAt: 0,
    perView: 5, // Number of visible slides at a time
    breakpoints: {
      1280: {
        perView: 4
      },
      768: {
        perView: 3
      },
      464: {
        perView: 2
      }
    },
    gap: 24,   // Adjust this value to control the gap between slides
    autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
    hoverpause: true, // Pause autoplay on hover
    focusAt: 'center', // Center the active slide
    bound: true, // Allow continuous looping
    animationTimingFunc: 'linear',
    animationDuration: 5000
  }).mount();