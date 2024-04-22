// Dichiaro variabile i (contatore)
let i = 1
const contenitore = document.getElementById("container_numbers");
//Ciclo che funziona, ma solo in console
for (i; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
        contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i_fizzbuzz"> <span>fizzbuzz</span> </div>`;
    }
    else if (i % 5 == 0) {
        console.log("buzz");
        contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i_buzz"> <span>buzz</span> </div>`;
    }
    else if (i % 3 == 0) {
        console.log("fizz");
        contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i_fizz"> <span>fizz</span> </div>`;
    }
    else {
        console.log(i);
        contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i"> <span>${i}</span> </div>`;
    }
}

// Tentativo di modifica della pagina

console.log(contenitore);

/*
let contenitore = "";
    else if (i % 5 == 0) {
        console.log("buzz");
        contenitore.innerHTML = contenitore.innerHTML + `<div class="container_i_fizz"> <span>fizz</span> </div>`; 
        contenitore = contenitore + `<div class="container_i_buzz"> <span>buzz</span> </div>`; //Si toglie Inner.html, perché si mette dopo in basso
    }
document.getElementById("container_numbers").innerHTML = contenitore;
*/