let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
  const slides = document.querySelectorAll('.slides img');
  if (index >= slides.length - 1) {
    slideIndex = slides.length - 2;
  } else if (index < 0) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlides(slideIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlides(slideIndex + 1);
});
