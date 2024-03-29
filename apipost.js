
document.getElementById('integranteForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    // Construir objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        edad: edad,
        email: email
    };

    try {
        // Enviar los datos al servidor
        const response = await fetch('https://apiexpress-berd.onrender.com/integrantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            console.error("el error es", error)
            throw new Error('Error al enviar los datos');
        
        }

        // Limpiar el formulario después de enviar los datos
        this.reset();

        // Mostrar mensaje de éxito
        alert('Integrante agregado exitosamente');
    } catch (error) {
        // Mostrar mensaje de error si ocurre algún problema
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al agregar el integrante');
    }
});
