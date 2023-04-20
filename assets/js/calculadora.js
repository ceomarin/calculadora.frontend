const btnNumbers = document.querySelectorAll(".numero");
const btnOperations = document.querySelectorAll(".operation");
const pantalla = document.querySelector(".pantalla");
let countClick = 0;
let listaClases = [];
let numero1 = [];
let numero2 = [0,0,0];

numero1.forEach(num=>{
    console.log(num);
})


btnNumbers.forEach(button =>{
    button.addEventListener("click",clickButtons);
}) 

btnOperations.forEach(button =>{
    button.addEventListener("click",clickButtons);
}) 

document.addEventListener("DOMContentLoaded",()=>{
    desbloquearPanel();
});


function clickButtons(){
    let auxNumber = 0
    listaClases = this.classList;
    if(listaClases.contains("numero")){
        auxNumber = parseInt(this.innerHTML);
        numero1.push(auxNumber);
        numero1.forEach(num=>{
            pantalla.innerHTML += num;
        });
        console.log(numero1);
    }else if(listaClases.contains("operation")){
        pantalla.innerHTML = this.innerHTML;
    }

}


function desbloquearPanel(){
    document.querySelector("#sumar").classList.remove("disabled");
    document.querySelector("#restar").classList.remove("disabled");
    document.querySelector("#dividir").classList.remove("disabled");
    document.querySelector("#multiplicar").classList.remove("disabled");
    document.querySelector("#igual").classList.remove("disabled");
    document.querySelector("#del").classList.remove("disabled");
}

function bloquearPanel(){
    document.querySelector("#sumar").classList.add("disabled");
    document.querySelector("#restar").classList.add("disabled");
    document.querySelector("#dividir").classList.add("disabled");
    document.querySelector("#multiplicar").classList.add("disabled");
    document.querySelector("#igual").classList.remove("disabled");
    document.querySelector("#del").classList.add("disabled");
}

