const input = document.querySelector('input')

const h1 =  document.querySelector('h1');


// input.addEventListener('change', () =>{
//     console.log('fafefefefwfw')
// })

if(input.value = '')
{
    h1.innerText = 'Enter Your Username'
}

else{
    input.addEventListener('input', (e) =>{
        h1.innerText = input.value
    })
}



