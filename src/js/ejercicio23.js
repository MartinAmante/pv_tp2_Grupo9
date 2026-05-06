import { cambioPalabras } from '../services/funciones23.js';

const textInput = document.querySelector('#textBehaviour');

textInput.addEventListener('input', (event) => {
     cambioPalabras(event);
});