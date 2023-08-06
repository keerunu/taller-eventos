const div = document.querySelector("div");

function saludoBtn (event) {
    event.stopPropagation();
    alert("Hola!");
}

div.addEventListener("click", () => {alert("Hola! Soy el div")});