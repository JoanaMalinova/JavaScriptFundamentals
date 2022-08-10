function signCheck(a,b,c) {
   if( (a >=0 && b >= 0 && c >= 0) || ((a <= 0 && b <= 0 && c >= 0 ) 
   || (a <= 0 && c <= 0 && b >= 0)) || (a >= 0 && b <= 0 && c <= 0)) {
        return 'Positive';
   }else {
        return 'Negative';
   }
}