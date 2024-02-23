// Optional if you want to handle hover in JS
const orbitContainer = document.querySelector('.orbit-container');
const orbitingImg = document.querySelector('.orbiting-img');

orbitContainer.addEventListener('mouseenter', () => {
  orbitingImg.style.animationPlayState = 'running';
});

orbitContainer.addEventListener('mouseleave', () => {
  orbitingImg.style.animationPlayState = 'paused';
});
