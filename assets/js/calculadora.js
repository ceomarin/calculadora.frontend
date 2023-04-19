
let resultado = document.querySelector(".resultado");
let operacion = "";

var arrayInputs = [];


function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {

    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {

    return num1 / num2;
}

function validar(elemento) {
    let valor = 0;
    let result = 0;
    valor = $(elemento).data('value');

    if (valor !== "borrar" || valor !== "/" || valor !== "*" || valor !== "+" || valor !== "-" || valor !== "=") {
        arrayInputs.push(valor);
        console.log(arrayInputs);
    }
    if (valor === "borrar" || valor === "/" || valor === "*" || valor === "+" || valor === "-" || valor === ".") {
        operacion = valor;
        switch (operacion) {
            case "+":
                operacion = "+";
                document.querySelector("#sumar").classList.add("disabled");
                document.querySelector("#restar").classList.add("disabled");
                document.querySelector("#multiplicar").classList.add("disabled");
                document.querySelector("#dividir").classList.add("disabled");
                break;
            case "-":
                operacion = "-";
                document.querySelector("#sumar").classList.add("disabled");
                document.querySelector("#restar").classList.add("disabled");
                document.querySelector("#multiplicar").classList.add("disabled");
                document.querySelector("#dividir").classList.add("disabled");
                break;
            case "*":
                operacion = "*";
                document.querySelector("#sumar").classList.add("disabled");
                document.querySelector("#restar").classList.add("disabled");
                document.querySelector("#multiplicar").classList.add("disabled");
                document.querySelector("#dividir").classList.add("disabled");
                break;
            case "/":
                operacion = "/";
                document.querySelector("#sumar").classList.add("disabled");
                document.querySelector("#restar").classList.add("disabled");
                document.querySelector("#multiplicar").classList.add("disabled");
                document.querySelector("#dividir").classList.add("disabled");
                break;
            case "borrar":
                resultado.innerHTML = "0.0";
                arrayInputs = [];
                // console.log(arrayInputs);
                operacion = "";
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");
                break;
            default:
                break;
        }

    }

    if (valor === "=") {
        console.log(valor);
        switch (operacion) {
            case "+":

                resultado.innerHTML = sumar(arrayInputs[0], arrayInputs[1]);
                arrayInputs = [];
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");
                operacion = "";
                break;
            case "-":
                resultado.innerHTML = restar(arrayInputs[0], arrayInputs[1]);
                arrayInputs = [];
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");
                operacion = "";
                break;
            case "*":
                resultado.innerHTML = multiplicar(arrayInputs[0], arrayInputs[1]);
                arrayInputs = [];
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");
                operacion = "";
                break;
            case "/":
                resultado.innerHTML = dividir(arrayInputs[0], arrayInputs[1]);
                arrayInputs = [];
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");
                operacion = "";
                break;
            case "borrar":
                resultado.innerHTML = "0.0";
                arrayInputs = [];
                // console.log(arrayInputs);
                operacion = "";
                document.querySelector("#sumar").classList.remove("disabled");
                document.querySelector("#restar").classList.remove("disabled");
                document.querySelector("#multiplicar").classList.remove("disabled");
                document.querySelector("#dividir").classList.remove("disabled");

                break;
            default:
                break;
        }
    }



}
