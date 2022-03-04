//Declaro array de planes
let planes = [
    funOcho, funDoce, funVeinte,
    crossOcho, crossDoce, crossVeinte,
    freeOcho, freeDoce, freeVeinte,
    freePass
]

//Recorriendo el array de planes
planes.forEach((Plan) => {
    console.log(Plan)
})

//Declaro el array para pedirle los datos al usuario
const socios = [];
socios.push(new Socio(nombre, apellido, fechaDeNacimiento, sexo, email, contrasenia, numero, plan));

//Recorriendo el array de planes
socios.forEach((Socio) => {
    console.log(Socio)
});