




document.addEventListener('DOMContentLoaded', function() {
    updateCartNotification();
  });


const products = [
    {
        id: 1,
        name: "Socks Alejandro",
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
        name: "Socks B",
        description: "Comfortable cotton socks",
        price: 18.00,
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
        id: 3,
        name: "Socks C",
        description: "Comfortable cotton socks",
        price: 14.00,
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
];

// Select the container where products will be inserted
const productContainer = document.getElementById('product-container');


// Check if productContainer exists in the DOM
if (productContainer) {
    console.log("Product container found:", productContainer);


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
                                €${product.price.toFixed(2)}
                            </span>
                        </div>

                        <div class="block2-txt-child2 flex-r p-t-3">
                            <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                              
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert the product HTML into the container
        productContainer.innerHTML += productHTML;

          // <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
        // <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">


    });

   
} else {
    // Display error message if container is not found
    console.error("Product container not found!");
  
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

                        const bottomElement = document.querySelector('.flex-c-m.stext-101.cl0.size-101.bg1.bor1.hov-btn1.p-lr-15.trans-04.js-addcart-detail');

                        if (bottomElement) {
                          bottomElement.setAttribute('data-id', productId); // Example: setting a data attribute
                          const checkId = bottomElement.getAttribute('data-id');
                          console.log('Product ID:', checkId);
                        } else {
                          console.error('Bottom element not found');
                        }




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

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "Add to Cart" button
    document.querySelectorAll('.js-addcart-detail').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button action

            // Get product ID from button's data attributes
            const productId = this.getAttribute('data-id');
            console.log("Product ID taken from the bottom :", productId);

             const product = products.find(p => p.id == productId); // Find the product in the array
             console.log("Product object was found by ID:", product);


            if (!product) {
                console.error("Product not found");
                return; // Exit if product not found
            }

            const productprice = `${product.price.toFixed(2)}`;
            console.log("Product price:", productprice);
           

            // Get selected color
            const colorSelect = document.getElementById('colorSelect');
            const selectedColor = colorSelect ? colorSelect.value : '';

            // Get selected size
            const sizeSelect = document.getElementById('sizeSelect');
            const selectedSize = sizeSelect ? sizeSelect.value : '';

            // Get selected amount
            const amountInput = document.querySelector('.num-product');
            const selectedAmount = amountInput ? parseInt(amountInput.value) : 1;

            // Reuse the addToCart function to handle adding the product to the cart
            addToCart(productId, selectedColor, selectedSize, selectedAmount,productprice);

            // After adding, log the updated cart and total products
            console.log("Total number of products in the cart:", getTotalProductsInCart());
            console.log("Log Products:", logAllProductIdsInCart());
            
            console.log("Display cart",displayCart());
            console.log("Total cart cost:", getTotalCartCost());
        

   
           
        });
    });
});




// Get current cart from localStorage or initialize it if not present
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to get the cart from localStorage (to be reused)
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to save the cart to localStorage (to be reused)
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart logic
function addToCart(productId, selectedColor, selectedSize, selectedAmount,productprice) {
    let cart = getCart(); // Reuse the getCart function

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId && item.color === selectedColor && item.size === selectedSize);
    console.log("Existing product index:", existingProductIndex);

    if (existingProductIndex > -1) {
        // Update quantity of existing product in the cart
        cart[existingProductIndex].amount += selectedAmount;
        console.log("Amount of products for the given ID:", cart[existingProductIndex].amount);
    } else {

        // Create the new product object, including the price
        const cartItem = {
            id: productId,
            color: selectedColor,
            size: selectedSize,
            amount: selectedAmount,
            price: productprice // Ensure price is included as a number
        };

        // Add new product to the cart
        cart.push(cartItem);
    }

    // Save the updated cart to localStorage
    saveCart(cart);
    updateCartNotification();
}


// Function to display the cart in a variable table format
function displayCart() {
    const cart = getCart();
    console.log("Current Cart:");
    
    // Log each item in the cart in a table-like format
    cart.forEach(item => {
        console.log(`Product ID: ${item.id}, Color: ${item.color}, Size: ${item.size}, Amount: ${item.amount}, Price: ${item.price}`);
    });

}

