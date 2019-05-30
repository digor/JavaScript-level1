var steps = 0, question;
var makedMoves = [];

var elGame = {
    btnStGame: document.querySelector('.stGame'),
    btnExitGame: document.querySelector('.exitGame'),
    txtAction: document.querySelector('.textAction'),
    action: document.querySelector('.action')
};

function stGame(n) {
    question = works[n];

    let st = (steps !== 0) ? 'шаги: ' + steps : '';

    // show hidden elements of game
    elGame.btnStGame.classList.add('hideBlock');
    elGame.btnExitGame.classList.remove('hideBlock');
    elGame.txtAction.classList.remove('hideBlock');
    elGame.action.classList.remove('hideBlock');

    elGame.txtAction.innerText = question.text;

    var newDiv = document.createElement('div');
    newDiv.innerHTML = 'some text';
    elGame.action.appendChild(selectMoves(n));
    /*newDiv.innerHTML = 'some text2';
    elGame.action.insertAdjacentHTML('beforeend', newDiv);
    newDiv.innerHTML = 'some text3';
    elGame.action.insertAdjacentHTML('beforeend', newDiv);*/

    let ms = selectMoves(n);
    alert(ms);
    action.appendChild(ms);

    //answ = +prompt(question.text + '\n' + selectMoves(n) + '\n ' + st);

}

function getAnsw(answ) {
    if (answ === 1111) {
        total();
    } else if (answ === 1 || answ === 2) {
        ++steps;
        makedMoves.push(question.answer[answ]);
        stGame(question.jump[answ]);
    } else {
        alert('Select 1 or 2');
        stGame(n);
    }
}

function total() {
    let movs = '';

    for (let el in makedMoves) {
        movs += makedMoves[el];
    }
    alert(movs + '\nшаги: ' + steps);
}

function selectMoves(n) {
    let moves = document.createElement("template");

    let el = document.createElement('div');

    for (let key in question.answer) {

        el.innerText = question.answer[key];
        moves += el;
    }

    return moves;
}

//stGame(0);
