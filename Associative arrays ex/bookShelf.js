function bookShelf(input) {
    let shelf = {};
    for (let currLine of input) {
        if(currLine.includes('->')){
            let [shelfId, shelfGenre] = currLine.split(' -> ');            
            if(!shelf[shelfId]) {
                shelf[shelfId] = {genre: shelfGenre};
            }
        }else{
            let[bookName, authorGenre] = currLine.split(': ');
            let [author, bookGenre] = authorGenre.split(', ');
            let shelfEntries = Object.entries(shelf);
            for (let [id, bookInfo] of shelfEntries) {
                if(bookInfo.genre === bookGenre){
                    if(shelf[id].books){
                        shelf[id].books[bookName] = author;
                    }else{
                        shelf[id].books = {[bookName] : author}
                    }
                }
            }
        }
    }
    let shelfEntries = Object.entries(shelf);
    let sortedByCountOfBooks = shelfEntries.sort(([idA, bookInfoA], [idB, bookInfoB]) =>
     { return Object.keys(bookInfoB.books).length - Object.keys(bookInfoA.books).length});

    for (let [id,bookInfo] of sortedByCountOfBooks) {        
        let shelfGenre = bookInfo.genre;
        delete shelf[id].books.genre;
        let bookEntries =Object.entries(bookInfo.books);
        let sortedByTitle = bookEntries.sort(([bookA, authorA], [bookB, AuthorB]) => {
            return bookA.localeCompare(bookB)
        })       
        console.log(`${id} ${shelfGenre}: ${bookEntries.length}`);
        sortedByTitle.forEach( element => { console.log(`--> ${element[0]}: ${element[1]}`)});     
        
    }
}
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
 '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
   'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']
)