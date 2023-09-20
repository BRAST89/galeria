const imagenes = document.querySelectorAll(".imagen");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const imagenModal = document.querySelector(".imagen-modal");
const cerrarModal = document.getElementById("cerrar");
let imagenActual = 0;

function mostrarImagen(index) {
    imagenModal.style.opacity = 0;
    setTimeout(() => {
        imagenModal.style.backgroundImage = `url('${imagenes[index].style.backgroundImage.replace('url("', '').replace('")', '')}')`;
        imagenModal.style.opacity = 1;
        imagenActual = index;
    }, 300);
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

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    } else if (e.key === "ArrowLeft" && modal.style.display === "block") {
        if (imagenActual > 0) {
            mostrarImagen(imagenActual - 1);
        }
    } else if (e.key === "ArrowRight" && modal.style.display === "block") {
        if (imagenActual < imagenes.length - 1) {
            mostrarImagen(imagenActual + 1);
        }
    }
});

function mostrarImagen(index) {
    console.log("Mostrar imagen llamado con índice " + index);
    imagenModal.style.opacity = 0;
    setTimeout(() => {
        const imgUrl = `url('${imagenes[index].style.backgroundImage.replace('url("', '').replace('")', '')}')`;
        console.log("URL de la imagen: " + imgUrl);
        imagenModal.style.backgroundImage = imgUrl;
        imagenModal.style.opacity = 1;
        imagenActual = index;
    }, 300);
}
