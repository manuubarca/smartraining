//hago formulario en js vinculado con los imputs del html
let formSocio = document.getElementById('formSocio');
let botonRegistrarse = document.getElementById('botonRegistrarse');
let divSocios = document.getElementById('divSocios');

//Agregando eventos a elementos del DOM
formSocio.addEventListener('submit', (e) => {
    //Como no tengo servidor, prevengo el comportamiento por defecto del formulario
    e.preventDefault()
    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let fechaDeNacimiento = document.getElementById('idFechaDeNacimiento').value
    let sexo = document.getElementById('idSexo').value
    let ciudad = document.getElementById('idCiudad').value
    let direccion = document.getElementById('idDireccion').value
    let email = document.getElementById('idEmail').value
    let contrasenia = document.getElementById('idContrasenia').value
    let numeroDeCelular = document.getElementById('idNumeroDeCelular').value
    let prestadorDeSalud = document.getElementById('idPrestadorDeSalud').value
    let carneDeSalud = document.getElementById('idCarneDeSalud').value

    const socio = new Socio(nombre, apellido, fechaDeNacimiento, sexo, ciudad, direccion, email, contrasenia, numeroDeCelular, prestadorDeSalud, carneDeSalud, plan);

    socios.push(socio)
    console.log(socios)
    /*socios.push({
        nombreSocio: nombreImput,
        apellidoSocio: apellidoImput,
        fechaDeNacimientoSocio: fechaDeNacimientoImput,
        sexoSocio: sexoImput,
        ciudadSocio: ciudadImput,
        direccionSocio: direccionImput,
        emailSocio: emailImput,
        contraseniaSocio: contraseniaImput,
        numeroDeCelularSocio: numeroDeCelularImput,
        prestadorDeSaludSocio: prestadorDeSaludImput,
        carneDeSaludSocio: carneDeSaludImput,
    })*/
    formSocio.reset()
})


//recorro mostrandolos, seria ideal que esta fuera la pagina del perfil
//a modo de tarjeta de socio con una card con img etc etc
botonRegistrarse.addEventListener('clic', () => {
    divSocios.innerHTML = ""
    socios.forEach((Socio, indice) => {
        divSocios.innerHTML += `
            <div id="socio${indice} class="row g-0">
                <h3 class="fw-normal mb-5 fw-bold">
                    Información personal
                </h3>
                <div class="row">
                    <div class="col-md-4 mb-4 pb-2">
                        <p>Nombre: ${Socio.nombre}
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <p>Apellido: ${Socio.apellido}
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <input type="file" id="img" name="img" accept="image/*">
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <p>Apellido: ${Socio.fechaDeNacimiento}
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Ciudad: ${Socio.ciudad}
                    </div>
                    <div class="col-md-6">
                        <p>Dirección: ${Socio.direccion}
                    </div>
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Email: ${Socio.email}
                    </div>
                    <div class="col-md-6">
                        <p>Apellido: ${Socio.contrasenia}
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <p>Número de celular: ${Socio.numeroDeCelular}
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Apellido: ${Socio.prestadorDeSalud}
                    </div>
                    <div class="col-md-6">
                        <p>Apellido: ${Socio.carneDeSalud}
                    </div>
                </div>
            </div>
        `
    })
})
