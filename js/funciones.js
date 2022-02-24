//Declaro la clase Plan para ingresar los diferentes planes que ofrece el gimnasio
class Plan {
    constructor(id, nombre, dias, valor, horarios) {
        this.id = id;
        this.nombre = nombre;
        this.dias = dias;
        this.valor = valor;
        this.horarios = horarios;
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

