function sortNumbers(n1,n2,n3) {
    let min = 0;
    let max = 0;
    let mid = 0
    if(n1 > n2 && n1 > n3){
        max = n1;
        if( n2 > n3){
            min = n3;
            mid = n2;        
        }else {
            min = n2;
            mid = n3;
        }
    }else if( n1 > n2 && n1 < n3) {
        mid = n1;
        max = n3;
        min = n2;

    }else if( n1 < n2 && n1 > n3) {
        mid = n1;
        max = n2;
        min = n3
    }else if (n2 > n1 && n2 > n3){
        max = n2;
        if(n1 > n3){
            min = n3;
            mid = n1;
        }else {
            min = n1;
            mid = n3;
        }
    }else if (n3 > n1 && n3 > n2){
        max = n3;
        if(n1> n2){
            mid = n1;
            min = n2;
        }else{
            mid = n2;
            min = n1;
        }
    }
    console.log(max);
    console.log(mid);
    console.log(min)
}
sortNumbers(0,0,2)
