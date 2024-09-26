const products = [
    {
        id: 1,
        name: "Sock Alejandro",
        description: "Comfortable cotton socks",
        price: 10.00,
        image: "images/product-01.jpg",
        detailPage: "product-detail.html"
    },
    {
        id: 2,
        name: "Esprit Ruffle Shirt",
        description: "Stylish and comfortable",
        price: 16.64,
        image: "images/product-02.jpg",
        detailPage: "product-detail.html"
    },
    // Add more products...
];

// Select the container where products will be inserted
const productContainer = document.getElementById('product-container');
const messageContainer = document.getElementById('message-container');

// Check if productContainer exists in the DOM
if (productContainer) {
    console.log("Product container found:", productContainer);

    // Add a success message to the screen
    messageContainer.innerHTML = "<p>Product container found. Adding products...</p>";

    // Loop through each product and generate the HTML
    products.forEach(product => {
        console.log("Processing product:", product.name);

        const productHTML = `
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <div class="block2">
                    <div class="block2-pic hov-img0">
                        <img src="${product.image}" alt="IMG-PRODUCT">
                        
                        <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                           data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                            Quick View
                        </a>
                    </div>
                    
                    <div class="block2-txt flex-w flex-t p-t-14">
                        <div class="block2-txt-child1 flex-col-l ">
                            <a href="${product.detailPage}" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                ${product.name}
                            </a>
                            <span class="stext-105 cl3">
                                $${product.price.toFixed(2)}
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
        
        // Insert the product HTML into the container
        productContainer.innerHTML += productHTML;
    });

    // Update the message after products have been added
    messageContainer.innerHTML = "<p>Products have been successfully added.</p>";
} else {
    // Display error message if container is not found
    console.error("Product container not found!");
    messageContainer.innerHTML = "<p style='color: red;'>Error: Product container not found.</p>";
}
