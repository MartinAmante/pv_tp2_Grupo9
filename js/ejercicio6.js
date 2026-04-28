
const edades = [34,13,18,24,21,63,48,50];
console.log(edades);

for(let i = 0; i < edades.length; i++)
{
    console.log(edades[i] + " años");
}


const promedioEdades = edad => {
    let suma = 0;
    for(let i = 0; i < edad.length; i++)
    {
      suma = suma + edad[i];
    }
    return "El promedio de las edades es de " + suma / edad.length;
    }
console.log(promedioEdades(edades));

