var blackChess = ['&#9823;','&#9822','&#9821;','&#9820;','♛','&#9818;'];
var whiteChess = ['&#9817;','&#9816;','&#9815;','&#9814;','♕','&#9812;'];

var chess = document.querySelector('#ches');

var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
var nrRows = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];

clearBoard();

function clearBoard() {
    var c = '';
    for (let i = 0; i < 10; i++) {
        for (let s = 0; s < 10; s++) {
            if (i === 0 || i === 9) {
                c += '<div class="row">' + letters[s] + '</div>';
            }
            else if (s === 0 || s === 9) {
                c += '<div class="row">' + nrRows[i] + '</div>';
            }
            else if (i === 2 || i === 4 || i === 6 || i === 8 || i === 10) {
                if (s === 0 || s === 2 || s === 4 || s === 6 || s === 8 || s === 10) {
                    c += '<div class="row" id="' + letters[s] + nrRows[i] + '"></div>';
                }
                else {
                    c += '<div class="row row_black" id="' + letters[s] + nrRows[i] + '"></div>';
                }
            }
            else {
                if (s === 1 || s === 3 || s === 5 || s === 7 || s === 9) {
                    c += '<div class="row" id="' + letters[s] + nrRows[i] + '"></div>';
                }
                else {
                    c += '<div class="row row_black" id="' + letters[s] + nrRows[i] + '"></div>';
                }
            }
        }
    }
    chess.innerHTML = c;
}

function fillBoard(r, cl) {
    var p = '';
    var bishop = 2;
    if (r === 8) bishop = 7;
    for (let i = 0; i < letters.length; i++) {
        if (i !== 0 || i !== letters.length) {
            if(letters[i] !== ''){
                p = document.querySelector('#' + letters[i] + bishop).innerHTML = colorChess(cl,0);
            }
            switch(letters[i]){
                case 'A':
                case 'H':
                    p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,3);
                    break;
                case 'B':
                case 'G':
                    p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,1);
                    break;
                case 'C':
                case 'F':
                    p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,2);
                    break;
                case 'D':
                    if (cl === 'bl') {
                        if (document.querySelector('#D'+r).classList.contains('row_black')) {
                            //alert('is black');
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,4);
                        } else {
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,5);
                        }
                    } else if (cl === 'wh') {
                        if (document.querySelector('#D'+r).classList.contains('row_black')) {
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,5);
                        } else {
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,4);
                        }
                    }
                    break;
                case 'E':
                    let t = document.querySelector('#D'+r).innerText;
                    //alert(t);
                    //alert(`${whiteChess[4]}`);
                    //if (t !== '') {
                        if (t === whiteChess[4] || t === blackChess[4]) {
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,5);
                        } else {
                            p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,4);
                        }
                    //} else {
                    //    p = document.querySelector('#' + letters[i] + r).innerHTML = colorChess(cl,5);
                    //}
                    break;
            }
        }
    }
}
function colorChess(cl,rw){
    if (cl === 'wh') return whiteChess[rw];
    else if (cl === 'bl') return blackChess[rw];
}
function newGame(){
    clearBoard();
    if (Math.floor(Math.random() * 2) === 0) {
        fillBoard(1,'bl');
        fillBoard(8,'wh');
    } else {
        fillBoard(8,'bl');
        fillBoard(1,'wh');
    }
}