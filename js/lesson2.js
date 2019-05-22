function game (gamerOpt){

    var pcOpt = Math.round (Math.random () * 2 ) + 1;

    if ((pcOpt == 1 && gamerOpt == 2) || (pcOpt == 3 && gamerOpt == 1) || (pcOpt == 2 && gamerOpt == 3)) {
        document.getElementById("resultGame").innerHTML = "<h2 style='color:green;'>Вы выйграли</h1>";
    } else {
        document.getElementById("resultGame").innerHTML = "<h2 style='color:red;'>Вы програли</h2>";
    }
}

function task3(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var x;

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
    var a = parseInt(document.getElementById("t4").value);

    if (a >= 0 && a <=15) {
        var x;

        switch (a) {
            case 1:
                x = x + '1';
            case 2:
                x = x + ' 2';
            case 3:
                x = x + ' 3';
            case 4:
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
                break;
        }
        document.getElementById("resTask4").innerHTML = "вывод чисел от " + a + " до 15: " + x;
    } else {
        alert('Только цифры от 0 до 15');
    }
}

function addition (a, b){
    return document.getElementById("resTask5").innerHTML = "Сумма: " + (a + b);
}

function minus (a, b){
    return document.getElementById("resTask5").innerHTML = "Вычитание: " + (a - b);
}

function multipl (a, b){
    return document.getElementById("resTask5").innerHTML = "Умножение: " + (a * b);
}

function division (a, b){
    return document.getElementById("resTask5").innerHTML = "Деление: " + (a / b);
}

function mathOperation (a, b, operation){
    switch (operation){
        case 1:
            addition (a, b);
            break;
        case 2:
            minus (a, b);
            break;
        case 3:
            multipl (a, b);
            break;
        case 4:
            division (a, b);
            break;
    }
}

function power (val, pow) {
    var res = val;
    if (pow > 1) {
        res = val * power(val, --pow);
    }
    return document.getElementById("resTask8").innerHTML = + res;
}