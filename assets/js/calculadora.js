// selectores
var input1 = document.querySelector("#num1");
var input2 = document.querySelector("#num2");
var btnSuma = document.querySelector(".suma");
var btnResta = document.querySelector(".resta");
var btnMultiplicacion = document.querySelector(".multiplicacion");
var btnDivision = document.querySelector(".division");

// eventos

document.addEventListener("DOMContentLoaded",()=>{
    input1.addEventListener("change",validar);
    input2.addEventListener("change",validar);
    btnSuma.addEventListener("click",sumar);
    btnResta.addEventListener("click",restar);
    btnMultiplicacion.addEventListener("click",multiplicar);
    btnDivision.addEventListener("click",dividir);
    

})

// funciones
function validar(e){
    e.preventDefault();
if(e.target.value !== ""){

    console.log("error");
    input2.removeAttribute("disabled");
    input1.focus();
    console.log()
}else if(input2.value !== ""){
    btnSuma.removeAttribute("disabled");
    btnResta.removeAttribute("disabled");
    btnDivision.removeAttribute("disabled");
    btnMultiplicacion.removeAttribute("disabled");
    // btnDivision.focus();
}
}

function sumar(e){
    e.preventDefault();
    console.log(e);
}


function restar(e){
    e.preventDefault();
    console.log(e);
}


function multiplicar(e){
    e.preventDefault();
    console.log(e);
}

function dividir(e){
    e.preventDefault();
    console.log(e);
}

function mostrarResultado(resultado) {
    // Crea el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');
    
    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el DOM
   formulario.appendChild(divMensaje);

    // Quitar el alert despues de 3 segundos
    setTimeout( () => {
        divMensaje.remove();
    }, 3000);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }


  function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();

    console.log(cotizacion);
    const  { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;


    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    formulario.appendChild(resultado);
}