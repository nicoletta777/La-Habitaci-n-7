// TYPEWRITER
const text = "Acceso concedido. Explorando archivos clasificados...";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

if (document.getElementById("typewriter")) {
  typeWriter();
}

// GLITCH RANDOM
setInterval(() => {
  document.body.style.transform = "skew(1deg)";
  setTimeout(() => {
    document.body.style.transform = "none";
  }, 100);
}, 5000);
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
setInterval(() => {
  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 200);
}, Math.random() * 8000 + 3000);
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
