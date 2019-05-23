var basket = [];
function showBasket (){
    generateBasket();

    console.log(basket);

    console.log ('==== 3 metods of calc ======');

    console.log ('==== cicle FOR ======');
    console.log(forFunc ());

    console.log ('==== cicle FOREACH ======');
    console.log(forFunc ());

    console.log ('==== cicle FOR with i++ ======');
    console.log(forSimpleFunc ());
}

function forSimpleFunc () {
    var summ = 0;
    for (var i = 0; i < basket.length; i++) {
        summ += basket[i][1];
    }
    console.log (summ);
}

function forFunc () {
    var summ = 0;
    for (let item of basket) {
        summ += item[1];
    }
    console.log (summ);
}

function forEachFunc () {
    var summ = 0;
    basket.forEach (function (item) {
        summ += item[1];
    });
    console.log (summ);
}

function generateBasket () {
    for (var i =0; i < 10; i++) {
        basket.push ([]);
        for (var j = 0; j < 3; j++) {
            if  (j == 0) {
                basket[i].push ('Order ' + (i + 1));
            } else if (j == 1) {
                basket[i].push (randomPrite());
            }
        }
    }
}

function randomPrite () {
    return Math.floor (Math.random () * Math.floor (1000));
}