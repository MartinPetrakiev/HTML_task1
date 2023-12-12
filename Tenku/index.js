const buttonReadMoreElement = document.querySelector(".button-read-more");
const hiddenRowArticles = document.querySelectorAll(".row-articles.hidden-container");

let isShowingMore = false;

buttonReadMoreElement.addEventListener("click", toggleItems);

function toggleItems() {
    hiddenRowArticles.forEach(item => {
        if (isShowingMore) {
            item.classList.add("hidden-container");
            buttonReadMoreElement.textContent = "Read more";
        } else {
            item.classList.remove("hidden-container");
            buttonReadMoreElement.textContent = "Show less";
        }
    });

    isShowingMore = !isShowingMore;
}

const images = Array.from(document.querySelectorAll(".hooverable"));
const modal = document.getElementById("imgModal");
const modalImage= document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");

images.forEach(image => {


    image.addEventListener("click", () => {
        const copyImage = image.cloneNode(true);
        if (!copyImage.classList.contains("zoomed-image")) {
            openModal();
            copyImage.classList.add("zoomed-image");
            modalImage.appendChild(copyImage);
        } 
    });
})

closeModalBtn.addEventListener("click", () => {
    modalImage.innerHTML = "";
    closeModal();
})

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
