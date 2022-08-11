import './style.css'
import { gsap } from 'gsap';
const asterisk = document.querySelector(".asterisk");

const tl = gsap.timeline();
tl.from('.animated-text', {
    translateY: 200,
    skewY: 10,
    duration: 1,
    stagger: 0.2,
})

// listen for mouse move
window.addEventListener('mousemove', (e) => {
    // rotate the main image
    asterisk.style.transform = `rotate(${e.clientX}deg)`;
})