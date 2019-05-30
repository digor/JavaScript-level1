var steps = 0, question, answ;
var makedMoves = [];

function stGame(n) {
    question = works[n];

    let st = (steps !== 0) ? 'шаги: ' + steps : '';

    answ = +prompt(question.text + '\n' + selectMoves(n) + '\n ' + st);

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
    let moves = '';

    for (let key in question.answer) {
        moves += question.answer[key];
    }
    moves += '1111 - Выйти из игры';
    return moves;
}

//stGame(0);
