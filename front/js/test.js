document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "Quick View" button
    document.querySelectorAll('.js-show-modal1').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag

            // Get product data from data-attributes of the clicked button
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Update modal content
            document.querySelector(".js-name-detail").textContent = productName;
            document.querySelector(".mtext-106.cl2").textContent = `$${productPrice.toFixed(2)}`;
            document.querySelector("#outputText").textContent = `Product ID: ${productId}\nProduct Name: ${productName}\nProduct Price: $${productPrice.toFixed(2)}\n`;

            // Show the modal (assuming there's a function or class to show it)
            // Example: document.querySelector('.js-modal1').classList.add('show-modal');
            console.log(`Showing modal for: ${productName}`); // Log for debugging
        });
    });
});



const products = [
    {
        id: 1,
        name: "Sock A",
        price: 10.00,
        image: "images/product-01.jpg",
        detailPage: "product-detail.html"
    },
    {
        id: 2,
        name: "Sock B",
        price: 10.00,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },

    {
        id: 2,
        name: "Sock B",
        price: 10.00,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },

    {
        id: 2,
        name: "Sock B",
        price: 10.00,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },

    {
        id: 2,
        name: "Sock B",
        price: 10.00,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },

    {
        id: 2,
        name: "Sock B",
        price: 10.00,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },

    // Add more products as needed
];










let cart = [];

// Function to update the basket icon with the total number of items
function updateBasketIcon() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate the total number of items
    const basketIcon = document.getElementById("basket-icon");
    basketIcon.setAttribute("data-notify", totalItems); // Update the `data-notify` attribute
}

// Function to add item to the cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if it already exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product with quantity of 1
    }

    updateBasketIcon(); // Update the basket icon
}




document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "Quick View" button
    document.querySelectorAll(".js-addcart-detail").forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag

            // Get product data from data-attributes of the clicked button
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Prepare output for display
            let output = `Product ID: ${productId}\nProduct Name: ${productName}\nProduct Price: $${productPrice.toFixed(2)}\n`;

            // Display the output in the HTML
            document.getElementById("outputText").textContent = output;

            // Print the product details to the console
            console.log(output);


        });
    });
});
