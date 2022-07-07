const { hash } = require('bcrypt')
const bcrypt = require('bcrypt')

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(pw,salt)
//     console.log(salt)
//     console.log(hash)
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw,12)
    console.log(salt)
    console.log(hash)
}



const login = async (pw, hashedPassword) => {
   const result = await bcrypt.compare(pw,hashedPassword)
   if(result){
       console.log('logged you in, successful match')
   }else{
       console.log('try again')
   }
}


// hashPassword('monkey')

login('monkeysss','$2b$10$lZ4O3VK68Bx21LW/0eZnkOUyiAcFHWE8sKAJ7sImmJmwJQ4Lr17k6')