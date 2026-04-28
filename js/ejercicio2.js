//Mostrar por consola los primeros 10 números impares
let i=1,contador=0;
console.log("Los primeros 10 números impares son:");
do{
    if(i%2==1)
    {
        contador++;
        console.log(i);
    }
    i++;
}while(contador!=10)
