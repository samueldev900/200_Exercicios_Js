function estacao(n){
    if (n>=1 && n<=3){

        console.log('A estação do ano é: INVERNO');
    }

    else if(n >=4 && n <= 6){

        console.log('A estacao do ano é: PRIMAVERA');
    }

    else if(n >=7 && n <= 9 ){

        console.log('A estação do  ano é: VERÃO');

    }

    else if(n >= 10 && n <= 12){

        console.log('A estação do ano é: OUTONO');
    }
    
    else{
        console.log('Estação não indentificada!')
    }
}


estacao(30)