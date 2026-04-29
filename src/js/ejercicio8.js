//8. Declarar un array denominado notas que almacene 10 notas (números enteros). Con el
//array cargado realice lo siguiente:
//a) Recorrer el array y mostrar cada nota.
//b) Mostrar cuáles notas están aprobadas (>=6)
//c) Mostrar cuáles están desaprobadas (<6).
//d) Calcular el promedio general.
//e) Mostrar la cantidad de notas que están aprobadas.
const notas = [9,6,5,7,4,8,5,9,7,8];
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`);
}

const VerAprobadas = (notas) => {
    const aprobadas = [];

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            aprobadas.push(notas[i]);
        }
    }
    return aprobadas;
}
console.log(`Las notas aprobadas son: ${VerAprobadas(notas)}`);

const VerDesaprobadas = (notas) => {
    const desaprobadas = [];

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 6) {
            desaprobadas.push(notas[i]);
        }
    }
    return desaprobadas;
}
console.log(`Las notas desaprobadas son: ${VerDesaprobadas(notas)}`);

const VerPromedio = (notas) => {
    let prom = 0;

    for (let i = 0; i < notas.length; i++) {
            prom = prom + (notas[i]);
    }
    return prom/notas.length;
}
console.log(`El promedio es: ${VerPromedio(notas)}`);

const VerCA = (notas) => {
    let cont = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            cont = cont + 1;
        }
    }
    return cont;
}
console.log(`Las notas aprobadas son: ${VerCA(notas)}`);
// Tenía la intención de comentar algo pero tengo el cerebro out of service
// Pero bueno use return en lugar de guardar el resultado en una variable porque dichos resultados
// no los voy a usar después, dado que me funcionan para el ejercicio nada más.
//también use notas.length cada vez que hacia las operaciones, dado que si cambia la cantidad
//  de elementos dentro del array, las funciones pueden seguir funcionando con total normalidad.