const container = document.querySelector('.containerPedidos');

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('detalhes')) {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    }
});

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
