//Declaro la clase Plan para ingresar los diferentes planes que ofrece el gimnasio
class Plan {
    constructor(id, nombre, dias, valor) {
        this.id = id;
        this.nombre = nombre;
        this.dias = dias;
        this.valor = valor;
    }
}

/*Declaro la clase Socio para los diferentes datos de interes
del gimnasio sobre sus socios*/
class Socio {
    constructor(nombre, apellido, fechaDeNacimiento, sexo, email, contrasenia, numero, plan) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.sexo = sexo;
        this.email = email;
        this.contrasenia = contrasenia;
        this.numero = numero;
        Plan = plan;
    }
}

class Clase {
    constructor(id, img, nombre, cupos, horario) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.cupos = cupos;
    this.horario = horario;
    }
}

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
