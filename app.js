const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const line1 = document.querySelector(".line1")
    const line2 = document.querySelector(".line2")
    const line3 = document.querySelector(".line3")
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        line1.classList.toggle("line1Toggle")
        line2.classList.toggle("line2Toggle")
        line3.classList.toggle("line3Toggle")
    });
}

navSlide();