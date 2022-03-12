if(localStorage.getItem('Socios')) {
    socios = JSON.parse(localStorage.getItem('Socios'))
} else {
    localStorage.setItem('Socios', JSON.stringify(socios))
}

/*const cuposCross = (i=1, i++, i<=12) {
    if (botonReserva = 'clic') {
        cuposCross = i--
    }
}

console.log(cuposCross)*/