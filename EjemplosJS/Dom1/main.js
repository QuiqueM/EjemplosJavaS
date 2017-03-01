//var cajas = document.getElementsByTagName('div')
//cajas[0].textContent ='hola mundo'
//cajas[1].innerHTML ='<b>hola javascrip</b>'

var caja = document.getElementById('primera')
caja.textContent = 'primera caja'

// no se recomienda agregar elementos con write
//document.write('<div class ="caja">Nuevo elemento</div>')

//5 pasos pasos para agregar un elemento en el DOM
//1-crear el elemento Nuevo elemento
    var elementonuevo=document.createElement('div')
//2.crear el contenido
    var nodoContenido = document.createTextNode('nuevo elemento')
//3.añadir el contenido al elemento
    elementonuevo.appendChild(nodoContenido)
//4.agregar atributos al elemento
    elementonuevo.setAttribute('class','caja colorcoral')

//5. agregar e el nuevo elemento al docuemnto 
    //agrega el elemento al final
    //var contenedor = document.getElementById('contenedor')
    //contenedor.appendChild(elementonuevo)
    
    //agregara el nuevo elemento al inicio
    var contenedor = document.getElementById('contenedor')
    var segunda =document.getElementById('segunda')
    contenedor.insertBefore(elementonuevo,segunda)

    //elimimar la caja con el id tercera
    var tercera = document.getElementById('tercera')
    contenedor.removeChild(tercera)