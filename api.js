const url = "http://localhost:3000/libros"

fetch(url)
.then(res =>res.json())
.then(data =>{
    const libros = data.map(l =>l.titulo).join(' ,')
    const parrafo = document.getElementById('ponerApi')
    parrafo.innerHTML= `Libros: ${libros}`
    console.log(libros)
})