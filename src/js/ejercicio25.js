
const boton = document.getElementById('btn_cambioDeColor');

const colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'lightseagreen', 'lightsalmon', 'lightsteelblue', 'lightcyan'];

boton.addEventListener('click', () => {

    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    console.log(`Cambio de color de fondo.`);
});