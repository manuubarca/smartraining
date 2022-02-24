//Declaro array de planes
let arrayPlanes = [
    funOcho, funDoce, funVeinte,
    crossOcho, crossDoce, crossVeinte,
    freeOcho, freeDoce, freeVeinte,
    freePass
]

//Recorriendo el array de planes
arrayPlanes.forEach((Plan) => {
    console.log(Plan)
})

//Declaro el array para pedirle los datos al usuario
const arraySocios = [];
arraySocios.push(new Socio(nombre, apellido, fechaDeNacimiento, sexo, email, contrasenia, numero, plan));

//Recorriendo el array de planes
arraySocios.forEach((Socio) => {
    console.log(Socio)
});