// Select all thumbnail images
const images = document.querySelectorAll(".lightbox-img");

// Select the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");

// Open lightbox when clicking an image
images.forEach(img => {
    img.addEventListener("click", () => {
        const largeSrc = img.getAttribute("data-large");
        lightboxImage.src = largeSrc;
        lightbox.style.display = "block";
    });
});

// Close when clicking the X
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
