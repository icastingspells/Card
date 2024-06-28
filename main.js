const block = document.querySelector('.main');
const text = document.querySelectorAll('.text');
const tiltAmount = 70;
const shadowStrength = 10;
const originalShadow = "0px 2px 3px rgba(0, 0, 0, 0.6)";
const originalTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";

let tiltX = 0;
let tiltY = 0;
let shadowX = 0;
let shadowY = 0;

this.addEventListener('mousemove', function(e) {
    updateTiltAndShadow(e);
    
});

animate();

function updateTransform() {
    block.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    text.forEach(text => {
    text.style.textShadow = `${shadowX}px ${shadowY}px 3px rgba(0, 0, 0, 0.6)`;
    });
    
}
  
  function updateTiltAndShadow(e) {
    tiltX = (e.clientX / window.innerWidth - 0.5) * tiltAmount;
    tiltY = (e.clientY / window.innerHeight - 0.6) * tiltAmount*2;
    shadowY = (e.clientY / window.innerHeight - 0.4) * shadowStrength;
    shadowX = (e.clientX / window.innerWidth - 0.5) * -shadowStrength;
  }
  
  function animate() {
    
    requestAnimationFrame(animate);
    updateTransform();
    
  }
 
  this.addEventListener('mouseleave', function() {
    console.log("1");
    block.style.transform = "none";
    text.forEach(text => {
    text.style.textShadow = "0px 2px 3px rgba(0, 0, 0, 0.6)";
    });
  });
  