let escolha = 'tesoura'
let escolhaPc;
let resultado = 'empate';


do {
    escolhaPc =  Math.floor(Math.random() * 3 + 1)
    switch(escolhaPc){

        case 1:
            escolhaPc = 'pedra'
            break
        case 2:
            escolhaPc = 'papel'
            break
        case 3:
            escolhaPc = 'tesoura'
            break
    }

    if(escolha == 'pedra' && escolhaPc == 'tesoura' ){

        resultado = 'Usuário Ganha'
        console.log(resultado)

    }
    else if(escolha == 'pedra' && escolhaPc == 'papel'){
        
        resultado = 'Computador Ganha'
        console.log(resultado)
    }
    else{
        resultado = 'empate'
    }
}while(resultado == 'empate')
