const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    // console.log(res.data[0].show.image.medium)
    makeImage(res.data)
    form.elements.query.value = ''
})


const makeImage = (results) =>{3
    for(let result of results){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}