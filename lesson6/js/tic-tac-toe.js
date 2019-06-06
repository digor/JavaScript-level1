var ticTacToe = {
    board: document.querySelector('.board'),
    player: document.querySelector('.winGamer'),
    turn: true, // true - X, false - O
    createBoard: () => {
        let newTable = '';
        for (let i = 0; i < 3; i++) {
            let newRow = '';
            for (let j = 0; j < 3; j++) {
                newRow += `<div class="cell"><div class="inner-cell" data-x="${i}" data-y="${j}"></div></div>`;
            }
            newTable += newRow;
        }
        ticTacToe.board.innerHTML = newTable;
        ticTacToe.board.addEventListener('click', (evt) => {
            //console.log(evt);
            if (evt.target.dataset.x) {
                ticTacToe.tableClick(evt.target, evt.target.dataset.x, evt.target.dataset.y);
            }
        });
    },
    tableClick: (obj, x, y) => {
        if (!obj.innerHTML) {
            // alert(x,y + ' - ' + obj.innerHTML);
            obj.innerHTML = ticTacToe.turn ? 'X' : 'O';
            ticTacToe.turn = !ticTacToe.turn;
            console.log(x,y);
        }
        ticTacToe.drawGame(); // в случаи ничьи )))
        ticTacToe.checkWinner('X');
        ticTacToe.checkWinner('O');

    },
    checkWinner: (opt) => {
        if ((ticTacToe.checkMoves(0, 0) === opt && ticTacToe.checkMoves(0, 1) === opt && ticTacToe.checkMoves(0, 2) === opt)
            || (ticTacToe.checkMoves(1, 0) === opt && ticTacToe.checkMoves(1, 1) === opt && ticTacToe.checkMoves(1, 2) === opt)
            || (ticTacToe.checkMoves(2, 0) === opt && ticTacToe.checkMoves(2, 1) === opt && ticTacToe.checkMoves(2, 2) === opt)
            || (ticTacToe.checkMoves(0, 0) === opt && ticTacToe.checkMoves(1, 0) === opt && ticTacToe.checkMoves(2, 0) === opt)
            || (ticTacToe.checkMoves(0, 1) === opt && ticTacToe.checkMoves(1, 1) === opt && ticTacToe.checkMoves(2, 1) === opt)
            || (ticTacToe.checkMoves(0, 2) === opt && ticTacToe.checkMoves(1, 2) === opt && ticTacToe.checkMoves(2, 2) === opt)
            || (ticTacToe.checkMoves(0, 2) === opt && ticTacToe.checkMoves(1, 1) === opt && ticTacToe.checkMoves(2, 0) === opt)
            || (ticTacToe.checkMoves(0, 0) === opt && ticTacToe.checkMoves(1, 1) === opt && ticTacToe.checkMoves(2, 2) === opt)) {
            ticTacToe.player.innerHTML = `${opt} winner!`;
        }
    },
    checkMoves: (x, y) => {
        return document.querySelector(`[data-x="${x}"][data-y="${y}"]`).innerHTML;
    },
    drawGame: () => {
        let draw = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!document.querySelector(`[data-x="${i}"][data-y="${j}"]`).innerHTML) draw++;
            }
        }
        if(draw === 0) ticTacToe.player.innerHTML = `ничья`;
    },
    newGame: () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.querySelector(`[data-x="${i}"][data-y="${j}"]`).innerHTML = '';
            }
        }
        ticTacToe.turn = true;
        ticTacToe.player.innerHTML = '';
    }
};
ticTacToe.createBoard();
