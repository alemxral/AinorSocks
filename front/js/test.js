document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "Quick View" button
    document.querySelectorAll('.js-show-modal1').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag

            // Get product ID from the clicked button's data attributes
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId); // Find the product in the array

            if (product) {
                // Update modal content
                document.querySelector(".js-name-detail").textContent = product.name;
                document.querySelector(".mtext-106.cl2").textContent = `$${product.price.toFixed(2)}`;
                document.querySelector(".stext-102.cl3").textContent = product.description;

                // Update images in the gallery
                const galleryHTML = product.image1 ? `
                    <div class="item-slick3" data-thumb="${product.image1}">
                        <div class="wrap-pic-w pos-relative">
                            <img src="${product.image1}" alt="IMG-PRODUCT">
                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image1}">
                                <i class="fa fa-expand"></i>
                            </a>
                        </div>
                    </div>
                ` : '';

                document.querySelector(".slick3").innerHTML = galleryHTML;

                // Update color options
                const colorSelect = document.querySelector("#colorSelect");
                colorSelect.innerHTML = product.colors.map(color => `<option>${color}</option>`).join('');

                // Update size options
                const sizeSelect = document.querySelector("#sizeSelect");
                sizeSelect.innerHTML = product.sizes.map(size => `<option>Size ${size}</option>`).join('');

                // Show the modal (assuming there's a function or class to show it)
                document.querySelector('.js-modal1').classList.add('show-modal');
            }
        });
    });
});



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





// Get the container element where the products will be inserted
const productContainer = document.getElementById('product-container');

// Loop through each product and create its HTML block
products.forEach(product => {
    const productHTML = `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            <div class="block2">
                <div class="block2-pic hov-img0">
                    <img src="${products.image}" alt="IMG-PRODUCT">
                    
                    <!-- Quick View button with product-specific data attributes -->
                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                       data-id="${products.id}" data-name="${products.name}" data-price="${products.price}">
                        Quick View
                    </a>
                </div>
                
                <div class="block2-txt flex-w flex-t p-t-14">
                    <div class="block2-txt-child1 flex-col-l ">
                        <a href="${products.detailPage}" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            ${products.name}
                        </a>
                        <span class="stext-105 cl3">
                            $${products.price.toFixed(2)}
                        </span>
                    </div>

                    <div class="block2-txt-child2 flex-r p-t-3">
                        <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                            <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
                            <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Insert the generated HTML into the container
    productContainer.innerHTML += productHTML;
});
