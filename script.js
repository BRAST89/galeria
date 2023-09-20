const imagenes = document.querySelectorAll(".imagen");
const modal = document.getElementById("modal");
const modalImagen = document.getElementById("modal-imagen");
const cerrarModal = document.getElementById("cerrar");
let imagenActual = 0;
let touchStartX = 0;

function mostrarImagen(index) {
    modalImagen.src = imagenes[index].querySelector("img").src;
    imagenActual = index;
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50 && modal.style.display === "block") {
        // Deslizar hacia la derecha (anterior imagen)
        if (imagenActual > 0) {
            mostrarImagen(imagenActual - 1);
        }
    } else if (deltaX < -50 && modal.style.display === "block") {
        // Deslizar hacia la izquierda (siguiente imagen)
        if (imagenActual < imagenes.length - 1) {
            mostrarImagen(imagenActual + 1);
        }
    }
}

imagenes.forEach((imagen, index) => {
    imagen.addEventListener("click", () => {
        modal.style.display = "block";
        mostrarImagen(index);
    });
});

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

modal.addEventListener("touchstart", handleTouchStart);
modal.addEventListener("touchend", handleTouchEnd);
