document.getElementById('buscarIntegranteForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;

    try {
        const response = await fetch(`https://apiexpress-berd.onrender.com/${id}`);
        const data = await response.json();
        const parrafo = document.getElementById('resultado')
        if (!response.ok) {
            parrafo.innerHTML = `no se pudo encontrar integrantes`
            throw new Error('No se pudo encontrar al integrante');
        }
        parrafo.innerHTML =  `
        Nombre: ${data.nombre}<br> edad: ${data.edad}<br> email: ${data.email}`
        // Aquí puedes utilizar los datos obtenidos para mostrarlos en tu página
        console.log(data);
    } catch (error) {
        console.error('Error al buscar integrante:', error);
        // Aquí puedes mostrar un mensaje de error en tu página
    }
});
