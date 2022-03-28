const express = require('express')
const redditData = require('./data.json')
const app = express();
const path = require('path')


app.use(express.static('public'))



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'))

app.get('/',(req,res) => {
    res.render('home',{name:'home'})
})

app.get('/cats', (req,res)=>{
    const cats = [
        'Blue','Rocket,','Monty','Stephanie','Winston'
    ]

    res.render('cats',{cats})  
})

app.get('/r/:subreddit',(req,res) => {
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if(data){
        res.render('subreddit',{...data, name:`${subreddit}`})
    }else{
        res.render('notfound', {subreddit, name:'not found'})
    }
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1
    res.render('random', {rand : num, name:'random'})
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})