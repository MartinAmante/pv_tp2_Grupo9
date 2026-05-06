import { actualizarCapital, capitales } from "../services/funciones21.js";

const selectPais = document.querySelector("#pais");
const selectCapital = document.querySelector("#capital");

actualizarCapital(selectPais.value, selectCapital);

selectPais.addEventListener("change", () => {
    const paisSeleccionado = selectPais.value;

    actualizarCapital(paisSeleccionado, selectCapital);

    console.log(
        `País seleccionado: ${paisSeleccionado} - Capital: ${capitales[paisSeleccionado]}`
    );
});