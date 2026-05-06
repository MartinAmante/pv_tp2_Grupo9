export const transcripcion = () => {
    const input = document.getElementById("texto1");
    const salida = document.getElementById("resultado");

    input.addEventListener("input", () => {
        salida.textContent = input.value;
    });
};
