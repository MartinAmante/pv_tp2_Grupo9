export const capitales = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Uruguay: "Montevideo",
    Perú: "Lima",
    Colombia: "Bogotá"
};

export const actualizarCapital = (pais, selectCapital) => {
    selectCapital.innerHTML = `<option>${capitales[pais]}</option>`;
};