const element = document.querySelector('.fa-bars');
const menuHTML = document.querySelector('.menu__ul-responsive');
let cound = 0;

const inicioHTML = document.querySelector('.inicioA');
const tituloHTML = document.querySelector('.tituloA');
const cronoHTML = document.querySelector('.cronoA');
const creadorHTML = document.querySelector('.creatorA');
const pieHTML = document.querySelector('.pieA');

element.addEventListener('click', () => {
    if ( cound === 0 ){
        menuHTML.setAttribute('style', 'margin: 0');
        cound += 1;
    }else if ( cound !== 0){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }
});

inicioHTML.addEventListener('click', () => {
    if( cound !== 0 ){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }else{
        return;
    }
});

tituloHTML.addEventListener('click', () => {
    if( cound !== 0 ){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }else{
        return;
    }
});

cronoHTML.addEventListener('click', () => {
    if( cound !== 0 ){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }else{
        return;
    }
});

creadorHTML.addEventListener('click', () => {
    if( cound !== 0 ){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }else{
        return;
    }
});

pieHTML.addEventListener('click', () => {
    if( cound !== 0 ){
        menuHTML.setAttribute('style', 'margin: -1000');
        cound = 0;
    }else{
        return;
    }
});