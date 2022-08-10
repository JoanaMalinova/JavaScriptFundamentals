function vacation(group,type,day){
    let price = 0;
    let total = 0;

    switch(type){
        case 'Students':
            switch(day) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.8;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            total = group * price;
            if (group >= 30){
                total -= 0.15 * total;
            }
            break;
        case 'Business':
            switch(day) {
                case 'Friday':
                    price = 10.9;
                    break;
                case 'Saturday':
                    price = 15.6;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            total = group * price;
            if(group >= 100) {
                total -= 10 * price;
            }
            break;
        case 'Regular':
            switch(day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.5;
                    break;
            }
            total = group * price;
            if(group >= 10 && group <= 20){
                total -= total * 0.05;
            }
            break;
            
    }
    console.log(`Total price: ${total.toFixed(2)}`)

}
vacation(40,
    "Regular",
    "Saturday"
    
    )