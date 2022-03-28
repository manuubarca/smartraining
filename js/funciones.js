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
            <div id="socio${indice}" class="row g-0">
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
                        Eliminar mi perfil
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