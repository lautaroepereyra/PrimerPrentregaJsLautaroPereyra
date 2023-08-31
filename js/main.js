// Simulador de Horoscopo Chino

const caballo = 1990;
const cabra = 1991;
const mono = 1992; 
const gallo = 1993;
const perro = 1994;
const cerdo = 1995;
const rata = 1996; 
const toro = 1997;
const tigre = 1998;
const conejo = 1999;
const dragon = 2000;
const serpiente = 2001;

// Preguntar el dia de nacimiento
let dia = prompt("Ingresa el día que naciste");
// Preguntar el mes de nacimiento
let mes = prompt("Ingresa el mes en el que naciste: Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre").toUpperCase();
// Preguntar por el año de nacimiento
let ano = ingresarAno();

console.log("Naciste el: " + dia + mes + ano);

if (ano == 1993) {
    alert("Felicidades eres del signo Gallo");
} else if (ano == 1990) {
    alert("Felicidades eres del signo Caballo");    
} else if (ano == 1991) {
    alert("Felicidades eres del signo Cabra");
} else if (ano == 1992) {
    alert("Felicidades eres del signo Mono");
} else if (ano == 1994) {
    alert("Felicidades eres del signo Perro");
} else if (ano == 1995) {
    alert("Felicidades eres del signo Cerdo")
} else if (ano == 1996) {
    alert("Felicidades eres del signo Rata")
} else if (ano == 1997) {
    alert("Felicidades eres del signo Toro")
} else if (ano == 1998) {
    alert("Felicidades eres del signo Tigre")
} else if (ano == 1999) {
    alert("Felicidades eres del signo Conejo")
} else if (ano == 2000) {
    alert("Felicidades eres del signo Dragon")
} else {
    alert("Felicidades eres del signo Serpiente")
}
