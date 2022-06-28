const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )
    })
})
console.log("starting next task")