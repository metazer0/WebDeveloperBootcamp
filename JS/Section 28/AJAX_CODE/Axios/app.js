// axios.get('https://api.agify.io/?name=bella')
// .then(res => {
//     console.log(res.data.name)
// })
// .catch(err => {
//     console.log('error!',err)
// })

// const fetchBit = async () => {
//     try {
        
//         const res = await axios.get('https://api.agify.io/?name=bella')

//         console.log(res.data.name)

//     } catch (error) {
//         console.log('oh no!', error)
//     }
// }

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {

    const jokeText = await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(jokeText)
    jokes.append(newLi)
}


const getDadJoke =  async () =>{

    try {
        const config = {headers: {Accept:'application/json'}}
        const res =  await axios.get('https://icanhazdadjoke.com/',config)
        return res.data.joke
    
    } catch (error) {
        return 'no jokes available, sorry'
    }


    // console.log(res.data.joke)
}

button.addEventListener('click', addNewJoke)
