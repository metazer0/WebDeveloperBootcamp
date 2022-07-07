const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const userSchema = new Schema({
    username:String,
    age: Number
})

const tweetSchema = new Schema({
    text:String,
    likes:Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

const makeTweets = async () =>{
    const user = new User({name:'chickenfan69', age:69})
    const tweet1 = new Tweet({text:'omg i love chicken', likes: 0})
    tweet1.user =  user;
    user.save()
    tweet1.save()
}

makeTweets()