// Function to get the total number of products in the cart
function getTotalProductsInCart() {
    const cart = getCart();
    let totalAmount = 0;

    // Sum up the amounts of all products
    cart.forEach(product => {
        totalAmount += product.amount;
    });

    return totalAmount;
}

// Function to log all product IDs in the cart to the console
function logAllProductIdsInCart() {
    const cart = getCart();
    console.log("Products in the cart:");

    // Log the ID of each product
    cart.forEach(product => {
        console.log("Product ID:", product.id,"amount:",product.amount);
    });
}

// Function to update the cart notification (i.e., number of items in cart)
function updateCartNotification() {
    // Get total number of products in the cart
    const totalProducts = getTotalProductsInCart();

    // Find the basket icon element by ID
    const basketIcon = document.getElementById('basket-icon');
    const laptopbasketIcon = document.getElementById('laptop-basket-icon');
    // Update the data-notify attribute with the total number of products
    basketIcon.setAttribute('data-notify', totalProducts);
    laptopbasketIcon.setAttribute('data-notify', totalProducts);

}

// Function to get the total cost of all products in the cart
function getTotalCartCost() {
    const cart = getCart();
    
    // Initialize totalCost as 0
    let totalCost = 0; 

    // Calculate the total cost by summing the price * amount for each product
    cart.forEach(product => {
        totalCost += product.price * product.amount; // Update totalCost
    });

    console.log("Total cost of the cart:", totalCost); 

    return totalCost.toFixed(2); // Return totalCost formatted to 2 decimal places
}



// Clear cart function (as defined above)
function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    updateCartNotification();
    console.log("Cart has been cleared.");
}





document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the basket icon
    const basketIcon = document.getElementById('basket-icon');
    
    if (basketIcon) {
        basketIcon.addEventListener('click', function() {
            // Generate the cart list when the basket icon is clicked
            generateCartList();

        });
    } else {
        console.error('Basket icon not found');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the basket icon
    const basketIcon = document.getElementById('laptop-basket-icon');
    
    if (basketIcon) {
        basketIcon.addEventListener('click', function() {
            // Generate the cart list when the basket icon is clicked
            generateCartList();

        });
    } else {
        console.error('Basket icon not found');
    }
});

// Function to generate the cart list
function generateCartList() {
    const cartItems = getCart(); // Assuming getCart() returns an array of product objects
    const cartListElement = document.querySelector('.header-cart-wrapitem'); // Select the UL element

    // Clear any existing items in the list
    cartListElement.innerHTML = ''; // Clear existing list items

    // Loop through the cart items and create list items
    cartItems.forEach(item => {
        // Find the product in the array
        const product = products.find(p => p.id == item.id);
        console.log("Product object was found by ID:", product);

        if (!product) {
            console.error("Product not found");
            return; // Exit if product not found
        }

        const listItem = document.createElement('li');
        listItem.className = 'header-cart-item flex-w flex-t m-b-12';

        listItem.innerHTML = `
            <div class="header-cart-item-img">
                <img src="${product.image}" alt="IMG">
            </div>

            <div class="header-cart-item-txt p-t-8">
                <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    ${product.name}
                </a>

                <span class="header-cart-item-info">
                   ${item.size} - ${item.color} - Price: ${item.amount} x $${product.price.toFixed(2)}
                </span>
            </div>
        `;

        // Insert the list item into the cart list
        cartListElement.insertAdjacentElement('beforeend', listItem);
    });

    // Calculate the total cost and create a total element
  // Calculate the total cost
  const totalCost = getTotalCartCost(); // Get the total cost from the function

  const headerCartTotalElement = document.querySelector('.header-cart-total.w-full.p-tb-40');

  if (headerCartTotalElement) {
    // Option 1: Modify existing content
    headerCartTotalElement.textContent = `Total: €${totalCost}`;}

   

}

