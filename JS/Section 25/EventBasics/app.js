let button2 = document.querySelector('#v2')

button2.onclick = function(){
    console.log('you clicked me')
    console.log('hope it works')
}

function scream(){
    console.log('aaah')
    console.log('stop touching me')
}

button2.onmouseenter = scream

let button3 = document.querySelector('#v3')

button3.addEventListener('click', () => { 
    alert('clicked')
})

function twist(){
    console.log('twist')
}

function shout(){
    console.log('shout!')
}

let buttontas = document.querySelector('#tas')

// buttontas.onclick = twist;

// buttontas.onclick = shout;


buttontas.addEventListener('click',twist);
buttontas.addEventListener('click',shout);