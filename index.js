const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

const images = [
  "./images/profile.png",
  "./images/profile2.jpg",
  "./images/profile3.jpg"
];

let currentIndex = 0;
const heroImg = document.getElementById("hero-img");

setInterval(() => {
  heroImg.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImg.src = images[currentIndex];
    heroImg.style.opacity = 1;
  }, 1800);
}, 10000);

const text = document.getElementById("hero-tagline");
const letters = text.innerText.split("");

text.innerHTML = letters
  .map((letter, i) => {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${2 + i * 0.04}s">${letter}</span>`;
  })
  .join("");