// Update your generateCartTable function to include the double-click listener
function generateCartTable() {
    const cartItems = getCart(); // Assuming getCart() returns an array of product objects
    const cartTable = document.querySelector('.table-shopping-cart'); // Select the table element

    // Clear any existing rows in the table, except for the header
    cartTable.innerHTML = `
        <tr class="table_head">
            <th class="column-1">Product</th>
            <th class="column-2"></th>
            <th class="column-3">Price</th>
            <th class="column-3">Size</th>
            <th class="column-3">Color</th>
            <th class="column-5">Quantity</th>
            <th class="column-6">Total</th>
        </tr>
    `;

    // Loop through the cart items and create table rows
    cartItems.forEach((item, index) => {
        const product = products.find(p => p.id == item.id);

        if (!product) {
            console.error("Product not found");
            return;
        }

        const tableRow = document.createElement('tr');
        const rowId = `row-${index}`; // Unique ID based on row number
        tableRow.id = rowId; // Assign a unique ID to the row based on its index

        tableRow.innerHTML = `
            <td class="column-1">
                <div class="how-itemcart1" ondblclick="removeItemFromCart('${rowId}')">
                    <img src="${product.image}" alt="IMG">
                </div>
            </td>
            <td class="column-2">${product.name}</td>
            <td class="column-3">€${product.price.toFixed(2)}</td>
            <td class="column-3">${item.size}</td>
            <td class="column-3">${item.color}</td>
            <td class="column-5">
                <div class="wrap-num-product flex-w m-l-auto m-r-0">
                    <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i class="fs-16 zmdi zmdi-minus"></i>
                    </div>
                    <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product-${product.id}" value="${item.amount}">
                    <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i class="fs-16 zmdi zmdi-plus"></i>
                    </div>
                </div>
            </td>
            <td class="column-6" id="total-${rowId}" data-price="${product.price}">€${(product.price * item.amount).toFixed(2)}</td>
        `;

        cartTable.insertAdjacentElement('beforeend', tableRow);
    });

    // Re-attach the event listeners for the increment and decrement buttons
    attachEventListeners();

    // Update the total cost
    const totalCost = getTotalCartCost();
    const cartTotalElement = document.querySelector('.cart-total');

    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
    }
}

// Function to remove item from the cart based on row ID
function removeItemFromCart(rowId) {
    const cart = getCart(); // Get the current cart
    const rowIndex = parseInt(rowId.split('-')[1]); // Extract the index from the row ID

    console.log(`Removing item from cart at row index: ${rowIndex}`);

    // Remove the item from the cart
    cart.splice(rowIndex, 1);

    // Save the updated cart back to storage
    saveCart(cart);
    
    // Regenerate the cart table to reflect the changes
    generateCartTable();
    logAllProductIdsInCart();
    updateSubtotal(); 
    updateCartNotification();


}



function attachEventListeners() { 
    // Select all the increment and decrement buttons
    const btnNumProductDown = document.querySelectorAll('.btn-num-product-down');
    const btnNumProductUp = document.querySelectorAll('.btn-num-product-up');

    btnNumProductDown.forEach(button => {
        button.addEventListener('click', function() {
            const input = button.nextElementSibling; // Get the input next to this button
            const rowId = button.closest('tr').id; // Get the unique row ID
            const totalElement = document.querySelector(`#total-${rowId}`); // Find the total element for this row
            
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;

                // Update the product total price
                const productPrice = parseFloat(totalElement.dataset.price); // Get the price from data attribute
                totalElement.textContent = `€${(productPrice * input.value).toFixed(2)}`;
                
                updateSubtotal(); // Update the subtotal whenever quantity changes
            }
        });
    });

    btnNumProductUp.forEach(button => {
        button.addEventListener('click', function() {
            const input = button.previousElementSibling; // Get the input before this button
            const rowId = button.closest('tr').id; // Get the unique row ID
            const totalElement = document.querySelector(`#total-${rowId}`); // Find the total element for this row
            
            let value = parseInt(input.value);
            input.value = value + 1;

            // Update the product total price
            const productPrice = parseFloat(totalElement.dataset.price); // Get the price from data attribute
            totalElement.textContent = `€${(productPrice * input.value).toFixed(2)}`;

            updateSubtotal(); // Update the subtotal whenever quantity changes
        });
    });
}





document.addEventListener('DOMContentLoaded', function() {
    generateCartTable();
    updateSubtotal();
});



