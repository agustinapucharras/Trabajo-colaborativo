//CEMENTERIO INDIO EMBRUJADO
//Preguntar al usuario si trajo anteojos, si dice que si mostrar
//mensaje que no compre
//si dice no mostrar compra tranquilo

// let respuesta =  prompt("¿Trajo anteojos?").toLowerCase()

// if(respuesta == "si"){
//     alert("No compre, esta embrujado")
// }
// else if(respuesta == "no"){
//     alert("Compre tranquilo")
// }
// else{
//     alert("Ingrese si o no")
// }

//PROVINCIAS COPADAS

let provincias = prompt("Ingrese la provincia").toLowerCase()

//tucuman, sgo, cordoba, jujuy

// if (provincias == "tucuman") {
//     alert("tremendas empanadas")
// }
// else if (provincias == "santiago") {
//     alert("que caloooor")
// }
// else if (provincias == "cordoba") {
//     alert("aguante el cuarteto")
// }
// else if (provincias == "jujuy") {
//     alert("la botita")
// }
// else {
//     alert("no reconozco esa provincia")
// }
//cambio

switch (provincias) {
    case "tucuman":
        alert("tremendas empanadas")
        break;
    case "santiago":
        alert("que caloooor")
        break;
    case "cordoba":
        alert("aguante el cuarteto")
        break;

    case "jujuy":
        alert("la botita")
        break;
    default:
        alert("no reconozco esa provincia")
        break;

}