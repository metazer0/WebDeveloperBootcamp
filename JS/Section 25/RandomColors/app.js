const button  = document.querySelector('button')
const h1 = document.querySelector('h1')

var rbgSum 

button.addEventListener('click', () => {

    let rgb = createRandomColor();

    var rgbs = rbgSum;


    document.body.style.backgroundColor = rgb;

    if(rgbs < 450){
        h1.style.color = 'white'
    }
    else{
        h1.style = color = 'black'
    }

    h1.innerText = rgb;
})


const createRandomColor = () => {
    
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

     rbgSum= r+g+b;

    return `rgb(${r}, ${g}, ${b})`
}