// Function to update the subtotal in the cart
function updateSubtotal() {
    const subtotalElement = document.querySelector('#subtotal-amount'); // Select the element showing the subtotal
    const subtotal = getTotalCartCost(); // Get the updated total cost from the function

    // Update the content of the subtotal element
    subtotalElement.textContent = `€${subtotal}`;
}


// Function to handle cart updates
function handleUpdateCartClick() {
    console.log("Update Cart button clicked");

    // Get the updated cart items from the UI
    const updatedCartItems = getUpdatedCartItems(); 
    console.log("Updated cart items from UI:", updatedCartItems);

    // Get the current cart items from localStorage or state
    let currentCart = getCart(); // Assuming getCart() retrieves the cart from local storage or state
    console.log("Current cart items from storage:", currentCart);

    // Update the quantities in the current cart based on the updated cart
    updatedCartItems.forEach((updatedItem, index) => {
        if (currentCart[index].id === updatedItem.id && currentCart[index].size === updatedItem.size) {
            console.log(`Updating item with ID ${updatedItem.id} and size ${updatedItem.size} to new amount: ${updatedItem.amount}`);
            currentCart[index].amount = updatedItem.amount; // Update the amount of the corresponding item
        } else {
            console.log(`No match found for item with ID ${updatedItem.id} and size ${updatedItem.size}`);
        }
    });

    // Save the updated cart back to localStorage
    console.log("Saving updated cart to localStorage:", currentCart);
    saveCart(currentCart);

    // Optionally, you can call a function to update the display/UI with the new cart data
    updateCartNotification();
    console.log("Cart notification updated");

    // Log updated product IDs and quantities
    logAllProductIdsInCart();

    updateSubtotal(); 
    generateCartList();
    updateCartNotification();

   




}

function getUpdatedCartAmounts() {
    const cart = getCart(); // Get the current cart from localStorage or any storage
    const cartTableRows = document.querySelectorAll('tr[id^="row-"]'); // Select rows that have an ID starting with "row-"

    console.log("Number of cart rows found:", cartTableRows.length);

    // Update the amount of items in the cart based on the table rows
    cartTableRows.forEach((row) => {
        const rowId = row.id; // Get the unique row ID, e.g., "row-0", "row-1"
        const productId = row.querySelector('.num-product').name.split('-')[2]; // Extract product ID from input name
        const size = row.querySelectorAll('td')[3].textContent.trim(); // Extract size from the 4th column
        const color = row.querySelectorAll('td')[4].textContent.trim(); // Extract color from the 5th column
        const newAmount = parseInt(row.querySelector('.num-product').value); // Get the updated amount from input

        console.log(`Row ${rowId}: Updating product ID ${productId} with size ${size} and color ${color} to new amount: ${newAmount}`);

        // Find the corresponding item in the cart and update its amount
        const cartItem = cart.find(item => item.id === productId && item.size === size && item.color === color);

        if (cartItem) {
            cartItem.amount = newAmount; // Update the amount
            console.log(`Updated cart item:`, cartItem);
        } else {
            console.error(`Item with ID ${productId}, size ${size}, and color ${color} not found in the cart!`);
        }
    });

    saveCart(cart); // Save the updated cart back to storage
    console.log("Cart updated successfully");
}



// Function to log all product IDs and quantities in the cart (for debugging purposes)
function logAllProductIdsInCart() {
    const cart = getCart(); // Retrieve the current cart items
    console.log("Logging current cart items:");

    cart.forEach(item => {
        console.log(`Product ID: ${item.id}, Quantity: ${item.amount}, Size: ${item.size}, Price: €${item.price}`);
    });
}

// Add event listener to the "Update Cart" button
const updateCartButton = document.querySelector('.flex-c-m.stext-101.cl2.size-119.bg8.bor13.hov-btn3.p-lr-15.trans-04.pointer.m-tb-10');

if (updateCartButton) {
    updateCartButton.addEventListener('click', () => {
        console.log("Update Cart button clicked");
        getUpdatedCartAmounts(); // Call the function to update the cart amounts
        updateSubtotal(); 
        generateCartList();
        updateCartNotification();


    });
} else {
    console.error("Update Cart button not found!");
}

