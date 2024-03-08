function verificar(){
    const veri = document.getElementById("verifica").value
    if(veri == "5555"){
    const yes = document.getElementById("si")
    yes.style.display = "block"
    console.log("desbloquedao")}
    else{
        console.log("error ")
    }
}
function integrantes(){
  const url = 'https://apiexpress-berd.onrender.com/integrantes'
  fetch(url)
  .then(res =>{
    if(!res.ok){
      throw new Error("error al obtener integrantes")
    } return res.json()
  })
  .then(data =>{
    
    const id = data.map(i=>i.id)
    const nombre = data.map(n=>n.nombre)
    
    for (let i = 0; i < nombre.length; i++) {
      const p = document.getElementById('todosIntegrantes')
      const ul = document.createElement('ul')
      const liNombre = document.createElement('li')
      const liId = document.createElement('li')
      
      liNombre.textContent= `Nombre: ${nombre[i]}`
      liId.textContent=` ID: ${id[i]}`
      
      ul.appendChild(liNombre)
      //ul.appendChild(document.createTextNode('\u00A0\u00A0')) //agrega un espacio en blanco
      ul.appendChild(liId)
      p.appendChild(ul)
//voy a continuar para ver una lista
//p.innerHTML = `el nombre ${nombre[i]} con el id ${id[i]}`
  //     console.log(`bien`);
    }
    

    
    
    
  })
}

document.getElementById("integranteForm").addEventListener("submit", function(event) {
    document.getElementById("loading").style.display = "block";

    // Simular una carga ficticia (reemplaza esto con tu lógica de carga real)
    setTimeout(function() {
      document.getElementById("loading").style.display = "none";
      console.log("Carga exitosa");
    }, 3000); // Tiempo de espera simulado de 3 segundos (puedes cambiar esto)

    // Detener el envío del formulario real para este ejemplo
    event.preventDefault();
  });