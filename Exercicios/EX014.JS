function anoBisexto(ano){

    if(ano % 4==0 && ano% 100!= 0 || ano % 400 ==0 ){

        console.log(ano + ' O ano é Bisexto')

    }
    else{

        console.log(ano + ' Não é ano Bisexto')

    }

}


anoBisexto(2100);