function movies1(input) {
    let movieArr = [];   
    for (let command of input) {
        let commandArr = command.split(' ');
        if (commandArr.includes('addMovie')) {
            commandArr.shift();
            let currMovie = commandArr.join(' ');
            movieArr.push({name : currMovie})
        } else if (commandArr.includes('onDate')) {
            let dateArr = command.split(' onDate ');
            for (let movieInfo of movieArr) {
                if (movieInfo.name === dateArr[0]) {
                    movieInfo.date = dateArr[1];                   
                } 
            }            
        } else if (commandArr.includes('directedBy')) {
            let directorArr = command.split(' directedBy ');
            for (let movieInfo of movieArr) {
                if (movieInfo.name === directorArr[0]) {
                    movieInfo.director = directorArr[1];                   
                } 
            }  
        }
    }
    for (let el of movieArr) {
        if(el.name && el.date && el.director){
            console.log(JSON.stringify(el));
        }
    }

}

movies1([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)