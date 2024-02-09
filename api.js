const url = "https://pokeapi.co/api/v2/pokemon"

fetch(url)
.then(res =>res.json())
.then(data =>{
    const ruta = document.querySelector("script")
    ruta.src = "api.js"
    const nombres = data.results.map(n=>n.name).join('<br>');
    const urlpo = data.results.map(n=>n.url)
    const parrafo = document.getElementById("ponerApi")
    parrafo.innerHTML= `nombre: ${nombres}` 
    console.log(data.name)
})