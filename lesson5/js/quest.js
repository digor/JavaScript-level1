var steps = 0, question, m = 0;
//var makedMoves = [];

var elGame = {
    btnStGame: document.querySelector('.stGame'),
    txtAction: document.querySelector('.textAction'),
    userSteps: document.querySelector('.userSteps'),
    action: document.querySelector('.action'),
    answ1: document.querySelector('#answ1'),
    answ2: document.querySelector('#answ2'),
    makedMoves: [],
    imgStep: ['quest_start.jpg','quest-sleep.jpg','quest-walk.jpg','quest-walk.jpg','quest-4.jpg','quest-5.jpg',
        'quest-lemne.jpg','quest-7.jpg','quest-walk.jpg','quest-sleep.jpg','quest-1.jpg','quest-sezi.jpg'
        ,'quest-1.jpg','quest-13.jpg','quest-14.jpg','quest-sleep.jpg'],
    gameOn: function () {
        elGame.btnStGame.classList.add('hideBlock'),
        elGame.txtAction.classList.remove('hideBlock'),
        //elGame.userSteps.classList.remove('hideBlock'),
        elGame.action.classList.remove('hideBlock')
    },
    gameOff: function () {
        elGame.btnStGame.classList.remove('hideBlock'),
        elGame.txtAction.classList.add('hideBlock'),
        elGame.userSteps.classList.add('hideBlock'),
        elGame.action.classList.add('hideBlock')
    }
};

function stGame(n) {
    question = works[n];


    document.getElementById("urlImg").src= 'img/' + elGame.imgStep[n];

    let st = (steps !== 0) ? 'шаги: ' + steps : '';


    elGame.gameOn();

    elGame.txtAction.innerText = question.text;
    elGame.answ1.innerText = question.answer[1].slice(4);
    elGame.answ2.innerText = question.answer[2].slice(4);

    total();
}

function getAnsw(answ) {
    if (answ === 1111) {
        elGame.gameOff();
        document.getElementById("urlImg").src='img/the_quest.jpg';
    } else if (answ === 1 || answ === 2) {
        ++steps;
        elGame.makedMoves.push(steps + '. ' + question.answer[answ].slice(4));
        stGame(question.jump[answ]);
    } else {
        alert('Select 1 or 2');
        stGame(n);
    }
}

function total() {
    let movs = '';

    for (let el = elGame.makedMoves.length - 10; el < elGame.makedMoves.length; el++ ) {
        //alert(el);
            if(el < 0) movs += '';
            else {
                elGame.userSteps.classList.remove('hideBlock');
                movs += elGame.makedMoves[el];
            }
        }

    elGame.userSteps.innerText = movs;
}


