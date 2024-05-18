function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`; // durasi jatuh antara 2-4 detik
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000); // hapus elemen setelah 4 detik
  }

  setInterval(createStar, 100); // buat bintang baru setiap 100ms
  