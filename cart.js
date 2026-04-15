let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(product + " added to cart!");
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function loadCart() {
    let stored = localStorage.getItem("cart");
    if (stored) {
        cart = JSON.parse(stored);
        updateCartCount();
    }
}

function goToCart() {
    window.location.href = "cart.html";
}