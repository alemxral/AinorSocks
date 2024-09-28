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
        colors : ["Red", "Blux", "Green"], // Example color options
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

            // Wrap the main logic in a try-catch block to handle errors
            try {
                // Get product ID from the clicked button's data attributes
                const productId = this.getAttribute('data-id');
                const product = products.find(p => p.id == productId); // Find the product in the array

                if (product) {
                    // Update modal content
                    try {
                        document.querySelector(".js-name-detail").textContent = product.name;
                        document.querySelector(".mtext-106.cl2").textContent = `$${product.price.toFixed(2)}`;
                        document.querySelector(".stext-102.cl3").textContent = product.description;
                    } catch (err) {
                        console.error("Error updating modal content: ", err);
                    }

                    // Update color options
                    try {
                        const colorSelect = document.querySelector("#colorSelect");
                        const colors = product.colors || []; // Defaults to an empty array if undefined
                        colorSelect.innerHTML = colors.map(color => `<option>${color}</option>`).join('');
                    } catch (err) {
                        console.error("Error updating color options: ", err);
                    }

                    // Update size options
                    try {
                        const sizeSelect = document.querySelector("#sizeSelect");
                        const sizes = product.sizes || []; // Defaults to an empty array if undefined
                        sizeSelect.innerHTML = sizes.map(size => `<option>Size ${size}</option>`).join('');
                    } catch (err) {
                        console.error("Error updating size options: ", err);
                    }

                    // Update images in the modal
                    try {
                        // Define images array
                        const images = [product.image1, product.image2, product.image3]; // Images array
                        
                        // Filter valid images before processing
                        const validImages = images.filter(image => image && /\.(jpg|jpeg|png)$/i.test(image));
                        const validImageCount = validImages.length; // Count of valid images
                        console.log("Valid images:", validImageCount);

                        const slick3Container = document.querySelector(".wrap-slick3.flex-sb.flex-w"); // Corrected selector
                        slick3Container.innerHTML = ''; // Clear existing image elements

                        if (validImageCount === 0) {
                            slick3Container.innerHTML = ''; // Clear content if no valid images
                        } else if (validImageCount === 1) {
                            slick3Container.innerHTML = `
                                <div class="wrap-slick3-dots"></div>
                                <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
                                <div class="slick3 gallery-lb">
                                    <div class="item-slick3" data-thumb="images/product-detail-01.jpg" number="1">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image1}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image1}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;
                        } else if (validImageCount === 2) {
                            slick3Container.innerHTML = `
                                <div class="wrap-slick3-dots"></div>
                                <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
                                <div class="slick3 gallery-lb">
                                    <div class="item-slick3" data-thumb="images/product-detail-01.jpg" number="1">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image1}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image1}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item-slick3" data-thumb="images/product-detail-02.jpg" number="2">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image2}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image2}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;
                        } else if (validImageCount === 3) {
                            slick3Container.innerHTML = `
                                <div class="wrap-slick3-dots"></div>
                                <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
                                <div class="slick3 gallery-lb">
                                    <div class="item-slick3" data-thumb="images/product-detail-01.jpg" number="1">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image1}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image1}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item-slick3" data-thumb="images/product-detail-02.jpg" number="2">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image2}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image2}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="item-slick3" data-thumb="images/product-detail-03.jpg" number="3">
                                        <div class="wrap-pic-w pos-relative">
                                            <img src="${product.image3}" alt="IMG-PRODUCT">
                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${product.image3}">
                                                <i class="fa fa-expand"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;
                        }

                        $('.wrap-slick3').each(function(){
                            $(this).find('.slick3').slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                infinite: true,
                                autoplay: false,
                                autoplaySpeed: 6000,
                
                                arrows: true,
                                appendArrows: $(this).find('.wrap-slick3-arrows'),
                                prevArrow:'<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                                nextArrow:'<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
                
                                dots: true,
                                appendDots: $(this).find('.wrap-slick3-dots'),
                                dotsClass:'slick3-dots',
                                customPaging: function(slick, index) {
                                    var portrait = $(slick.$slides[index]).data('thumb');
                                    return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
                                },  
                            });
                        });

                        console.log("Number of valid images:", validImageCount);
                    } catch (err) {
                        console.error("Error updating images: ", err);
                    }
                }
            } catch (err) {
                console.error("Error in main event handler: ", err);
            }
        });
    });
});
