const bigImage = document.getElementById("bigImage");
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");

let currentIndex = 0;

// Open Lightbox
 function openLightbox(index) {
    lightbox.style.display = "flex";
    bigImage.src = images[index].src;
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";

}

// Next / Previous
function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
bigImage.src = images[currentIndex].src;
}

// Filter Images
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}