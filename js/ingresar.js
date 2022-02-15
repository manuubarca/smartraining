/*Declaro la variable ingresar para que en la página inicial
se le pida al usuario que elija entre iniciar su sesion o registrarse si
no tiene un usuario creado*/
const ingresar = prompt('Escriba Ingresar o Registrarme dependiendo de lo que quiera hacer.');

/*Por medio de if declaro que si el usuario elije ingresar
solo se le pida solamente correo y contraseña, si elije registrarse
se le pediran todos los datos*/
if (ingresar == 'Ingresar') {
    const email = prompt('Ingrese su email');
    const contrasenia = prompt('Ingrese su contraseña');

    console.log(email);
    console.log(contrasenia);

} else if (ingresar == 'Registrarme') {

}
