// -----------------------------------------------------------------
//                               Header
// -----------------------------------------------------------------

function toggleMenu (btn) {
  const el = btn.parentElement.querySelector('.subMenu')
  el.classList.toggle('hidden')
}
const btn = document.querySelector('.hasSubMenu')
btn.addEventListener('click', function(){
  toggleMenu(btn)
})

const openMenuButton = document.getElementById("openmenu");
const closeMenuButton = document.getElementById("closemenu");
const mobileMenu = document.getElementById("mobilemenu");

console.log(openMenuButton);
console.log(closeMenuButton);
console.log(mobileMenu);

openMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  openMenuButton.classList.add("hidden");
  closeMenuButton.classList.remove("hidden");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
  closeMenuButton.classList.add("hidden");
});


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("logoimg").style.width = "180px";
    document.getElementById("logoimg").style.transitionDuration = "0.5s";
  } else {
    document.getElementById("navbar").style.top = "34px";
    document.getElementById("logoimg").style.width = "240px";
    document.getElementById("logoimg").style.transitionDuration = "0.5s";
  }
}

// $(window).scroll(function () {
//   if ($(window).scrollTop() > $("header").outerHeight()) {
//     $(".nav-wrapper").addClass("fixed");
//   } else {
//     $(".nav-wrapper").removeClass("fixed");
//   }
// });

// $(document).ready(function () {
//   $('a[href^="#"]').on("click", function (e) {
//     e.preventDefault();
//     var target = this.hash;
//     var $target = $(target);
//     var scroll;
//     if ($(window).scrollTop() == 0) {
//       scroll = $target.offset().top - 160;
//     } else {
//       scroll = $target.offset().top - 60;
//     }
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: scroll,
//         },
//         500,
//         "swing",
//         function () {
//           // window.location.hash = target;
//         }
//       );
//   });
// });

// $(window).on("scroll", function () {
//   var section = $("section"),
//     nav = $(".menu-center"),
//     nav_height = nav.outerHeight(),
//     cur_pos = $(this).scrollTop();
//   section.each(function () {
//     var top = $(this).offset().top - nav_height,
//       bottom = top + $(this).outerHeight();

//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find("li a").removeClass("active");
//       section.removeClass("active");

//       // $(this).addClass('active');
//       nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
//     }
//   });
// });

// AOS.init();

// -----------------------------------------------------------------
//                 SECTION 1 ==> Grow with skill
// -----------------------------------------------------------------

let vdo = document.getElementById("video1");

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
  vdo.pause();
}

// -----------------------------------------------------------------
//               SECTION 2 ==> Popular Courses
// -----------------------------------------------------------------

$("#popularCourses").slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:
    '<button class="slide-arrow prev-arrow1 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow1 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// -----------------------------------------------------------------
//                SECTION 3 ==> Success Student
// -----------------------------------------------------------------

new Glide(".student1", {
  type: "carousel",
  startAt: 0,
  perView: 8, // Number of visible slides at a time
  breakpoints: {
    2634: {
      perView: 7,
    },
    2126: {
      perView: 6,
    },
    1581: {
      perView: 5,
    },
    1270: {
      perView: 4,
    },
    1073: {
      perView: 3,
      gap: -90
    },
    768: {
      perView: 3,
    },
    464: {
      perView: 2,
      gap: -40,
    },
    362:{
      perView: 1,
      gap: -130
    }
  },

  gap: 16, // Adjust this value to control the gap between slides
  autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
  hoverpause: true, // Pause autoplay on hover
  focusAt: "center", // Center the active slide
  bound: true, // Allow continuous looping
  animationTimingFunc: "linear",
  animationDuration: 5000,
}).mount();

new Glide(".student2", {
  type: "carousel",
  startAt: 0,
  perView: 8, // Number of visible slides at a time
  breakpoints: {
    2634: {
      perView: 7,
    },
    2126: {
      perView: 6,
    },
    1581: {
      perView: 5,
    },
    1280: {
      perView: 4,
    },
    1073: {
      perView: 3,
      gap: -90
    },
    768: {
      perView: 3,
    },
    464: {
      perView: 2,
      gap: -40,
    },
    362:{
      perView: 1,
      gap: -130
    }
  },
  gap: 16, // Adjust this value to control the gap between slides
  autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
  hoverpause: true, // Pause autoplay on hover
  focusAt: "center", // Center the active slide
  bound: true, // Allow continuous looping
  direction: "rtl",
  animationTimingFunc: "linear",
  animationDuration: 5000,
}).mount();

// -----------------------------------------------------------------
//               SECTION 5 ==> Student Review
// -----------------------------------------------------------------

