// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


const request = fakeRequestPromise('yelp.com/api/coffee')

request
    .then(() => {
        console.log('it worked')
    }).catch(() => {
        console.log('oh no!')
    })

// fakeRequestCallback('book.com/page1',

// function(response){
//     console.log('it worked')
//     console.log(response)
//     fakeRequestCallback('books.com/page2',
//     function(response){
//         console.log('it worked again')
//         console.log(response)
//     },
//     function(err){
//         console.log('error',err)
//     })
// }, function(err){
//     console.log('error',err)
// })

