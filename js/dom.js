//hago formulario en js vinculado con los imputs del html
let formSocio = document.getElementById('formSocio');
let botonRegistrarse = document.getElementById('botonRegistrarse');
let divSocios = document.getElementById('divSocios');

//Agregando eventos a elementos del DOM
formSocio.addEventListener('submit', (e) => {
    //Como no tengo servidor, prevengo el comportamiento por defecto del formulario
    e.preventDefault()
    let nombreImput = document.getElementById('idNombre').value
    let apellidoImput = document.getElementById('idApellido').value
    let fechaDeNacimientoImput = document.getElementById('idFechaDeNacimiento').value
    let sexoImput = document.getElementById('idSexo').value
    let ciudadImput = document.getElementById('idCiudad').value
    let direccionImput = document.getElementById('idDireccion').value
    let emailImput = document.getElementById('idEmail').value
    let contraseniaImput = document.getElementById('idContrasenia').value
    let numeroDeCelularImput = document.getElementById('idNumeroDeCelular').value
    let prestadorDeSaludImput = document.getElementById('idPrestadorDeSalud').value
    let carneDeSaludImput = document.getElementById('idCarneDeSalud').value
    socios.push({
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
    })
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
                        <p>Nombre: ${Socio.nombreImput}
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <p>Apellido: ${Socio.apellidoImput}
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <input type="file" id="img" name="img" accept="image/*">
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <p>Apellido: ${Socio.fechaDeNacimientoImput}
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Ciudad: ${Socio.ciudadImput}
                    </div>
                    <div class="col-md-6">
                        <p>Dirección: ${Socio.direccionImput}
                    </div>
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Email: ${Socio.emailImput}
                    </div>
                    <div class="col-md-6">
                        <p>Apellido: ${Socio.contraseniaImput}
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <p>Número de celular: ${Socio.numeroDeCelularImput}
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>Apellido: ${Socio.prestadorDeSaludImput}
                    </div>
                    <div class="col-md-6">
                        <p>Apellido: ${Socio.carneDeSaludImput}
                    </div>
                </div>
            </div>
        `
    });
})
