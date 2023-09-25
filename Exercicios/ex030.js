
for(let i = 2;i<=100;i++){
    let contador = 0
    for(let a = 1; a <= i;a++ ){
        if (i % a == 0){
            contador ++
        }
    }

  

    if(contador ==  2){
        console.log(i)
    }
       
    
}