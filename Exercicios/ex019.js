function limite(n,li,ls){

    if(n >= li && n <= ls){
        console.log(`o número ${n} está dentro do intervalo determinado`);
    }
    else{
        console.log(`O numero ${n} está fora do intervalo determinado`)
    }
}

limite(20,4,10);