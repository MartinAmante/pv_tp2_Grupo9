const nombres = ["Mauricio", "Gustavo", "Tomas", "Fernando", "Matias", "Martin"];

const NombreLargo = (Lista) => {
    let nombreMasLargo = "";

    Lista.forEach(
        (nombre) => {
        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    });

    return nombreMasLargo;
};

console.log(`Los nombres son: ${nombres}`);
console.log(`El nombre más largo es: ${NombreLargo(nombres)}`);