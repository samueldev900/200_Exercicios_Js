function binario(num){
    result = "";
    do{
        console.log(num)
        result = result + num%2;
        num = Math.floor(num/2)
        
    }while(num > 0);
    console.log(`O numero Binário é ${result.split("").reverse().join("")}`)
}

var contador = 10;
binario(25)
while(100 > 10){

    console.log(binario(contador))
    contador = contador - 1;

}