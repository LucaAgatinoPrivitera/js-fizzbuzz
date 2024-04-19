// Dichiaro variabile i (contatore)
let i = 1
const contenitore = document.getElementById("container_numbers");
//Ciclo che funziona, ma solo in console
for(i; i<=100; i++ ){
if(i%3==0 && i%5==0){
    console.log("fizzbuzz");
    contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>fizzbuzz</span> </div>`;
}
else if(i%5==0){
    console.log("buzz");
    contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>buzz</span> </div>`;
}
else if(i%3==0){
    console.log("fizz");
    contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>fizz</span> </div>`;
}
else{
    console.log(i);
    contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>${i}</span> </div>`;
}
}

// Tentativo di modifica della pagina

console.log(contenitore);
// contenitore.innerHTML = contenitore.innerHTML + (newLi);
// contenitore.createElement(i);
contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>${i}</span> </div>`;




/*
for(i=1; i<=100; i++){
    contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>${i}</span> </div>`;
    }
    */
/*
const ciao = 8;
const ticketPrice = document.getElementById("container_numbers")
ticketPrice.appendChild = ("ciao");

let prova = document.getElementById("container_numbers")
prova.innerHTML = "contenuto che voglio stampare dentro un tag p";
*/