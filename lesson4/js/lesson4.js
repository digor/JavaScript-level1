function task1(){
    var num = {
        number: +prompt("Введите число от 0 до 999"),
        hundreds: 0,
        tens: 0,
        units: 0
    }

    if(num.number <= 0 || num.number >= 999) {
        console.log('Число ' + num.number + ' не в диапазоне от 0 до 999');
        num.number = 0;
    }
    else{
        num.hundreds = Math.floor(num.number / 100 % 10);
        num.tens = Math.floor(num.number / 10 % 10);
        num.units = Math.floor(num.number % 10);
        console.log('Вы ввели число: ' + num.number);
    }
    console.log(
        'сотни: ' + num.hundreds +
        '\nдесятки: ' + num.tens +
        '\nединицы: ' + num.units);
    console.log(num);
}