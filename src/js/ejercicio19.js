import { cambiarTexto } from "../services/funciones19.js";

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#btn-cambiar");

    boton.addEventListener("click", () => {
        cambiarTexto("#texto-51", "51 La felicidad de quienes quieren ser populares depende de los demás, la de los que buscan placer cambia con el humor, que no podemos controlar. Pero la de los sabios viene de sus propias acciones.");
        cambiarTexto("#texto-52", "52 Las cosas no nos afectan por sí solas, sino por lo que pensamos sobre ellas.");
    
    });
});