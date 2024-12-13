
const nieveContainer = document.getElementById("nieve-container");
const botonNieve = document.getElementById("button");


function generarNieve() {
    for (let i = 0; i < 50; i++) {
        const copo = document.createElement("div");
        copo.classList.add("nieve");
        copo.style.left = `${Math.random() * 100}%`;
        copo.style.animationDelay = `${Math.random() * 3}s`;
        copo.style.animationDuration = `${Math.random() * 3 + 2}s`;
        nieveContainer.appendChild(copo);
        setTimeout(() => copo.remove(), 4000);
    }
}

botonNieve.addEventListener("click", generarNieve);
generarNieve();

const tarjeta = document.querySelector('.tarjeta');

tarjeta.addEventListener('mousemove', (event) => {
    const { offsetWidth: width, offsetHeight: height } = tarjeta;
    const { offsetX: x, offsetY: y } = event;

    const rotacionX = ((y / height) - 0.5) * 20;
    const rotacionY = ((x / width) - 0.5) * -20;

    tarjeta.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`;
});

tarjeta.addEventListener('mouseleave', () => {
    tarjeta.style.transform = 'rotateX(0) rotateY(0)';
});

const linkg = document.getElementById('bot');

linkg.addEventListener('click', () => {
    
});