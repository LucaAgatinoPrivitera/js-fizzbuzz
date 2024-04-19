// Dichiaro variabile i (contatore)
let i = 1

//Ciclo che funziona, ma solo in console
for(i; i<=100; i++ ){
if(i%5 ==0){
    console.log("ciao");
}
else if(i%3==0){
    console.log("m3");
}
else{
    console.log(i);
}
}

// Tentativo di modifica della pagina
const contenitore = document.getElementById("container_numbers");
console.log(contenitore);
let newLi = document.createElement("li");
contenitore.innerHTML = contenitore.innerHTML + (newLi);
contenitore.createElement(i);