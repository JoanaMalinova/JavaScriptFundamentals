function spiceMustFlow(yield){
    let days = 0; 
    let spice =0;  

    while(yield >= 100){  
        days += 1;   
        spice += yield;
        if(spice > 26) {        
            spice -= 26; 
        }else {
            spice = 0;
        }
        yield -= 10; 

    }
    if(spice > 26) {        
        spice -= 26; 
    }else {
        spice = 0;
    }
    
    console.log(days)
    console.log(spice)

}
spiceMustFlow(450)
