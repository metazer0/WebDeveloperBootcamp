const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:true}))

app.use(express.json());

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

const comments = [

    {
        username:"Todd",
        comment:"LMAO"
    },
    {
        username:"Skyler",
        comment:"LOL"
    },
    {
        username:"MikeLitoris",
        comment:"ROFL"
    },
    {
        username:"R34",
        comment:"XD"
    }

]
//index to render multiple resources
app.get('/comments',(req,res)=>{
    
    res.render('comments/index',{comments})
})

app.get('/tacos',(req,res)=>{
    res.send('GET /tacos response')
})

app.post('/tacos',(req,res)=>{
    const {meat, qty} = req.body;
    res.send(`OK, HERE ARE YOUR ${qty} ${meat} TACOS!`)
})

app.listen(3000,()=>{
    console.log('on port 3000')
})

