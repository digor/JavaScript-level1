var mainPic = document.querySelector('#main').children[0];
var roulette = document.querySelector('#roulette');

roulette.addEventListener('click', (evt) => {
    //console.log(evt);
    if (evt.target.src) {
        mainPic.src = evt.target.src;
    }
});