var n1=0;

for(let a = 0;a<=100;a++){

    for(let i = 0;i < a ;i++){

        if(a % i==0){
            n1 += i ;
        }

    }
    if(n1 == a){
        
        console.log(a)
        
    }
    
    n1 = 0




}

