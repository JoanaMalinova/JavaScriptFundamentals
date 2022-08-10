function matchDates(input){
    let text = input.toString();
    let pattern =/\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
       while((current = pattern.exec(text)) !== null){        
        let day = current.groups['day'] ;
        let month = current.groups['month'];
        let year = current.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }   
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])