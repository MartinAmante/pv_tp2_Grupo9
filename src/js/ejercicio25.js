import { cambioColor } from '../services/funciones25.js';

const boton = document.getElementById('btn_cambioDeColor');

boton.addEventListener('click', () => {
    cambioColor();
});