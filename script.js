document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".img-ilustrativa");
    
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    imagens.forEach(img => {
        img.title = "Clique para ampliar";
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
