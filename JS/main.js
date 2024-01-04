let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '40px',
        duration: 2050,
        delay: 200,
        reset: true
    }
);

sr.reveal('.home-text',{origin: 'top'});
sr.reveal('.home-image',{origin: 'top'});