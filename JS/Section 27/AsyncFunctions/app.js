// async function hello(){

// }

// const sing = async () => {
//     throw 'OH NO! PROBLEM!'
//     return 'LA LA LA LA'
// }

// sing().then((data)=>{
//     console.log('promise resolvd with: ', data)
// })


// const login = async (username,password) => {
    
//     if(!username || !password) throw 'Missing Credentials'

//     if(password === 'corgifeetarecute') return 'WELCOME'

//     throw 'INVALID PASSWORD'
// }

// login('adasdas','corgifeetarecute')
// .then(msg => {
//     console.log('LOGGED IN', msg)
// })
// .catch(err =>{
//     console.log('Error')
//     console.log(err)
// })

async function rainbow(){
    delayedColorChange('red',1000)
}