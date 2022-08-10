function login(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let correctPass = '';
    let counter = 1;
    let userBlocked = false;
    for (let i = username.length; i >= 0; i--) {
       
        correctPass += username.charAt(i);
        
    }
    while(password !== correctPass ){
        if(counter ===4){
            userBlocked = true;
            break;
        }
        console.log('Incorrect password. Try again.');
        password = input[index];
        index++;
        counter ++;
        

    }
    if(userBlocked){
        console.log(`User ${username} blocked!` )

    }else{
    console.log(`User ${username} logged in.`);
    }


}
login(['Acer','login','go','let me in','recA'])