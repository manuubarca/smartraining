class Plan {
    constructor(nombre, dias, valor, matricula, horarios) {
        this.nombre = SMARTFUN, SMARTCROSS, SMARFREE, FREEPASS;
        this.dias = 8, 12, 20, 31;
        this.valor = 800, 900, 1100, 1200, 1500;
        this.matricula = true || false;
            if (true) {800} else {0};
        this.horarios = 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21;
    }
}

class Socio {
    constructor(nombre, apellido, edad, sexo, email, contrasenia, numero, plan) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
        this.contrasenia = contrasenia;
        this.numero = numero;
        this.plan = plan;
    }
    saludo () {
        console.log(`¡Bienvenido a Smartraining ${this.nombre}!`)
    }
}