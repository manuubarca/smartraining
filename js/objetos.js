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


//Declaro las diferentes clases al día

//Clases de cross
const smartCrossDiez = new Clase(1, 'SMARTCROSS', 12, 10);
const smartCrossQuince = new Clase(2, 'SMARTCROSS', 12, 15);
const smartCrossVeinte = new Clase(3, 'SMARTCROSS', 12, 20);
//CLases de funcional
const smartFunOnce = new Clase(3, 'SMARTCROSS', 12, 11);
const smartFunDiecises = new Clase(4, 'SMARTCROSS', 12, 11);
const smartFunDiecinueve = new Clase(5, 'SMARTCROSS', 12, 19);
//Clases de personalizado
const smartFreeOcho = new Clase(6, 'SMARTCROSS', 12, 8);
const smartFreeNueve = new Clase(7, 'SMARTCROSS', 12, 9);
const smartFreeDiecisiete = new Clase(8, 'SMARTCROSS', 12, 17);
const smartFreeDieciocho = new Clase(9, 'SMARTCROSS', 12, 18);
const smartFreeVeintiuno = new Clase(10, 'SMARTCROSS', 12, 21);