//OBJETOS

//Declaro los diferentes planes que tiene el gimnasio

//Entrenamiento Funcional
const funOcho = new Plan(1, 'SMARTFUN', 8, 800);
const funDoce = new Plan(2, 'SMARTFUN', 12, 900);
const funVeinte = new Plan(3, 'SMARTFUN', 20, 1100);

//Crosstraining
const crossOcho = new Plan(4, 'SMARTCROSS', 8, 800);
const crossDoce = new Plan(5, 'SMARTCROSS', 12, 900);
const crossVeinte = new Plan(6, 'SMARTCROSS', 20, 1100);

//Entrenamiento Personalizado
const freeOcho = new Plan(7, 'SMARTFREE', 8, 1000);
const freeDoce = new Plan(8, 'SMARTFREE', 12, 1100);
const freeVeinte = new Plan(9, 'SMARTFREE', 20, 1200);

//Pase libre
const freePass = new Plan(10, 'FREEPASS', 31, 1500);


//Declaro las diferentes clases al día

//Clases de cross
const smartCrossDiez = new Clase(1, 'SMARTCROSS', 12, 10);
const smartCrossQuince = new Clase(2, 'SMARTCROSS', 12, 15);
const smartCrossVeinte = new Clase(3, 'SMARTCROSS', 12, 20);
//CLases de funcional
const smartFunOnce = new Clase(3, 'SMARTCROSS', 12, 11);
const smartFunDiecises = new Clase(4, 'SMARTCROSS', 12, 11);
const smartFunDiecinueve = new Clase(5, 'SMARTCROSS', 12, 19);
//Clases de personalizado
const smartFreeOcho = new Clase(6, 'SMARTCROSS', 12, 8);
const smartFreeNueve = new Clase(7, 'SMARTCROSS', 12, 9);
const smartFreeDiecisiete = new Clase(8, 'SMARTCROSS', 12, 17);
const smartFreeDieciocho = new Clase(9, 'SMARTCROSS', 12, 18);
const smartFreeVeintiuno = new Clase(10, 'SMARTCROSS', 12, 21);


//ARRAYS

//Declaro array de planes
const planes = [
    funOcho, funDoce, funVeinte,
    crossOcho, crossDoce, crossVeinte,
    freeOcho, freeDoce, freeVeinte,
    freePass
];

//Declaro el array para pedirle los datos al usuario
const socios = [];

//Declaro el array de clases diarias
const clases = [
    smartCrossDiez, smartCrossQuince, smartCrossVeinte,
    smartFunOnce, smartFunDiecises, smartFunDiecinueve,
    smartFreeOcho, smartFreeNueve, smartFreeDiecisiete, smartFreeDieciocho, smartFreeVeintiuno
];




//DOM

//Hago formulario en js vinculado con los imputs del html
let formSocio = document.getElementById('formSocio');

//Agregando eventos a elementos del DOM
formSocio.addEventListener('submit', (e) => {
    //Como no tengo servidor, prevengo el comportamiento por defecto del formulario
    e.preventDefault()
    //Declaro los labels de acuerdo al formulario HTML y les otorgo el valor
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
//Hago que el boton registrarse del formulario guarde los datos del socio
let botonRegistrarse = document.getElementById('botonRegistrarse');
//Hago div para almacenar los nuevos socios
let divSocios = document.getElementById('divSocios');

botonRegistrarse.addEventListener('click', () => {
    //Reseteo los valores para no ingresar nuevos socios infinitamente
    divSocios.innerHTML = ""

    let tarjetaSocio = JSON.parse(localStorage.getItem('Socios'))
    
    //Creo tarjeta de usuario en el HTML a traves del DOM para cada socio
    tarjetaSocio.forEach((sociosEnArray, indice, array) => {

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
    socios.forEach((Socio, indice, array) => {
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



//Hago div para almacenar las clases del dia
let divClases = document.getElementById('divClases');

clases.forEach((clasesEnArray, indice) => {

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


let botonReservar = document.getElementById('botonReservar');

botonReservar.addEventListener("click", () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger bg-red',
          cancelButton: 'btn btn-outiline-info'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Seguro que quieres reservar esta clase?',
        text: "Recuerda que si no vas a asistir debes cancelar la reserva al menos una hora antes de la clase.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Clase Reservada',
            'Has reservado tu clase exitosamente, ¡te esperamos!',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Reserva cancelada',
            'Has cancelado tu reserva.',
            'error'
          )
        }
      })
    }) 