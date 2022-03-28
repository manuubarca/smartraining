/*Por medio de este if consulto si en el local storage
exsiten ya registrados socios, y de ser asi que los guarde
en el array "socios" y me los muestre.*/
if(localStorage.getItem('Socios')) {
    /*Guardando los datos del local storage en el array socios,
    transformandolos de JSON (formato texto) a objeto javascript
    (valores operables)*/
    socios = JSON.parse(localStorage.getItem('Socios'))

    /*Declaro la variable para el div donde se mostraran los datos
    ingresados por el usuario a modo de tarjeta de socio en el perfil*/
    let divSocios = document.getElementById('divSocios');

    //Reseteo los valores para no ingresar nuevos socios infinitamente
    divSocios.innerHTML = ""
    /*creo la variable tarjetaSocio que funcionara para traer los
    datos ingresados desde js, almacenados en el local storage
    para mostrarlos en el DOM por medio de JSON*/
    let tarjetaSocio = JSON.parse(localStorage.getItem('Socios'))
        
    /*Creo tarjeta de usuario en el HTML a traves del DOM para cada socio
    concatenando los valores*/
    tarjetaSocio.forEach((sociosEnArray, indice) => {

        divSocios.innerHTML += `
            <div id="socio${indice}" class="d-flex flex-column justify-content-center">
                <div class="row px-5">
                    <div class="row my-5">
                        <div class="col-4 pb-2">
                            <img href="${sociosEnArray.img}" class="img-fluid rounded-circle shadow" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Nombre:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.nombre}
                            </p>
                        </div>
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Apellido:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.apellido}
                            </p>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Fecha de nacimiento:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.fechaDeNacimiento}
                            </p>
                        </div>
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Sexo:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.sexo}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Ciudad:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.ciudad}
                            </p>
                        </div>
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Dirección:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.direccion}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-4 pb-2">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-4 text-start fw-bold">
                                Email:
                            </p>
                            <p class="col-8 text-end">
                                ${sociosEnArray.email}
                            </p>
                        </div>
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Contraseña:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.contrasenia}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Número de celular:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.numeroDeCelular}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Prestador de salud:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.prestadorDeSalud}
                            </p>
                        </div>
                        <div class="d-flex flex-row mb-4 pb-2 border-bottom">
                            <p class="col-6 text-start fw-bold">
                                Carne de Salud:
                            </p>
                            <p class="col-6 text-end">
                                ${sociosEnArray.carneDeSalud}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-4">
                    <button id="boton${indice}" class="btn btn-lg btn-outline-dark w-auto form-control">
                        Eliminar
                    </button>
                    <button id="save" class="btn btn-lg btn-danger bg-red text-white w-auto form-control mx-3">
                        Guardar
                    </button>
                </div>
            </div>
        `
    })
    //Eliminando socios de las distintas partes del codigo
    socios.forEach((Socio, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            //De esta manera elimino socios del DOM
            divSocios.removeChild(document.getElementById(`socio${indice}`));
            //De esta manera elimino socios del array a traves del indice
            let indiceArray = socios.findIndex(Socio => Socio.indice == socios.indice);
            socios.splice(indiceArray,1);
            //De esta manera elimino socios del localStorage
            localStorage.setItem('Socios', JSON.stringify(socios));
        })
    })

} else {
    /*Si no existen datos en el local storage, entonces creo los datos 
    vacios con el array vacio*/
    localStorage.setItem('Socios', JSON.stringify(socios))
}