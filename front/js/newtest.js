const products = [
    {
        id: 1,
        name: "Sock Alejandro",
        description: "Comfortable cotton socks",
        price: 10.00,
        image: "images/product-01.jpg",
        image: "images/product-01.jpg",
        image1: "images/product-01.jpg",
        image2: "images/post-1.jpg",
        image3: "images/product-01.jpg",
        color: "unique",
        detailPage: "product-detail.html",
        colors : ["Red", "Blue", "Green"], // Example color options
        sizes : ["S", "M", "L"],
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

                const imageElements = document.querySelectorAll(".slick3 .item-slick3");
                const images = [product.image, product.image1, product.image2, product.image3];  // Images array

                imageElements.forEach((element, index) => {
                    const imgTag = element.querySelector("img");
                    const anchorTag = element.querySelector("a");
                
                    // Check if the image exists
                    if (images[index]) {
                        imgTag.src = images[index];  // Update the image source
                        anchorTag.href = images[index];  // Update the href for the expand button
                    } else {
                        // Use the index to create the selector for the number attribute
                        const numberToRemove = index + 1;  // Assuming number starts from 1
                        const selection = `.item-slick3[number="${numberToRemove}"]`;
                        const elementToRemove = document.querySelector(selection);
                
                        // Remove the element if it exists
                        if (elementToRemove) {
                            elementToRemove.remove();
                        }
                    }
                });
                

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
