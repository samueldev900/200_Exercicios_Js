function CalcularImc(peso,altura){

   var n = peso / (altura * altura);

    if( n < 18.5){

        console.log('Abaixo do peso, IMC:' + n);
    }

    else if (n >= 18.5 && n < 25){

        console.log('Peso normal, Seu IMC: ' + n)

    }

    else if(n >= 25  && n < 30){

        console.log('Acima do Peso. IMC:' + n);
    }

    else{

        console.log('Obesidade, IMC: ', + n );
    }

}


CalcularImc(60,1.5)