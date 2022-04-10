const { mongo } = require('mongoose')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connection open')
    })
    .catch(err => {
        console.log('oh no, error!')
    })

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema)

