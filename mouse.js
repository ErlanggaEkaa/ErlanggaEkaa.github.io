document.addEventListener('mousemove', function(e) {
    const shadow = document.createElement('div');
    shadow.classList.add('cursor-shadow');
    shadow.style.left = `${e.pageX - 15}px`;
    shadow.style.top = `${e.pageY - 15}px`;
    document.body.appendChild(shadow);

    setTimeout(() => {
        shadow.remove();
    }, 1000);
});
