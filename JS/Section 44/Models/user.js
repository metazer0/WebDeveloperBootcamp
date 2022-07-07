const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses: [
        {
            city: String,
            state: String,
            street: String,
            country: String
        }
    ]
})


const User = mongoose.model('User', userSchema)

const makeUser = async () =>{
    const u = new User ({
        first: 'Harry',
        last: 'Potter'
    })

    u.addresses.push({
        street:'123 Sesame St.',
        city: 'NY',
        state: 'NY',
        country: 'USA'
    })

    const res = await u.save()
    console.log(res)
}

makeUser()