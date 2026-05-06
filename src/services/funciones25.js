export const cambioColor = () => {
    const colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'lightseagreen', 'lightsalmon', 'lightsteelblue', 'lightcyan'];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    console.log(`Cambio de color de fondo.`);
};