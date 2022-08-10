function meetings(input) {
    let schedule = {};
    for (const appointmentRequest of input) {
        let [weekDay, name] = appointmentRequest.split(' ');
        if(schedule.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`)
        }else{
            console.log(`Scheduled for ${weekDay}`)
            schedule[weekDay] = name;
        }    
    }
    for (let[key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`)
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)

