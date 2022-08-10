function triangleOfNumbers(n) {
    
    for (let i = 1; i <= n ; i++) { 
        let println = '';       
      for (let j = 1; j <= i ; j++) {
         println += i + ' ';
      }
      console.log(println);
              
    }


}
triangleOfNumbers(5)