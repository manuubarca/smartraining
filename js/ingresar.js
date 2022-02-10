const ingresar = prompt('Escriba Ingresar o Registrarme dependiendo de lo que quiera hacer.');

if (ingresar == 'Ingresar') {
    const email = prompt('Ingrese su email');
    const contrasenia = prompt('Ingrese su contraseña');

    console.log(email);
    console.log(contrasenia);

} else if (ingresar == 'Registrarme') {
    const nuevoSocio = new Socio(
        prompt('Ingrese su nombre'),
        prompt('Ingrese su apellido'),
        prompt('Ingrese su edad'),
        prompt('Ingrese su sexo'),
        prompt('Ingrese su email'),
        prompt('Ingrese su contrasenia'),
        parseInt(prompt('Ingrese su numero')),
        prompt('Ingrese su plan'),
    )
}

console.log(nuevoSocio);