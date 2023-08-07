

function cambiar(){
    let nombre =  prompt("Ingresa tu nombre por favor")
    

alert( nombre + " espero que te guste mi portafolio, podes navegar por toda la pagina, dejame tu comentario muchas gracias.")
document.getElementById("bienvenida").innerHTML = "Hola " + nombre + " gracias por visitar mi Portafolio Web, donde encontrarás ejemplos de mis proyectos y trabajos anteriores. Si tienes alguna pregunta o deseas saber más sobre mi experiencia, no dudes en contactarme.¡Espero que disfrutes navegando por mi portafolio!"
document.getElementById("boton").style.display = "none"
document.getElementById("volver").style.display = "inline"

}
function no(){
    document.getElementById("bienvenida").innerHTML = "¡Bienvenido a mi Portafolio Web! Mi nombre es Gastón Trejo y soy un apasionado desarrollador Front-end con habilidades en HTML y CSS. También cuento con experiencia en el manejo de lenguajes como SQL (MySQL Workbench), Python y JavaScript. Siempre estoy en búsqueda de oportunidades para seguir creciendo como desarrollador Front-end y enfrentar nuevos retos. Mi colaboración en proyectos en GitHub refleja mi dedicación y pasión por el código abierto y la mejora continua."
    document.getElementById("volver").style.display = "none"
    document.getElementById("boton").style.display = "inline"
}

function aspecto(){
    document.getElementById("textoo").innerHTML = "Otro aspecto importante de mi perfil es mi conocimiento en SQL, específicamente en MySQL Workbench. Gracias a esto, puedo diseñar y administrar bases de datos eficientes para respaldar el funcionamiento de mis aplicaciones." + "Además de mis habilidades técnicas, cuento con habilidades blandas que considero fundamentales para el éxito en el desarrollo de software. Soy un comunicador efectivo y me destaco por trabajar en equipo, siempre dispuesto a colaborar y aprender de mis colegas. Mi capacidad para resolver problemas y adaptarme rápidamente a nuevos desafíos me ha permitido enfrentar con éxito proyectos de diversa complejidad. Aunque mi nivel de inglés es A1, lo cual me permite comprender y comunicarme en situaciones cotidianas, estoy constantemente trabajando para mejorar mi dominio del idioma y poder colaborar en un entorno internacional."
    document.getElementById("sigui").style.display = "none"
    crearBoton()
    
}

function volve(){
    document.querySelector("#vol").innerHTML = "Actualmente estoy cursando la tecnicatura de tecnico superior en tecnologias 4.0, me dedico a la programacion, por eso me capacito constantemente. Me destaco en habilidades de desarrollador web en html, css. Tambien manejo el lenguaje de programacion JavaScript, Python, SQL. A través de mi trayectoria como desarrollador, he creado diversas aplicaciones web y sitios que destacan por su estética y funcionalidad. Mis conocimientos en HTML y CSS me permiten diseñar interfaces intuitivas y atractivas que brindan una experiencia de usuario excepcional. Además, soy capaz de implementar interacciones dinámicas utilizando JavaScript para hacer que mis proyectos sean más interactivos y entretenidos."
    
}
// Función para crear y agregar el botón al contenedor
function crearBoton() {
    // Crear un elemento de botón
    var boton = document.createElement("button");
    boton.type = "button"
    boton.id = "vol"
    boton.style.backgroundColor = "blueviolet"
    
    
    
    

    // Asignar texto al botón
    boton.innerText = "volver";

    // Agregar un evento al botón (opcional)
    boton.addEventListener("click",function volve(){
        document.querySelector("#textoo").innerHTML = "Actualmente estoy cursando la tecnicatura de tecnico superior en tecnologias 4.0, me dedico a la programacion, por eso me capacito constantemente. Me destaco en habilidades de desarrollador web en html, css. Tambien manejo el lenguaje de programacion JavaScript, Python, SQL. A través de mi trayectoria como desarrollador, he creado diversas aplicaciones web y sitios que destacan por su estética y funcionalidad. Mis conocimientos en HTML y CSS me permiten diseñar interfaces intuitivas y atractivas que brindan una experiencia de usuario excepcional. Además, soy capaz de implementar interacciones dinámicas utilizando JavaScript para hacer que mis proyectos sean más interactivos y entretenidos."
        boton.style.display = "none"
        location.reload()
    });

    // Obtener el contenedor donde se agregará el botón
    var contenedor = document.getElementById("siguiente");
    contenedor.style.textAlign.centro

    // Agregar el botón al contenedor
    contenedor.appendChild(boton);
}
function fondo() {
    let fondo = document.getElementById("body")
    fondo.style.backgroundImage= "url('imagenes/universo.png')"
    let texto = document.getElementById("bienvenida")
    texto.style.color = "green"
    let titulo = document.getElementById("programdor")
    titulo.style.color = "green"
    

}
function volver(){
    let fondo = document.getElementById("body")
    fondo.style.backgroundImage= "url('imagenes/claritio.jpg')"
    let texto = document.getElementById("bienvenida")
    texto.style.color = "black"
    let titulo = document.getElementById("programdor")
    titulo.style.color = "black"
}