// Dummy shipping costs based on country
const shippingRates = {
    "France": 5,
    "Luxembourg": 7,
    "Spain": 6,
    "Belgium": 8,
    "Portugal": 10,
    "Italy": 9,
  
};

// Function to calculate the total based on selected country
function updateTotals() {
    const countrySelect = document.getElementById('country-select');
    const selectedCountry = countrySelect.value;

    // Log the selected country
    console.log("Selected Country:", selectedCountry);

    // Set shipping cost to zero if no country is selected
    let shippingCost = 0; // Default shipping cost
    if (selectedCountry && selectedCountry !== "Select a country...") {
        shippingCost = shippingRates[selectedCountry] || shippingRates["Other"]; // Get shipping cost for the selected country
    }

    // Log the shipping cost
    console.log("Shipping Cost:", shippingCost);

    const subtotal = parseFloat(getTotalCartCost()) || 0;  // Ensure subtotal is treated as a number

    // Log the subtotal
    console.log("Subtotal:", subtotal.toFixed(2));

    const total = subtotal + shippingCost;  // Calculate total cost

    // Log the total
    console.log("Total Cost:", total.toFixed(2));
    console.log("fINISH");
    // Update the shipping and total amounts in the HTML
    document.getElementById('shipping-amount').textContent = `€${shippingCost.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `€${total.toFixed(2)}`;
}

document.getElementById('country-select').addEventListener('change', updateTotals);

// Add event listener for when the "Update Totals" button is clicked
document.getElementById('update-totals-btn').addEventListener('click', () => {
    console.log("Update Totals button clicked.");
    updateTotals(); // Call the function directly here
});



function calculateTotalWithShipping() {
    const countrySelect = document.getElementById('country-select');
    const selectedCountry = countrySelect.value;

    // Check if a valid country is selected
    if (!selectedCountry || selectedCountry === "Select a country...") {
        return "Shipping cost is not available.";
    }

    // Get shipping cost based on selected country, or default to "Other"
    const shippingCost = shippingRates[selectedCountry] || shippingRates["Other"];
    
    // Get subtotal (total cart cost) and make sure it's treated as a number
    const subtotal = parseFloat(getTotalCartCost()) || 0;  

    // Calculate total cost
    const total = subtotal + shippingCost;

    // Return the total as a formatted string
    return total.toFixed(2);
}





// Frontend JavaScript code
document.addEventListener('DOMContentLoaded', updateTotals);

// Replace with your actual publishable key
const stripePublicKey = 'pk_live_51Q4OeLJTZouawikopf9FHiiRcaDqmfuFdW2zNnlYfQuLVMX1wLzKwv2OxXWenyIYwpR3WuhWqEnF9XNpcoPHSvMo00D7HNU3sa';
const stripe = Stripe(stripePublicKey); // Initialize Stripe with the public key


const countryCodeMap = {
    'France': 'FR',
    'Luxembourg': 'LU',
    'Spain': 'ES',
    'Belgium': 'BE',
    'Portugal': 'PT',
    'Italy': 'IT'
};



document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-button');
    const countrySelect = document.getElementById('country-select');

    checkoutButton.addEventListener('click', async (event) => {
        event.preventDefault();

        let totalAmount = calculateTotalWithShipping(); // Calculate the total amount

        // Convert the total amount to the smallest currency unit (e.g., cents)
        totalAmount = Math.round(totalAmount * 100);

        // Get the selected country name
        const selectedCountryName = countrySelect.value;

        // Check if the country has a valid country code
        const selectedCountryCode = countryCodeMap[selectedCountryName];

        // Get the cart items
        const cart = getCart(); 

        if (!selectedCountryCode) {
            alert('Please select a valid shipping country.');
            return;
        }

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    amount: totalAmount, 
                    country: selectedCountryCode, // Pass the country code instead of name
                    cart: cart 
                }),
            });

            const session = await response.json();
            if (session.url) {
                window.location.href = session.url;
            } else {
                alert('Error occurred during checkout.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('An error occurred. Please try again.');
        }
    });
});

