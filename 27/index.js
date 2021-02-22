const slider = document.querySelector(".items");
let isDown = false // variavel para saber se estou clicando
let startX;
let scrollleft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollleft = slider.scrollLeft;
})
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const mover = (x - startX) * 3;
    slider.scrollLeft = scrollleft - mover;
    
})
