const menu = document.querySelector('#menu');
const cross = document.querySelector('#cross');
const head = document.querySelector('#head');


menu.addEventListener('click', function(){
    head.classList.add('open');

    cross.addEventListener('click', function(){

        head.classList.replace('open', 'head')
    })
})