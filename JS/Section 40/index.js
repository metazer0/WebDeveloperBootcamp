const express = require('express')
const app = express()
const morgan =  require('morgan')


// morgan('tiny')

app.use(morgan('tiny'))

app.use((req,res,next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use('/dogs', (req,res,next)=>{
    console.log('i love dogs')
    next()
})

// app.use((req,res,next) => {
//     console.log('this is my first middleware')
//     next()
// })

// app.use((req,res,next) => {
//     console.log('this is my  middleware')
//     next()
// })

app.get('/', (req,res) => {
    console.log(`request date ${req.requestTime}`)
    res.send('home page')
})

app.get('/dogs', (req,res) => {
    console.log(`request date ${req.requestTime}`)
    res.send('woof woof')
})

app.use((req,res) => {
    res.status(404).send('NOT FOUND')
})

app.listen(3000, () => {
    console.log('app is running on local host 3000')
})