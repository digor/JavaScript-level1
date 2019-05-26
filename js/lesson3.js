function task1() {
    var arr= [];
    var nr = 0;
    while (nr <= 100) {
        var prNr = false;
        if (nr == 2) {
            arr.push(nr);
        }
        for (var i = 2; i <= nr; i++){
            if (nr % i == 0) {
                break;
            } else {
                prNr = true;
            }
           // (nr % i) === 0 ? break : prNr = true;
        }
        if (prNr){
            arr.push(nr);
        }
        nr++;
    }
    console.log (arr);
}
function task4() {
    for (var i = 0; i <= 9; console.log (i++)){}
}
function task5() {
    var piramid = 'x';
    var space = Math.floor(21 / 2)
    alert(space);
    for (var i = 1; i <= 21; i++){
        console.log(piramid);
        piramid +='x';
    }
}
task5();