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

// Collections section timer countdowm
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

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(countDate);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

const product = document.querySelector(".product");
const anim = document.querySelectorAll("#anim");
console.log(anim);

const removeClass = (element) => {
  element.forEach((e) => {});
};

product.addEventListener("mouseover", () => {
  anim.forEach((a) => {
    // a.classList.remove("anim-hidden")
    a.classList.add("anim-show");
  });
});
