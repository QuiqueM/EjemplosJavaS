
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida

x="0"; //número en pantalla

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
         if (x=="0") {	// inicializar un número, 
            pantalla.innerHTML=xx; //mostrar en pantalla
            }
         }
