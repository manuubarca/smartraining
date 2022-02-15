//Declaro la clase Plan para ingresar los diferentes planes que ofrece el gimnasio
class Plan {
    constructor(nombre, dias, valor, horarios) {
        this.nombre = nombre;
        this.dias = dias;
        this.valor = valor;
        this.horarios = horarios;
    }
}

console.log(Plan)


//Declaro los diferentes planes que tiene el gimnasio

//Entrenamiento Funcional
const funOcho = new Plan('SMARTFUN', 8, 800, (11,  16, 19));
const funDoce = new Plan('SMARTFUN', 12, 900, (11, 16, 19));
const funVeinte = new Plan('SMARTFUN', 20, 1100, (11, 16, 19));

//Crosstraining
const crossOcho = new Plan('SMARTCROSS', 8, 800, (10, 15, 20));
const crossDoce = new Plan('SMARTCROSS', 12, 900, (10, 15, 20));
const crossVeinte = new Plan('SMARTCROSS', 20, 1100, (10, 15, 20));

//Entrenamiento Personalizado
const freeOcho = new Plan('SMARTFREE', 8, 1000, (8, 9, 17, 18, 21));
const freeDoce = new Plan('SMARTFREE', 12, 1100, (8, 9, 17, 18, 21));
const freeVeinte = new Plan('SMARTFREE', 20, 1200, (8, 9, 17, 18, 21));


//Pase libre
const freePass = new Plan('FREEPASS', 31, 1500, (8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21));


/*Declaro la clase Socio para los diferentes datos de interes
del gimnasio sobre sus socios*/
class Socio {
    constructor(nombre, apellido, edad, sexo, email, contrasenia, numero, plan) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
        this.contrasenia = contrasenia;
        this.numero = numero;
        Plan = plan;
    }
}

//Declaro el array para pedirle los datos al usuario
const socios = [];
socios.push(new Socio(
    prompt('Ingrese su nombre'),
    prompt('Ingrese su apellido'),
    prompt('Ingrese su edad'),
    prompt('Ingrese su sexo'),
    prompt('Ingrese su email'),
    prompt('Ingrese su contraseña'),
    parseInt(prompt('Ingrese su numero')),
    prompt('Ingrese su plan'),)
    );

console.log(socios)
console.log(`¡Bienvenido a Smartraining ${Socio.nombre}!`)