let contador=0;
let palabra = String(prompt("Ingrese una palabra: "));
for(let i=0;i<palabra.length;i++){
    if(palabra[i]=="a"){
        contador++;
    }
}
alert("La cantidad de letras a es: " + contador);    