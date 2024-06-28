const block = document.querySelector('.main');
const text = document.querySelectorAll('.text');

const originalShadow = "0px 2px 3px rgba(0, 0, 0, 0.6)";

block.addEventListener('mousemove', function(e) {
  const tiltAmount = 70;
  const shadowStrength = 10;
  const tiltX = (e.clientX / window.innerWidth - 0.5) * tiltAmount;
  const tiltY = (e.clientY / window.innerHeight - 0.6) * tiltAmount*2;
  text.forEach(text => {
  const shadowY = (e.clientY / window.innerHeight - 0.4) * shadowStrength;
  const shadowX = (e.clientX / window.innerWidth - 0.5) * -shadowStrength;

  text.style.textShadow = `${shadowX}px ${shadowY}px 3px rgba(0, 0, 0, 0.6)`;
  });
  block.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
});

block.addEventListener('mouseleave', function() {
  block.style.transform = 'none';
  text.forEach(text => {
  text.style.textShadow = originalShadow;
  });
});