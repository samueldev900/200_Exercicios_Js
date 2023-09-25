function detran(idade){

    if(idade >= 18){

        console.log(`Sua idade é: ${idade} anos, Parabéns você já pode dar entrada na sua CNH.`)

    }
    else{

        console.log(`Sua idade é:  ${idade} anos, Você ainda não tem idade para dirigir.`)
    }

}

detran(15);
detran(18);