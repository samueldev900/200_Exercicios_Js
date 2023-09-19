function podeVotar(num){

    if(num > 18 && num < 70){
        console.log('Voto Obrigatório, Idade:' + num);
    }

    else if (num >= 16 && num < 18 || num >= 70){
        console.log('Voto Facultativo, Idade:' + num)
    }

    else{
        console.log('Voto proibido, Idade: ' + num)
    }
}


podeVotar(70)

// obrigatoris entre 18 e 70
// facultativo 16, 17 e acima de 70 
// menores de 16 nao votam