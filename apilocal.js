const url = "http://localhost:3000/libros"

fetch(url)
.then(res =>res.json())
.then(data =>{
    const libros = document.getElementById("ponerApi")
    libros.innerHTML = data.map(l =>
        `id: ${l.id }, titulo: ${l.titulo }, autor: ${l.autor}>`
    ).join('<br>')
    
    console.log(data)
})
.catch((error)=>{console.log("Error", error)})