// 1). Dado un vector, realizar un programa que permita al usuario rotar los componentes del vector una posición hacia la derecha o hacia la izquierda según la opción que seleccione. 

// EJERCICIO 1
function rotarVector(arr) {
    let pregunta = Number(prompt(`-Elija una opción. 
1- Desea rotar hacia la derecha
2- Desea rotar hacia la izquierda`));

    if (pregunta == 2) {
        let temp = arr[0];

        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = temp;
        console.log(arr);
    } else if (pregunta == 1) {
        let temp = arr[arr.length - 1];

        for(let i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
        console.log(arr);
    }
}

// rotarVector([4, 5, 1, 6, 8, 9, 0]);


// 2). Dado un vector ordenado, buscar nro ingresado por usuario, y mostrar por pantalla la posición del vector en la que se encuentra, o avisar al usuario que el nro ingresado no se encuentra en el vector.

// EJERCICIO 2
let vectorOrdenado = [1, 4, 7, 9, 12, 15, 18, 21, 24, 27];
//                    S           M                    F

function binarySearch(arr) {
    let index = Number(prompt(`Escriba un numero`));
    let inicio = 0;
    let fin = arr.length - 1;
    let mitad = Math.floor((inicio + fin) / 2);


    if (index === arr[mitad]) return mitad; 
    while (inicio <= fin) {
        mitad = Math.floor((inicio + fin) / 2);
        if (index === arr[mitad]){
            return mitad;
        } else if (index < arr[mitad]) {
            fin = mitad - 1;
        } else if (index > arr[mitad]){
            inicio = mitad + 1;
        }
    }
    return `No se encontro el numero ${index}`;
}

// console.log(binarySearch(vectorOrdenado));


// 3). Dado un vector, realizar un programa invierta las posiciones de los elementos. 
// var vec_nros=[4, 5, 1, 6, 8, 9, 0, 2, 7]; Debería quedar [7, 2, 0, 9, 8, 6, 1, 5, 4].

// EJERCICIO 3
function invertirVector(arr) {
    let newArray = [];
    let j = 0;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[j] = arr[i];
        j++
    }
    return newArray;
}

// console.log(invertirVector([4, 5, 1, 6, 8, 9, 0, 2, 7]));