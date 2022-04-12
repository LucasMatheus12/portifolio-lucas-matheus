let contat; 
let yCont; 

window.addEventListener("load",function(){
    contat = document.querySelector(".contatos"); 
    yCont = contat.offsetTop; 
    yCont -= 50; 
}); 


window.addEventListener("scroll", function(){
    let header = document.querySelector("header"); 
    header.classList.toggle("background__rolagem", window.scrollY > 100); 

    header.classList.toggle("background__rolagem2", window.scrollY > yCont);

});

window.addEventListener("scroll", function(){
    let navBar = document.querySelector(".cabecalho__nav-bar");
    navBar.classList.toggle("mostra_history", window.scrollY > 550 && window.scrollY < 1200); 

    navBar.classList.toggle("mostra_hab", window.scrollY > 1200 && window.scrollY < 1800);

    navBar.classList.toggle("mostra_proj", window.scrollY > 1800 && window.scrollY < yCont);

    navBar.classList.toggle("mostra_cont", window.scrollY > 3200);

});



// Carrossel 


let count =1; 
document.getElementById("radio1").checked = true; 

setInterval(function(){
    nextImage();

}, 3000)

function nextImage(){
    count++;
    if(count>4){
        count = 1; 
    }
    document.getElementById("radio"+count).checked = true; 
}