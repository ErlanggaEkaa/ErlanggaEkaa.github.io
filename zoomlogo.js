document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-zoomable");

    images.forEach(image => {
        image.addEventListener("mouseenter", function() {
            // Tambahkan class image-zoomed saat kursor masuk ke gambar
            this.classList.add("image-zoomed");
        });

        image.addEventListener("mouseleave", function() {
            // Hapus class image-zoomed saat kursor keluar dari gambar
            this.classList.remove("image-zoomed");
        });
    });
});