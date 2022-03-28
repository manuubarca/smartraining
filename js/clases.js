//Declaracion de clases

//Clase Plan: modelo de objetos para los planes del gimnasio para que
//en un futuro se los pueda vender por la app y que cada socio
//tenga el suyo asignado
class Plan {
    constructor(id, nombre, dias, valor) {
        this.id = id;
        this.nombre = nombre;
        this.dias = dias;
        this.valor = valor;
    }
}

/*Clase Socio: para los datos de interes del gimnasio sobre sus socios
Con estos datos posteriormente pueden hacerse promociones enfocadas
en determinados socios, o cualqueir otra cosa.*/
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

//Clase Clase: en esta clase se definen las caracteristicas de las clases
//dictadas en el gimnasio para mostrarlas en la pagina reserva
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

/*En base a la clase Plan declarada mas arriba, declaro los diferentes
planes que tiene el gimnasio para que los socios puedan elegirlos
mediante la app y que tambien se los pueda vincular a ellos, brindado
beneficios en especial para algunos, o que solo puedan reservar clases
respectivas a su plan*/

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

/*Declaro array de planes con los objetos definidos arriba, de la clase
Planes */
const planes = [
    funOcho, funDoce, funVeinte,
    crossOcho, crossDoce, crossVeinte,
    freeOcho, freeDoce, freeVeinte,
    freePass
];


/*En este array vacio se almacenaran los nuevos socios que completen el
formulario de registro, llegaran a el mediante un 'socios.push'*/
let socios = [];

