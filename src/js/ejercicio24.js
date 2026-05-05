document.addEventListener('DOMContentLoaded', () => {
    let mostrar = document.querySelector('#mostrar');

    const radio1 = document.querySelector('#gaviota');
    radio1.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

      
        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
        mensaje.textContent = `Has seleccionado: ${e.target.value}`;
        mostrar.appendChild(mensaje);

      console.log(e.target.value);
    })

    const radio2 = document.querySelector('#tucan');
    radio2.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
        mensaje.textContent = `Has seleccionado: ${e.target.value}`;
        mostrar.appendChild(mensaje);

        console.log(e.target.value);
    
    });

    const radio3 = document.querySelector('#hornero');
    radio3.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
        mensaje.textContent = `Has seleccionado: ${e.target.value}`;
        mostrar.appendChild(mensaje);
        
        console.log(e.target.value);
    });

    const radio4 = document.querySelector('#alcon');
    radio4.addEventListener('change', (e) => {
        mostrar.innerHTML = '';
        
        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
        mensaje.textContent = `Has seleccionado: ${e.target.value} peregrino`;
        mostrar.appendChild(mensaje);
        
        console.log(e.target.value);
    });

});