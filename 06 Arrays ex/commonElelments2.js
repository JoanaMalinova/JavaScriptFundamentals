function commonElements2(array1,array2){
    for (const element of array1) {
        if(array2.includes(element)){
            console.log(element)
        }
        
    }
}
commonElements2()