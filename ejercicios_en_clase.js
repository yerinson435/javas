// // objetos

// const persona ={
//     nombre: 'yerinson',
//     apellido: 'suarez',
//     edad: 17,
//     saludar: function () 
//     {
//         return `hola soy ${this.nombre}`;
//     }
// }
// console.log(persona.saludar());

// console.log(persona["edad"]);

// persona.pais = `colombia`;

// persona.despedida = function()
// {
//     return `hasta luego ${this.nombre}`;
// }

// // console.log(persona.despedida());

// // console.log(Object.keys(persona).indexOf("nombre"));
// // if (Object.keys(persona).indexOf("genero") === -1){
// //     console.log ("el atrivuto no fue definido");}

// console.log(Object.keys(persona).includes("pais"))

// // const pais ={
// //     pais: 'colombia',
// //     soy_de: function()
// //     {
// //     return `soy de ${this.pais}`;      
// //     },
// //     adios: `bye me tengo que ir`
// // }
// // console.log(pais.soy_de());

// // console.log(pais.adios)




// operadores

// let a = 25;
// let b = 2;
// let c = 7;

// let resultado = a + (b + (b - a) * a) / c;

// console.log (resultado);

// if (typeof a === "number" && typeof b === "number") {
//     console.log(a % b);
// }


// operadores de incremento y desincremento

// (>) mayor que
// (<) menor que
// (<=) menor o ifual que
// (>=) mayor o igual que
// (==) igual que
// (===) valor y tipo de datos
// (!==) negativo

// let a = 10;
// let b = "10";

// console.log (a !== b);

// let i = 0;

// // console.log(i++);
// // console.log(i);
// // console.log(i++);
// // console.log(i);

// let i = +4;

// console.log(i = + 4);


// operadores logicos

// let a = 5;
// let b = 7;


// terniario

// let respuesta = (true) ? "verdadero" : "falso";
// console.log(respuesta);

// if(false) {
//     console.log("respuesta verdadera");
// } else{
//     console.log("respuesta falsa");
// }

// switch

// let dia = parseInt(prompt ("ingrese un numero"))
// switch (dia) {
//     case 1:
//         console.log("lunes");
    
//     break;   

//     case 2:
//         console.log ("martes");
    
//     break;  

//     case 3:
//         console.log ("miercoles");
    
//     break;  

//     case 4:
//         console.log ("jueves");
    
//     break;  

//     case 5:
//         console.log ("viernes");
    
//     break;  

//     case 6:
//         console.log ("sabado");
    
//     break;  

//     case 7:
//         console.log ("domingo");
    
//     break;  
// }


// ciclos

// let n = 8;
// let contador = 0;

// while (n <= n) {
//     console.log (contador);
//     contador++;
// }

// do {
//     console.log("?")
// } while (condition);

// for (let i = 2; i <= 40; i++ ) {
//     console.log(i++)
// }  

// for (let i = 2; i <= 40; i++) {
//     if ( i & 1 === 0){
//     } if( i & 2 === 0 ){
//         console.log
//     }
// }

// const persona = {
//     nombre: "Yerinson",
//     edad: 17,
//     ciudad: bucaramanga,
// }

// const {nombre: nombre2, edad: edad2, ciudad: ciudad2, username = "yerinson"} = persona;


// // let a = persona.nombre;
// // let b = persona.edad;
// // let c = persona.ciudad;

// console.log (nombre2, edad2, ciudad2, username);

// function suma(a, b, ...c){
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);

//     return a + b + c;

//     for (let i = 0, i <= c.length )

// }

// let resultado = suma( 'dos', 2, 9, 21, 5, 7,'cuatro', 3, 7, 34);
// console.log(resultado)

// const arraya = (1,2,3);
// const arrayb = ("a", "b","c");

// let palabra = "3453_vaca"
// let regex = /^([0 9] {2,6}+$)/g;
// // let regex = /0 9/i;

// console.log (regex.test(palabra));
// console.log (palabra.match(regex));

// exportar

const Pi = (3.1416);



