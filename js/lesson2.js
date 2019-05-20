var gamerOpt;
function game (gamerOpt){

    var pcOpt = Math.round (Math.random () * 2 ) + 1;

    if ((pcOpt == 1 && gamerOpt == 2) || (pcOpt == 3 && gamerOpt == 1) || (pcOpt == 2 && gamerOpt == 3)) {
        document.getElementById("resultGame").innerHTML = "<h2 style='color:green;'>Вы выйграли</h1>";
    } else {
        document.getElementById("resultGame").innerHTML = "<h2 style='color:red;'>Вы програли</h2>";
    }
}
function task3(){
    var a = prompt('a = ');
    var b = prompt('b = ');
    a = parseInt(a);
    b = parseInt(b);
    if (a > 0 && b > 0){
        x = a - b;
    } else if (a < 0 && b < 0){
        x = a * b;
    } else if ((a > 0 && b < 0) || (a < 0 && b > 0)){
        x = a + b;
    }
    document.getElementById("resTask3").innerHTML = "x = " + x;
}
function task4() {
    var a = prompt('Введите число от 1 до 15');
    a = parseInt(a);

    if (a > 0 && a <=15) {

        var x;

        switch (a) {
            case 1:
                x = x + '1';
            case 1:
                x = x + ' 1';
            case 2:
                x = x + ' 2';
            case 3:
                x = x + ' 4';
            case 5:
                x = x + ' 5';
            case 6:
                x = x + ' 6';
            case 7:
                x = x + ' 7';
            case 8:
                x = x + ' 8';
            case 9:
                x = x + ' 9';
            case 10:
                x = x + ' 10';
            case 11:
                x = x + ' 11';
            case 12:
                x = x + ' 12';
            case 13:
                x = x + ' 13';
            case 14:
                x = x + ' 14';
            case 15:
                x = x + ' 15';
        }
        document.getElementById("resTask4").innerHTML = "вывод чисел от " + a + " до 15: " + x;
    } else {
        alert('Только цифры от 0 до 15');
    }
}
function task5(){
    var a = prompt('a = ');
    var b = prompt('b = ');
    a = parseInt(a);
    b = parseInt(b);
    var operation = prompt('Выберите тип операции:\n' +
        '1. + \n' +
        '2. - \n' +
        '3. * \n' +
        '4. /');
}