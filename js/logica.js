//DOM

/*Creo la variable formSocio que funcionara como id para vincular
el formulario de registro en el HTML, con los datos en js */
let formSocio = document.getElementById('formSocio');

/*Agrego el evento de tipo submit al boton del formulario de registro,
que tomara los valores ingresados por el usuario de tipo string y les
doy un valor en js. Ademas creo con estos valores un nuevo socio y lo
almaceno en el array socios, en el local storage, y reseteo el formulario*/
formSocio?.addEventListener('submit', (e) => {
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
    const socio = new Socio(
        nombre, apellido, fechaDeNacimiento, sexo,
        ciudad, direccion, email, contrasenia, 
        numeroDeCelular, prestadorDeSalud, carneDeSalud);
    //Guardo los nuevos socios en el array socios
    socios.push(socio)
    //Almaceno los nuevos socios en el localStorage
    localStorage.setItem('Socios', JSON.stringify(socios))
    //Reseteo el formulario para un nuevo ingreso
    formSocio.reset()
});


/*Declaro la variable para el div donde se mostraran las clases
del gimnasio para que el socio pueda reservar la de su preferencia
en la pagina reserva*/
let divClases = document.getElementById('divClases');

/*Por medio de fetch y promesas creo la estructura para cada una
 de las clases que se mostraran en la pagina reserva, con sus respectivos
 nombres, cupos, y horarios*/
fetch('../json/clases.json')
.then(promesa => promesa.json())
.then(data => {
    data.forEach((clasesEnArray, indice) => {
        if(divClases != null ){
            divClases.innerHTML += `
            <div id="clase${indice}" class="card bg-black text-white border-0 shadow-sm my-3 mx-2">
                <img class="card-img-top" src="../assets/img/${clasesEnArray.img}" alt="Card image cap">
                <div class="card-body text-center">
                    <h5 class="card-title pb-2 fw-bold">
                        ${clasesEnArray.nombre}
                    </h5>
                    <div class="row d-flex align-items-center">
                        <div class="col-6">
                            <p class="card-text">
                                <img src="../assets/img/clock.svg" class="me-2" style="width: 25px;" alt="">
                                ${clasesEnArray.horario}
                            </p>
                            
                        </div>
                        <div class="col-6">
                            <p class="card-text">
                                <img src="../assets/img/group.svg" class="me-2" style="width: 25px;" alt="">
                                ${clasesEnArray.cupos}
                            </p>
                        </div>
                    </div>   
                </div>
                <button id="botonReservar${indice}" class="card-footer btn btn-danger bg-red">
                    Reservar
                </button> 
            </div>
            `
        }
    })
    /*Agrego a las cards de cada clase un boton con un sweet alert a modo
    de aviso para que el usuario reserve conscientemente la clase y 
    confirme lo que hace*/
    data.forEach((clasesEnArray, indice) => {

        let botonReservar = document.getElementById(`botonReservar${indice}`);
        botonReservar?.addEventListener("click", () => {
    
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
                    /*
                    Aca quisiera que se resten y se sumen cupos
                    de acuerdo a el accionar de los usuarios.
                    algo como:
                    
                    clasesEnArray.cupos(i=0, i++, i<=12)
                    clasesEnArray.cupos(i=0, i--, i<=12)

                    
                    */
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ){
                    swalWithBootstrapButtons.fire(
                    'Reserva cancelada',
                    'Has cancelado tu reserva.',
                    'error'
                    )
                }
            })
        }) 
    })
})

