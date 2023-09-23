let escolha = 'pedra'
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




    if(escolha == 'papel' && escolhaPc == 'tesoura' ){

        resultado = 'Computador Ganha'
        console.log(resultado)

    }
    else if(escolha == 'papel' && escolhaPc == 'papel'){
        
        resultado = 'empate'
        console.log(resultado)
    }
    else{
        resultado = 'Usuario ganha'
    }

    if(escolha == 'tesoura' && escolhaPc == 'tesoura' ){

        resultado = 'empate'
        console.log(resultado)

    }
    else if(escolha == 'tesoura' && escolhaPc == 'papel'){
        
        resultado = 'Usuario Ganha'
        console.log(resultado)
    }
    else{
        resultado = 'empate'
    }
}while(resultado == 'empate')
