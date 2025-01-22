document.addEventListener('DOMContentLoaded', function () {
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItems = document.getElementById('cart-items');
        const cartTotalPrice = document.getElementById('cart-total-price');
        const cartCount = document.getElementById('cart-count');

        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.images[item.color]}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Цена: ${item.price} руб.</p>
                    <p>Количество: ${item.quantity}</p>
                    <p>Цвет: ${item.color}</p>
                    <p>Размер: ${item.size}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="editCartItem(${index})">Редактировать</button>
                    <button onclick="removeFromCart(${index})">Удалить</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            totalPrice += item.price * item.quantity;
        });

        cartTotalPrice.textContent = totalPrice;

        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    window.removeFromCart = function(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    };

    window.editCartItem = function(index) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart[index];

        if (item) {
            window.location.href = `product.html?id=${item.id}&color=${item.color}&size=${item.size}&editIndex=${index}`;
        }
    };

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    renderCart();
    updateCartCount();
});