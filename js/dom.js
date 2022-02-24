//hago formulario en js vinculado con los imputs del html
let formSocio = document.getElementById(form)

formSocio.addEventListener('submit', (e) => {
    e.preventDefault()


})


//recorro mostrandolos, seria ideal que esta fuera la pagina del perfil
//a modo de tarjeta de socio con una card con img etc etc
botonRegistrarse.addEventListener('clic', () => {
    arraySocios.forEach((Socio, indice) => {
        divSocios.innerHTML += `
        
        `
    });
})
