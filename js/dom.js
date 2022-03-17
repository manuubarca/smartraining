//Hago formulario en js vinculado con los imputs del html
let formSocio = document.getElementById('formSocio');
//Hago que el boton registrarse del formulario guarde los datos del socio
let botonRegistrarse = document.getElementById('botonRegistrarse');
//Hago div para almacenar los nuevos socios
let divSocios = document.getElementById('divSocios');
//Hago div para almacenar las clases del dia
let divClases = document.getElementById('divClases');

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
    //Creo la variable para los nuevos socios
    const socio = new Socio(nombre, apellido, fechaDeNacimiento, sexo, ciudad, direccion, email, contrasenia, numeroDeCelular, prestadorDeSalud, carneDeSalud);
    //Guardo los nuevos socios en el array socios
    socios.push(socio)
    //Almaceno los nuevos socios en el localStorage
    localStorage.setItem('Socios', JSON.stringify(socios))
    //Reseteo el formulario para un nuevo ingreso
    formSocio.reset()
});


/*Recorro mostrandolos, seria ideal que esta fuera la pagina del perfil
a modo de tarjeta de socio con una card con img etc etc.
Tambien me gustaria en la pagina para el gimnasio mostrarlo a modo de lista*/

//Creo el evento clic para el boton Registrarse del formulario de registro para los socios
botonRegistrarse.addEventListener('clic', () => {
    //Reseteo los valores para no ingresar nuevos socios infinitamente
    divSocios.innerHTML = ""

    let tarjetaSocio = JSON.parse(localStorage.getItem('Socios'))
    
    //Creo tarjeta de usuario en el HTML a traves del DOM para cada socio
    socios.forEach((sociosEnArray, indice, array) => {

        divSocios.innerHTML += `
            <div id="socio${indice} class="row g-0">
                <h3 class="fw-normal mb-5 fw-bold">
                    Información personal
                </h3>
                <div class="row">
                    <div class="col-md-4 mb-4 pb-2">
                        <p>
                            Nombre: ${sociosEnArray.nombre}
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <p>
                            Apellido: ${sociosEnArray.apellido}
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 pb-2">
                        <input type="file" id="img" name="img" accept="image/*">
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>
                            Fecha de nacimiento: ${sociosEnArray.fechaDeNacimiento}
                        </p>
                    </div>
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>
                            Sexo: ${sociosEnArray.sexo}
                        </p>
                    </div>
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>
                            Ciudad: ${sociosEnArray.ciudad}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            Dirección: ${sociosEnArray.direccion}
                        </p>
                    </div>
                </div>
                <div class="row mb-4 pb-2">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>
                            Email: ${sociosEnArray.email}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            Contraseña: ${sociosEnArray.contrasenia}
                        </p>
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <p>
                        Número de celular: ${sociosEnArray.numeroDeCelular}
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                        <p>
                            Prestador de salud: ${sociosEnArray.prestadorDeSalud}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            Carne de Salud: ${sociosEnArray.carneDeSalud}
                        </p>
                    </div>
                </div>
                <div>
                    <button id="boton${indice}" class="btn btn-lg btn-danger w-auto bg-red text-white form-control">
                    Eliminar
                    </button>
            </div>
        `
    })
    //Eliminando socios
    socios.forEach((Socio, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            //De esta manera elimino elementos del DOM
            divSocios.removeChild(document.getElementById(`Socio${indice}`))
            //De esta manera elimino elementos del array a traves del indice
            let indiceArray = socios.findIndex(Socio => socio.nombre = socios.nombre)
            socios.splice(indiceArray,1)
            //De esta manera elimino elementos del localStorage
            localStorage.setItem('socios', JSON.stringify(socios))
        })
    })
});


clases.forEach((clasesEnArray, indice, array) => {

    divClases.innerHTML += `
        <div id="${indice}" class="card bg-black text-white border-0 shadow-sm my-3 mx-3 g-5">
            <img class="card-img-top" src="../assets/img/freehorarios.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">
                    ${clasesEnArray.nombre}
                </h5>
                <p class="card-text">
                    <img src="../assets/img/clock.svg" class="me-2" style="width: 25px;" alt="">
                    ${clasesEnArray.horario}
                </p>
                <p class="card-text">
                    <img src="../assets/img/group.svg" class="me-2" style="width: 25px;" alt="">
                    ${clasesEnArray.cupos}
                </p>
                <button id="botonReservar" class="btn btn-danger bg-red">
                    Reservar
                </button>
            </div>
        </div>
    `
})