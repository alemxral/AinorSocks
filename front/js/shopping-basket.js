// Assuming a cart array exists to store the cart items
let cart = [];

// Function to update the basket icon with the total number of items
function updateBasketIcon() {
    const basketIcon = document.getElementById("basket-icon");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate the total number of items
    basketIcon.setAttribute("data-notify", totalItems); // Update the `data-notify` attribute
}

// Function to add item to the cart
function addToCart(product) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If not, add the product with a quantity of 1
        cart.push({ ...product, quantity: 1 });
    }

    // Update the basket icon
    updateBasketIcon();
}

// Event listener for the "Add to cart" button
document.querySelectorAll(".js-addcart-detail").forEach(button => {
    button.addEventListener("click", function () {
        // Get the product data from the button's data attributes
        const productId = this.getAttribute("data-id");
        const productName = this.getAttribute("data-name");
        const productPrice = parseFloat(this.getAttribute("data-price"));

        // Create the product object
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        // Add the product to the cart
        addToCart(product);
    });
});








// Event listener for "Quick View" button
document.querySelectorAll('.js-show-modal1').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag

        // Get product data from data-attributes of the clicked button
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Print the product details to the console
        console.log('Product ID:', productId);
        console.log('Product Name:', productName);
        console.log('Product Price:', productPrice);

        // Assuming you have a function to open the modal and display product details
        showModal(productId, productName, productPrice);
    });
});

// Function to open modal and display product details
function showModal(id, name, price) {
    // Example: Set the content of a modal with product details
    document.getElementById('modal-product-id').textContent = id;
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-price').textContent = `$${price.toFixed(2)}`;

    // Show the modal (assuming you have modal logic here)
    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
}

