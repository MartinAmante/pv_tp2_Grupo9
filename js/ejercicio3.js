const  radio = 4;
const calcularVolumen = (r) => {
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    return volumen
};

console.log(`El volumen de la esfera es: ${calcularVolumen(radio).toFixed(2)} m³`);