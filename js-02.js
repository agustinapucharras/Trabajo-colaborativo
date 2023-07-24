//METODOS DE JS

// let dato = "pablito clavo un clavito";
// let contrasena = "     123"
// console.log(dato.length) //para saber que longitud tiene cant de caracteres
// console.log(dato.toUpperCase()) //para pasar a mayuscula
// console.log(dato.toLowerCase()) //para pasar a minuscula
// console.log(dato.charAt(2)) //devuelve el caracter en esa posicion 2
// console.log(dato.substring(1,7)) //corta la cadena desde 1 a 7
// console.log(dato.substring(8)) //corta desde la posicion 8 en adelante
// console.log(contrasena.trim()) //elimina espacios en blanco

// console.log(dato.includes('pa')) //pregunta si incluye esa palabra


//EJERCICIOS EN CLASE
//1.recibir apellido por usuario y mostrar el ultimo caracter por consola

// let userName = prompt("Ingrese su nombre");
// console.log(userName.charAt(userName.length-1))

//2.recibir el nombre del usuario, y mostrar por consola el nombre con la rpimera letra en mayuscula

// const nombreUser = prompt("Ingrese su nombre");
// const resultado1 = nombreUser.charAt(0).toUpperCase();
// const resultado3 = nombreUser.substring(1).toLowerCase();
// console.log(resultado1 + resultado3)


//MAXIMOS Y MINIMOS
let numero = 39.68;
console.log(Math.round(numero)); //redondea el numero
console.log(Math.floor(numero)); //me muestra el numero sin decimal

let maximo = Math.max(1, 5, 16, 22, 3);
let minimo = Math.min(35, 59, 22, 0, 7);
console.log(`El numero mayor es ${maximo}`)
console.log(`El numero minimo es ${minimo}`)

//POTENCIAS Y RAICES
console.log(Math.pow(3, 2)) //el cuadrado de 3
console.log(Math.pow(3, 3)) //el cubo de 3
console.log(Math.sqrt(4)) //raiz cuadrada de 4
console.log(Math.cbrt(27)) //raiz cubica de 3

let aleatorio = Math.round(Math.random()*10)
console.log(aleatorio)


let numeroDos =12.35;
console.log(parseInt(numeroDos)); //convierte el string en numero entero
console.log(parseFloat(numeroDos)); //convierte el strin a float
console.log(Number(numeroDos)) //no reconoce letras solo numeros

console.log(numeroDos.toFixed(3)) //hasta 3 decimales despues de la coma
