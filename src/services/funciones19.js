export function cambiarTexto(selector, nuevoTexto) {

    const elemento = document.querySelector(selector);
    elemento.textContent = nuevoTexto;
    
}