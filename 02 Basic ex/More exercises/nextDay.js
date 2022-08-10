function nextDAy(year,month,day) {    
    let date = new Date(year, month - 1)
    year = date.getFullYear(year);
    if (month === 12) {
        if(day === 31){
            year += 1;
            month = 1;
        }else {
            day+=1;
        }
    }else if ((month === 1 || month === 3 || month === 5 || month === 7 || month ===8 || month === 10) && day === 31 ){
        month += 1;
        day = 1;
    }else if ((month === 4 || month === 6 || month === 9 || month === 11)&& day === 30){
        month += 1;
        day = 1;
    }else if( month === 2 && day === 29){
        month += 1;
        day = 1;
    }else {
        day += 1;        
    }
    console.log(year + '-'+month +'-'+ day)
}
nextDAy(1, 1, 1)