//Declaro los diferentes planes que tiene el gimnasio

//Entrenamiento Funcional
const funOcho = new Plan(1, 'SMARTFUN', 8, 800, (11,  16, 19));
const funDoce = new Plan(2, 'SMARTFUN', 12, 900, (11, 16, 19));
const funVeinte = new Plan(3, 'SMARTFUN', 20, 1100, (11, 16, 19));

//Crosstraining
const crossOcho = new Plan(4, 'SMARTCROSS', 8, 800, (10, 15, 20));
const crossDoce = new Plan(5, 'SMARTCROSS', 12, 900, (10, 15, 20));
const crossVeinte = new Plan(6, 'SMARTCROSS', 20, 1100, (10, 15, 20));

//Entrenamiento Personalizado
const freeOcho = new Plan(7, 'SMARTFREE', 8, 1000, (8, 9, 17, 18, 21));
const freeDoce = new Plan(8, 'SMARTFREE', 12, 1100, (8, 9, 17, 18, 21));
const freeVeinte = new Plan(9, 'SMARTFREE', 20, 1200, (8, 9, 17, 18, 21));

//Pase libre
const freePass = new Plan(10, 'FREEPASS', 31, 1500, (8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21));
