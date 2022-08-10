function addAndSubtract(n1,n2,n3){
   let add = (x,y) => x + y;

   let subtract = (x,y,z) => add(x,y) - z;      
    
   let result = subtract(n1,n2,n3);
   return result;
}
