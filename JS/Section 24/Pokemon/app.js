const container = document.querySelector('#container')



for(let i = 0 ; i < 151 ; i++){
    let pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    let label = document.createElement('span')
    label.innerText = `#${i+1}`
    let newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}