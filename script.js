const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show Current Image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Previous
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/* Category Filter */
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" ||
                item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";
            }
        });
    });
});