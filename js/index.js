// // Your code goes here
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
// }
// document.querySelector('a').addEventListener('click', clickEventHandler)
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)

const logoH = document.querySelector(".logo-heading");
logoH.addEventListener("mouseenter", () => {
    logoH.style.transform = "scale(1.2)";
    logoH.style.transition = "all 0.3s";
})

logoH.addEventListener("mouseleave", () => {
    logoH.style.transform = "scale(1)";
})


const body = document.querySelector("body");

body.addEventListener('click', () => {
    body.style.backgroundColor = "papayawhip";

});
const header = document.querySelector("header");

header.addEventListener('click', () => {
    header.style.backgroundColor = "rebeccapurple";

});


const busImage = document.querySelector(".busimg");

busImage.addEventListener('dblclick', () => {
    busImage.style.transform = "scale(1.2)";
});


document.addEventListener('keydown', (event) => {
    if (event.key === 's' && event.ctrlKey) {
        alert('Save Succseful')
    }
});

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.map');
el.onwheel = zoom;


window.addEventListener('load', (event) => {
    alert('loaded page')
    console.log('page is fully loaded');
});



const form = document.querySelector('#homeLink');

form.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
    event.target.style.background = 'black';
}, true);

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    button.innerHTML = `Click count: ${event.detail}`;
});

const stopNav = document.querySelector("nav");

stopNav.addEventListener("click", (event) => {
    console.log("stopped link");

    event.preventDefault();
});