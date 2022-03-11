const express = require('express')

const app = express()

// console.dir(app)

// app.use((req,res) => {
//     console.log('we got a new request')
//     // res.send('hello, we got your request! this is the response')
//     res.send({color:'red'})
// })

app.get('/',(req,res)=>{
    res.send('Welcome to the homepage')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;

    res.send(`<h1>Browsing the ${subreddit} subreddit <h1>`)

})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;

    res.send(`<h1>Browsing the ${subreddit} subreddit <h1>`)

})

app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;

    res.send(`<h1>Viewing Post Id : ${postId} on the ${subreddit} subreddit </h1>`)
})

app.get('/cats',(req,res) => {
    res.send('meow')
})

app.get('/dogs',(req,res) => {
    res.send('woof')
})


app.get('/search',(req,res)=>{
    const {q} = req.query
    if(!q){
        res.send('nothing found if nothing searched')
    }
    res.send(`<h1> search results for: ${q} </h1>`)
})

app.get('*',(req,res)=>{
    res.send('I dont know that path')
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})