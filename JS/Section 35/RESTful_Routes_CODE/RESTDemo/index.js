const { Console } = require('console')
const express = require('express')
const app = express()
const path = require('path')
const {v4: uuid} =  require('uuid')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.json());

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

let comments = [

    {
        id: uuid(),
        username:"Todd",
        comment:"LMAO"
    },
    {
        id:uuid(),
        username:"Skyler",
        comment:"LOL"
    },
    {
        id:uuid(),
        username:"MikeLitoris",
        comment:"ROFL"
    },
    {
        id:uuid(),
        username:"R34",
        comment:"XD"
    }

]
//index to render multiple resources
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const {username,comment} = req.body
    comments.push({username,comment, id:uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params

    const comment = comments.find(c => c.id === (id))

    res.render("comments/show", {comment})

})

app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params
    const updatedComment = (req.body.comment)
    const match = comments.find(c => c.id === id)
    match.comment = updatedComment
    res.redirect("/comments")
})

app.get('/comments/:id/edit', (req,res) =>{
    const {id} = req.params
    const comment = comments.find(c => c.id === (id))
    res.render('comments/edit', {comment})
})

app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params
    comments = comments.filter(c=>c.id !== id)
    res.redirect('/comments')
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

