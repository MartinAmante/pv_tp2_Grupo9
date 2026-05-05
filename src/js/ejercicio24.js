document.addEventListener('DOMContentLoaded', () => {
    let mostrar = document.querySelector('#mostrar');

    const radio1 = document.querySelector('#gaviota');
    radio1.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

      
        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
         mensaje.innerHTML = `Has seleccionado: ${e.target.value}<br>
     <p>Las gaviotas son un grupo de aves clasificadas dentro del orden Charadriiformes y familia
     Laridae, pertenecientes al suborden Lari. Están estrechamente relacionados con los charranes
     , (Sternidae), los cuales eran considerados una subfamilia de las gaviotas. Laridae está compuestos por
      diez géneros y cincuenta y seis especies. Hasta el siglo XXI, la mayoría de las gaviotas fueron colocadas en el género Larus, pero este arreglo es ahora conocido por ser polifilético, lo que lleva a la resurrección de varios géneros.

Las gaviotas son aves entre medianas y grandes, grises al ser crías y cambian al plumaje blanco cuando se hacen adultas, a menudo con marcas negras en la cabeza o las alas. Habitualmente producen llamadas ásperas que recuerdan el llanto o gruñidos,
 poseen un pico robusto y largo y sus pies son palmeados. La mayoría de las gaviotas, particularmente las especies de Larus, son omnívoras, predominantemente carnívoras, anidan en el suelo y capturan comida viva o la roban de manera oportunista. Los alimentos vivos a menudo incluyen cangrejos y peces pequeños.
  Las gaviotas tienen mandíbulas desencajadas que les permite consumir grandes presas. Son aves muy vinculadas a las zonas costeras, si bien algunas especies, como la gaviota reidora, han colonizado zonas de interior y no es raro verlas en lagunas, embalses, lagos y cualquier masa de agua que les proporcione alimento, sin necesidad
   de retornar a la costa. Las especies grandes tardan hasta cuatro años en alcanzar el plumaje adulto completo, pero las especies pequeñas normalmente solo dos. Su esperanza de vida media suele ser elevada, con una edad máxima de cuarenta y nueve años para la gaviota argéntea.</p>`;
        mostrar.appendChild(mensaje);

      console.log(e.target.value);
    })

    const radio2 = document.querySelector('#tucan');
    radio2.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
         mensaje.innerHTML = `Has seleccionado: ${e.target.value}<br><br>
         Los tucanes son aves de plumas y pico de colores muy llamativos. Miden 65 cm y pesan de 130 hasta 680 g. Su pico es
          largo con una longitud aproximada de 20 cm y alcanzando su talla definitiva después de varios meses.
          Tiene pequeños dientes como sierras, llega a medir la tercera parte de su tamaño y es muy ligero por
         las numerosas cámaras que tiene por lo que no le dificulta el vuelo. Su lengua es muy larga (llega a medir hasta 14 cm),
         angosta, aplanada y termina en punta. Tiene alas pequeñas, cortas y redondeadas. La cola es cuadrada en unas especies y llama la atención la facilidad con que
          la mueve hacia arriba y abajo. Los ojos están rodeados por una piel que a veces es de colores vivos y la vista es su sentido más desarrollado. Las patas son cortas y
           fuertes, facilitando la sujeción a las ramas y el desplazamiento entre árboles. No muestran dimorfismo sexual, los sexos son muy similares aunque la hembra presenta el pico
            ligeramente más pequeño y a veces más recto que el macho.
Hay teorías que han sostenido que utiliza el pico como arma, pero al ser esponjoso y ligero parece desestimarse, aunque los defensores de
 esta postura siguen sosteniendo la posibilidad de que su forma sea para crear un efecto disuasorio y así hacer desistir a los depredadores. Otras teorías
  han sostenido que su forma favorece el poder tomar los frutos que se encuentran en las puntas de las ramas muy delgadas o romper cáscaras duras de algunos
   frutos, pero dado que otras aves con picos más pequeños pueden hacerlo, no parece una teoría sólida. Se ha descubierto recientemente en un estudio
    de la Universidad Estatal Paulista de Brasil y la Universidad Brock de Canadá, que su pico es utilizado para regular la temperatura corporal, regulando el flujo sanguíneo de los numerosos 
    vasos del pico. El animal aumenta o disminuye la cantidad de flujo sanguíneo que fluye a través del pico según sus necesidades. Además, está formado por pequeñas placas de forma hexagonal de una sustancia llamada queratina, que forma una estructura parecida a la de una esponja. Estas características lo hacen asombrosamente resistente a los golpes, pero a la vez muy liviano.
Su promedio de vida está en veinte años. En cautividad su esperanza de vida es menor, dieciocho años. Esto se debe a que enferman de hemocromatosis, ya que su alimentación contiene un alto contenido en hierro.`;
        mostrar.appendChild(mensaje);

        console.log(e.target.value);
    
    });

    const radio3 = document.querySelector('#hornero');
    radio3.addEventListener('change', (e) => {
        mostrar.innerHTML = '';

        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
        mensaje.innerHTML = `Has seleccionado: ${e.target.value} <br><br>El hornero común (Furnarius rufus) es una especie 
        de ave paseriforme de la familia de los furnáridos endémica de América del Sur. Es un pájaro pequeño que mide entre 16 y 23 cm de longitud y no 
        presenta dimorfismo sexual aparente.
El hornero común es un ave insectívora que consigue su alimento mientras camina por el suelo. Su dieta
 consiste principalmente en pequeños invertebrados como coleópteros, grillos, mariposas y otros insectos. Se trata de una especie
  monógina que construye un característico nido de barro en árboles, construcciones y otras estructuras. La hembra deposita de tres a cuatro huevos, que ambos
   sexos ayudan a incubar. Al ser un ave de hábitos no migratorios, vive y se reproduce en su área de residencia. Debido a su amplia área de distribución y su
    abundancia en incremento, el hornero común es clasificado como de preocupación menor por la Unión Internacional para la Conservación de la Naturaleza.
El hornero común se favoreció con la presencia del ser humano, convirtiéndose en el centro de muchas leyendas y canciones pertenecientes al folclore de América
 del Sur. Además, los agricultores admiten al hornero común ya que este protege el sembrado de insectos dañinos. Es el ave nacional de Argentina. Apareció en la moneda argentina
  de medio centavo de austral, acuñada en 1985, y a partir de 2017 en el billete de mil pesos.`
        mostrar.appendChild(mensaje);
        
        console.log(e.target.value);
    });

    const radio4 = document.querySelector('#halcon');
    radio4.addEventListener('change', (e) => {
        mostrar.innerHTML = '';
        
        const mensaje= document.createElement('div');
        mensaje.className = 'info-box' ;
         mensaje.innerHTML = `Has seleccionado: ${e.target.value} peregrino <br><br>
         Su longitud corporal varía entre 34 y 58 cm, y su envergadura es de entre 80 y 120 cm.
          Sus alas delgadas y terminadas en punta le dan un buen impulso. Los machos y las hembras tienen un plumaje
           y marcas similares, pero, como en otras aves de presa, muestra un marcado dimorfismo sexual en
        su tamaño, con la hembra un 30 % mayor que el macho. Los machos pesan entre 440 y 750 g, mientras que las hembras, notablemente
         mayores, pesan entre 910 y 1500 g.
La espalda y las largas y puntiagudas alas de los adultos varían generalmente de un negro azulado a un gris pizarra con barras oscuras 
indistintas; los extremos de las alas son negros. El vientre y la zona interna de las alas varían de color blanco a oxidado y con finas barras limpias de
 color marrón oscuro o negro. La cola, coloreada como la espalda pero con barras limpias y finas, es larga, estrecha y redondeada al final con la punta negra 
 y una banda blanca en su extremo. La parte superior de la cabeza, junto con su amplia bigotera a lo largo de las mejillas, es negra, contrastando de forma notoria 
 con los lados pálidos del cuello y la garganta blanca. La cera es amarilla, como las patas y el pico, y las garras son negras. El pico superior es serrado cerca de la punta, una adaptación
  que permite a los halcones matar a sus presas cortándoles la columna vertebral en el cuello. Los jóvenes presentan una coloración más parda y con la parte inferior con rayas, más que barras, y
   tienen la cera de color azulado pálido.`;
        mostrar.appendChild(mensaje);
        
        console.log(e.target.value);
    });

});