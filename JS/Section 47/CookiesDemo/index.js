const express = require('express')

const app = express()

const cookieParser = require('cookie-parser')

app.use(cookieParser('thisismysecret'))

app.get('/greet', (req,res) => {
    const {name = 'anon'} = req.cookies;
    res.send(`hey there ${name}`)
})

app.get('/setname', (req,res) =>{
    res.cookie('name', 'Stevie Chicks')
    res.cookie('animal', 'Lautaro')
    res.send('OK, SENT YOU A COOKIE')
})

app.get('/getsignedcookies', (req,res) =>{
    res.cookie('fruit','grape',{signed:true})
    res.send('signed your cookie')
})

app.get('/verifyfruit', (req,res)=>{
    res.send(req.signedCookies)
})

app.listen(3000,()=>{
    console.log('serving')
})