// funcion para ocultar y mostrar la seccion inicial
const btn_mostrar = document.querySelector(".boton_inicio")
const btn_ocultar = document.querySelector(".btn")
const section_principal = document.querySelector(".section_inicio")

btn_ocultar.addEventListener("click", function() {
    section_principal.classList.add("ocult_section_inicio");
    console.log("Se oculto la seccion principal con exito")
});

btn_mostrar.addEventListener("click", function(){
    section_principal.classList.remove("ocult_section_inicio")
    console.log("Se desplego la seccion principla con exito")
})


function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "Sabor",
    "Tradición",
    "Cultura",
    "Nicaraguenses",
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