$(document).ready(function () {
  $(".center-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    arrows: false,
    speed: 300,
    centerPadding: "0px",
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// -----------------------------------------------------------------
//               SECTION 6 ==> Our Hiring Partner
// -----------------------------------------------------------------

$("#slick1").slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:
    '<button class="slide-arrow prev-arrow mt-10 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow mt-10 bg-[#ed2224] hover:text-[#ed2224] hover:bg-white hover:duration-200 text-white w-7 sm:w-10 h-7 sm:h-10 rounded-full"><i class="fa-solid fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// -----------------------------------------------------------------
//               SECTION 8 ==> Skillqode Family
// -----------------------------------------------------------------

new Glide(".skillqodefamily", {
  type: "carousel",
  startAt: 0,
  perView: 7, // Number of visible slides at a time
  breakpoints: {
    2634: {
      perView: 6,
    },
    2186: {
      perView: 5,
    },
    1280: {
      perView: 4,
    },
    768: {
      perView: 3,
    },
    464: {
      perView: 2,
    },
  },
  gap: 24, // Adjust this value to control the gap between slides
  autoplay: 200, // Set to 0 to disable autoplay or adjust the delay in milliseconds
  hoverpause: true, // Pause autoplay on hover
  focusAt: "center", // Center the active slide
  bound: true, // Allow continuous looping
  animationTimingFunc: "linear",
  animationDuration: 5000,
}).mount();





// -----------------------------------------------------------------
//                        contact Pages
// -----------------------------------------------------------------






// -----------------------------------------------------------------
//                SECTION 4 ==> Our Project
// -----------------------------------------------------------------

function show() {
  var image = document.getElementById("books");
  var box = document.getElementById("box");
  var arrow = document.getElementById("arrow");

  if (image.style.display === "block") {
    image.style.display = "none";
    box.style.backgroundColor = "white";
    box.style.paddingInline = "0px";
    arrow.style.rotate = "0deg";
    arrow.style.backgroundColor = "white";
    arrow.style.color = "black";
  } else {
    image.style.display = "block";
    image.style.transitionDuration = "1000ms";
    box.style.backgroundColor = "#fee2e2";
    box.style.paddingInline = "20px";
    box.style.transitionDuration = "500ms";
    arrow.style.rotate = "-45deg";
    arrow.style.transitionDuration = "500ms";
    arrow.style.backgroundColor = "#ed2224";
    arrow.style.color = "white";
  }
}

function show1() {
  var image = document.getElementById("books1");
  var box = document.getElementById("box1");
  var arrow = document.getElementById("arrow1");

  if (image.style.display === "block") {
    image.style.display = "none";
    box.style.backgroundColor = "white";
    box.style.paddingInline = "0px";
    arrow.style.rotate = "0deg";
    arrow.style.backgroundColor = "white";
    arrow.style.color = "black";
  } else {
    image.style.display = "block";
    image.style.transitionDuration = "1000ms";
    box.style.backgroundColor = "#fee2e2";
    box.style.paddingInline = "20px";
    box.style.transitionDuration = "500ms";
    arrow.style.rotate = "-45deg";
    arrow.style.transitionDuration = "500ms";
    arrow.style.backgroundColor = "#ed2224";
    arrow.style.color = "white";
  }
}

function show2() {
  var image = document.getElementById("books2");
  var box = document.getElementById("box2");
  var arrow = document.getElementById("arrow2");

  if (image.style.display === "block") {
    image.style.display = "none";
    box.style.backgroundColor = "white";
    box.style.paddingInline = "0px";
    arrow.style.rotate = "0deg";
    arrow.style.backgroundColor = "white";
    arrow.style.color = "black";
  } else {
    image.style.display = "block";
    image.style.transitionDuration = "1000ms";
    box.style.backgroundColor = "#fee2e2";
    box.style.paddingInline = "20px";
    box.style.transitionDuration = "500ms";
    arrow.style.rotate = "-45deg";
    arrow.style.transitionDuration = "500ms";
    arrow.style.backgroundColor = "#ed2224";
    arrow.style.color = "white";
  }
}

function show3() {
  var image = document.getElementById("books3");
  var box = document.getElementById("box3");
  var arrow = document.getElementById("arrow3");

  if (image.style.display === "block") {
    image.style.display = "none";
    box.style.backgroundColor = "white";
    box.style.paddingInline = "0px";
    arrow.style.rotate = "0deg";
    arrow.style.backgroundColor = "white";
    arrow.style.color = "black";
  } else {
    image.style.display = "block";
    image.style.transitionDuration = "1000ms";
    box.style.backgroundColor = "#fee2e2";
    box.style.paddingInline = "20px";
    box.style.transitionDuration = "500ms";
    arrow.style.rotate = "-45deg";
    arrow.style.transitionDuration = "500ms";
    arrow.style.backgroundColor = "#ed2224";
    arrow.style.color = "white";
  }
}

function show4() {
  var image = document.getElementById("books4");
  var box = document.getElementById("box4");
  var arrow = document.getElementById("arrow4");

  if (image.style.display === "block") {
    image.style.display = "none";
    box.style.backgroundColor = "white";
    box.style.paddingInline = "0px";
    arrow.style.rotate = "0deg";
    arrow.style.backgroundColor = "white";
    arrow.style.color = "black";
  } else {
    image.style.display = "block";
    image.style.transitionDuration = "1000ms";
    box.style.backgroundColor = "#fee2e2";
    box.style.paddingInline = "20px";
    box.style.transitionDuration = "500ms";
    arrow.style.rotate = "-45deg";
    arrow.style.transitionDuration = "500ms";
    arrow.style.backgroundColor = "#ed2224";
    arrow.style.color = "white";
  }
}