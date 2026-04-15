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
}const cameraInput = document.getElementById("cameraInput");
const preview = document.getElementById("preview");

cameraInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };

    reader.readAsDataURL(file);
  }
});