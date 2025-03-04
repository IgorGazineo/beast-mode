function add(n1, n2) {
    return n1 + n2;
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 5, function (num) {
    console.log(num);
});
/*
Aula - 29

teste a função "addAndHandle" executando-a, passando como primeiro argumento o valor 10 e
como segundo o valor 5.

como terceiro uma função que contém um parâmetro "result" e exibe o resultado de
"result" em um console.log.
*/
