var cuota = 800;
var matricula = 800;
let nuevoSocio = prompt("¿Es tu primera vez en el gym?")

if (nuevoSocio == "si") {
    const resultado = cuota + matricula;
    alert (`Debe abonar ${resultado}`)
}
else if (nuevoSocio == "no") {
    const resultadoDos = cuota;
    alert (`Debe abonar ${resultadoDos}`);
}
