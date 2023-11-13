var num = 101111;
binario = String(num)

var cont = String(binario).length;

vezes = 0;
var decimal=0;
for(i = cont;i > 0; i--){
    console.log(`${decimal} + 2**${vezes} * ${binario[i-1]}`)
    decimal +=  2 ** vezes * binario[i-1];
    vezes ++

}
console.log(decimal)

