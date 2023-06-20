var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    // auto play
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    // end auto play
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  //kéo xuống header có màu
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  //menu mobile
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
  })

  closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active")
  })



