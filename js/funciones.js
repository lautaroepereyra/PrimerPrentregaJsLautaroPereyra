function ingresarAno () {
    let ano = parseFloat(prompt("Ingresa el año en el que naciste: 1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001"));

    while (ano != 1990 && ano != 1991 && ano != 1992 && ano != 1993 && ano != 1994 && ano != 1995 && ano != 1996 && ano != 1997 && ano != 1998 && ano != 1999 && ano != 2000 && ano != 2001) {
        alert("Solo es posible ingresar el año solicitado");
        ano = parseFloat(prompt("Ingresa el año en el que naciste: 1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001"));
    }
    console.log("Año?" + ano);

    return ano;
}