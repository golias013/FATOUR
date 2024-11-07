const detalhesButton = document.querySelector('.detalhes');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

detalhesButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchValue = document.getElementById('search-bar').value.trim().toLowerCase();
    const orders = document.querySelectorAll('.order');

    let found = false;

    orders.forEach(order => {
        const orderCode = order.querySelector('h3, .product-code').textContent.toLowerCase();

        if (orderCode.includes(searchValue)) {
            order.classList.remove('highlight');

            setTimeout(() => {
                order.classList.add('highlight');
            }, 10);
            setTimeout(() => {
                order.classList.remove('highlight');
            }, 3000);

            found = true;
        } else {
            order.classList.remove('highlight');
        }
    });

    if (!found) {
        alert('Nenhum pedido encontrado com esse código.');
    }
});
