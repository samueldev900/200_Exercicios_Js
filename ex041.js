function binario(num){
    result = "";
    x9 = num;
    do{
        result = result + num%2;
        num = Math.floor(num/2)
        
    }while(num > 0);
    console.log(`O numero decimal é ${x9} e o Binário é ${result.split("").reverse().join("")}`)
}

var contador = 100;
while(contador > 0){
    binario(contador)
    contador = contador - 1;

}