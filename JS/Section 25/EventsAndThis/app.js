
const createRandomColor = () => {
    
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

for(let button of buttons){
    button.addEventListener('click', () => {
        button.style.backgroundColor = createRandomColor();
    })
}