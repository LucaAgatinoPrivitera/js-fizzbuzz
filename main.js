// Dichiaro variabile i (contatore)
let i = 1

//Ciclo che funziona, ma solo in console
for(i; i<=100; i++ ){
if(i%5 ==0){
    console.log("buzz");
}
else if(i%3==0){
    console.log("fizz");
}
else if(i%3==0 && i%5==0){
    console.log(fizzbuzz);
}
}

// Tentativo di modifica della pagina
const contenitore = document.getElementById("container_numbers");
console.log(contenitore);
// contenitore.innerHTML = contenitore.innerHTML + (newLi);
// contenitore.createElement(i);
contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>${i}</span> </div>`;
/*
const ciao = 8;
const ticketPrice = document.getElementById("container_numbers")
ticketPrice.appendChild = ("ciao");

let prova = document.getElementById("container_numbers")
prova.innerHTML = "contenuto che voglio stampare dentro un tag p";
*/