function cardGame(input) {
    let game = {};
   for (let line of input) {
     let [name, cards] = line.split(': ');
     if(game.hasOwnProperty(name)){
        let toPush = cards.split(', ')
        game[name].push(...toPush);
     }else{
        game[name] = cards.split(', ');
     }        
   }
   function sameRemover(array) {
      let filtered = [];
      for (let current of array) {
         if(filtered.includes(current)){
            continue;
         }else{
            filtered.push(current);
         }
      }
      return filtered;
   }   
   let typeMap = new Map();
   typeMap.set('S', 4);
   typeMap.set('H', 3);
   typeMap.set('D', 2);
   typeMap.set('C', 1);
   let powerMap = new Map();
   powerMap.set('J', 11);
   powerMap.set('Q', 12);
   powerMap.set('K', 13);
   powerMap.set('A', 14);
   let entries = Object.entries(game);
   for (let [key, value] of entries) {    
        let resultValue = sameRemover(value);
        let cardPower ='';       
            let cardType = '';
            let totalPoints = 0;
        for (let card of resultValue) {            
            if (card.length === 2){
            [cardPower, cardType] = card.split('');           
            }else {
                cardType = card[2];
                cardPower = card[0] + card[1];               
            }
            if(Number(cardPower)){
                totalPoints += typeMap.get(cardType) * cardPower;
            }else{
                totalPoints += typeMap.get(cardType) * powerMap.get(cardPower);
            }
            
        }
        console.log(`${key}: ${totalPoints}`);    
   }         
}
cardGame(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
        ]
        
    
    )