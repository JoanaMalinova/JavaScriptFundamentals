function sortAnArrayBy2Criteria(array) {
    let newArr = array.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length
        } else {
           return a.localeCompare(b)
        }
    })
    console.log(newArr.join('\n'))
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])