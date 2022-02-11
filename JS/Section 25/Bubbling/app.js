const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

button.addEventListener('click', (e)=>{
    container.style.backgroundColor = createRandomColor();
    e.stopPropagation();
})


container.addEventListener('click', ()=> {
    container.classList.toggle('hide')
})


const createRandomColor = () => {
    
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
 
    return `rgb(${r}, ${g}, ${b})`
}