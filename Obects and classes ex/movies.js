function movies(input) {
    for (let command of input) {
        let commArr = command.split(' ');
        let movie = '';
        let director = '';
        if (commArr.includes('addMovie')) {
            commArr.shift();
            movie = commArr.join(' ');
                        
        } else if (commArr.includes('directedBy')) {
            let index = commArr.indexOf('directedBy');
            movie = commArr.slice(0, index).join(' ');
            director = commArr.slice(index + 1).join(' ');           

        } else {
            let index = commArr.indexOf('onDate');
            movie = commArr.slice(0, index).join(' ');
            date = commArr[commArr.length - 1];           
        }
    }
}
movies([
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