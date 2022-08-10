function comments(input) {
    let commentSection = {
        users: [],
        articles: []
    };
    for (let currLine of input) {
        if (currLine.includes('user')) {
            let split = currLine.split(' ');
            let userName = split[1];
            commentSection.users.push(userName);
        } else if (currLine.includes('article')) {
            let split = currLine.split(' ');
            let articleNAme = split[1]
            commentSection.articles.push(articleNAme);
        } else {
            let [usernameArticle, comment] = currLine.split(': ');
            let [username, article] = usernameArticle.split(' posts on ');
            if (commentSection.users.includes(username) && commentSection.articles.includes(article)) {
                let commentArr = comment.split(', ');
                let realComment = commentArr.join(' - ')
                if (commentSection.hasOwnProperty(article)) {
                    if(commentSection[article].hasOwnProperty(username)){
                        let oldComment = commentSection[article][username];
                        commentSection[article][username] = oldComment + '~' + realComment;
                    }else{
                        commentSection[article][username] = realComment;                    }
                   
                } else {
                    commentSection[article] = { [username]: realComment };
                }
            }
        }
    }
    delete commentSection.users;
    delete commentSection.articles;
    let entries = Object.entries(commentSection);
    let sortedByCommentCount = entries.sort(([keyA, valueA], [keyb, valueB]) => { return Object.keys(valueB).length - Object.keys(valueA).length });
    for (let [articleName, comments] of sortedByCommentCount) {
        console.log(`Comments on ${articleName}`);
        let commentsEntries = Object.entries(comments);
        let sortedComments = commentsEntries.sort(([keyA, valueA], [keyB, valueB]) => {
            return keyA.localeCompare((keyB))
        });
        for (let [username, comment] of sortedComments) {
            if (comment.includes('~')){
                let comments = comment.split('~');
                for (let current of comments) {
                    console.log(`--- From user ${username}: ${current}`);
                }
            }else{
                console.log(`--- From user ${username}: ${comment}`);
            }           
        }
    } 
}
comments(['user Mark','article someArticle ', 'Mark posts on someArticle: NoTitle, stupidComment', 
'Mark posts on someArticle: Bla, blabla'  
 ]);