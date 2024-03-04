// Hero Section cursole
class Slider {
  constructor(target) {
    this.carouselOuter = document.querySelector(target);
    this.carouselInner = this.carouselOuter.querySelector(".carousel-inner");
    this.prev = this.carouselOuter.querySelector(".prev");
    this.next = this.carouselOuter.querySelector(".next");
    this.slideIndex = 1;

    // initial styles
    this.carouselInner.setAttribute(`data-transformX`, 0);
    this.prev.setAttribute("disabled", true);
    if (this.carouselInner.children.length == 1)
      this.next.setAttribute("disabled", true);

    // prev handler
    this.prev.addEventListener("click", () => {
      this.changeSlide("prev");
      this.slideIndex--;

      if (this.slideIndex === 1) {
        this.prev.setAttribute("disabled", true);
      }

      this.next.removeAttribute("disabled");
    });

    // next handler
    this.next.addEventListener("click", () => {
      this.changeSlide("next");
      this.slideIndex++;

      if (this.slideIndex === this.carouselInner.children.length) {
        this.next.setAttribute("disabled", true);
      }

      this.prev.removeAttribute("disabled");
    });
  }

  changeSlide = (direction) => {
    let transformX = Number(this.carouselInner.getAttribute("data-transformX"));

    if (direction === "prev") {
      transformX += this.carouselInner.offsetWidth;
    } else {
      transformX -= this.carouselInner.offsetWidth;
    }

    this.carouselInner.style.transform = `translateX(${transformX}px)`;
    this.carouselInner.setAttribute(`data-transformX`, transformX);
  };
}

const slider = new Slider(".carousel");

// Collections section countdowm
const countDownDate = new Date("March 24, 2024 14:29:20").getTime();

const countDate = setInterval(() => {
  let presentDay = new Date().getTime();
  let timeLeft = countDownDate - presentDay;

  // Calculate the day hours minutes seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Assign the days hours minutes and seconds
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Print the days hours minutes and seconds in html
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(countDate);
    daysElement.innerHTML = "0";
    hoursElement.innerHTML = "0";
    minutesElement.innerHTML = "0";
    secondsElement.innerHTML = "0";
  }
}, 1000);

// product menu navigation
const recentProduct = document.getElementById("recent");
const popularProduct = document.getElementById("popular");
const topProduct = document.getElementById("top");

// assing product tab
const firstTab = document.querySelector(".product-tab-pane");
const secondTab = document.querySelector(".product-tab-pane2");
const thirdTab = document.querySelector(".product-tab-pane3");

// Recent products events
recentProduct.addEventListener("click", () => {
  popularProduct.classList.remove("active");
  topProduct.classList.remove("active");
  recentProduct.classList.add("active");
  firstTab.style.display = "block";
  secondTab.style.display = "none";
  thirdTab.style.display = "none";
});

// popular products events
popularProduct.addEventListener("click", () => {
  recentProduct.classList.remove("active");
  topProduct.classList.remove("active");
  popularProduct.classList.add("active");
  secondTab.style.display = "block";
  firstTab.style.display = "none";
  thirdTab.style.display = "none";
});

// top Product events
topProduct.addEventListener("click", () => {
  popularProduct.classList.remove("active");
  recentProduct.classList.remove("active");
  topProduct.classList.add("active");
  firstTab.style.display = "none";
  secondTab.style.display = "none";
  thirdTab.style.display = "block";
});

// Popular products section Image Slider
const mainContent = document.querySelector(".main-content");
const items = Array.from(mainContent.children);
const dotsNav = document.querySelector(".pagination");
const dots = Array.from(dotsNav.children);

const itemsWidth = items[0].getBoundingClientRect().width;
console.log(itemsWidth);

// items[0].style.transform = `translateX(-382px)`;
// items[1].style.transform = `translateX(-382px)`;
// items[2].style.transform = `translateX(-382px)`;
// items[3].style.transform = `translateX(-382px)`;
// items[4].style.transform = `translateX(-761px)`;
// items[5].style.transform = `translateX(-1140px)`;

dots[0].addEventListener("click", () => {
  dots[0].classList.add("pagination-active");
  dots[1].classList.remove("pagination-active");
  dots[2].classList.remove("pagination-active");
  dots[3].classList.remove("pagination-active");

  items[0].style.transform = `translateX(0px)`;
  items[1].style.transform = `translateX(0px)`;
  items[2].style.transform = `translateX(0px)`;
  items[3].style.transform = `translateX(0px)`;
  items[4].style.transform = `translateX(0px)`;
  items[5].style.transform = `translateX(0px)`;
});

dots[1].addEventListener("click", () => {
  dots[0].classList.remove("pagination-active");
  dots[1].classList.add("pagination-active");
  dots[2].classList.remove("pagination-active");
  dots[3].classList.remove("pagination-active");

  items[0].style.transform = `translateX(-382px)`;
  items[1].style.transform = `translateX(-382px)`;
  items[2].style.transform = `translateX(-382px)`;
  items[3].style.transform = `translateX(-382px)`;
  items[4].style.transform = `translateX(0px)`;
});

dots[2].addEventListener("click", () => {
  dots[0].classList.remove("pagination-active");
  dots[1].classList.remove("pagination-active");
  dots[2].classList.add("pagination-active");
  dots[3].classList.remove("pagination-active");

  items[0].style.transform = `translateX(-761px)`;
  items[1].style.transform = `translateX(-761px)`;
  items[2].style.transform = `translateX(-761px)`;
  items[3].style.transform = `translateX(-761px)`;
  items[4].style.transform = `translateX(-761px)`;
  items[5].style.transform = `translateX(0px)`;
});

dots[3].addEventListener("click", () => {
  dots[0].classList.remove("pagination-active");
  dots[1].classList.remove("pagination-active");
  dots[2].classList.remove("pagination-active");
  dots[3].classList.add("pagination-active");

  items[0].style.transform = `translateX(-1137px)`;
  items[1].style.transform = `translateX(-1137px)`;
  items[2].style.transform = `translateX(-1137px)`;
  items[3].style.transform = `translateX(-1137px)`;
  items[4].style.transform = `translateX(-1137px)`;
  items[5].style.transform = `translateX(-1137px)`;
});
