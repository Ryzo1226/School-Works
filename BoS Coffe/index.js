
let container = document.querySelector("#container");

// Cart to store selected food items
let cart = [];
// Track how many times each item is added
let cartCounts = {};

// Food menu items array
// Friendly and readable menu items array for a Grade 11 project
let items = [
    {
        images: "https://www.boscoffee.com/cdn/shop/files/DripBrew_Large.png?v=1687911611",
        name: "Brewed Coffee",
        price: 120
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/Americano_Large.png?v=1687911743",
        name: "Caffe Americano",
        price: 135
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/Latte_Large.png?v=1687911759",
        name: "Caffe Latte",
        price: 145
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/Mocha_Large.png?v=1687911791",
        name: "Caffe Mocha",
        price: 160
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/CaramelLatte_Large.png?v=1687911838",
        name: "Caramel Latte",
        price: 170
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/FroccinoCaramelo_Large.png?v=1687921161",
        name: "Froccino Caramelo",
        price: 165
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/FroccinoMocha_Large.png?v=1687921232",
        name: "Froccino Mocha",
        price: 165
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/FroccinoCoffeeJelly_Large.png?v=1687921391",
        name: "Froccino Coffee Jelly",
        price: 180
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/IcedBrewMocha_Large.png?v=1687922056",
        name: "Iced Brew Mocha",
        price: 105
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/SignatureChocolate_Large.png?v=1687922089",
        name: "Signature Chocolate",
        price: 150
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/IcedTea_Large.png?v=1687922179",
        name: "House Blend Iced Tea",
        price: 130
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/VanillaFrappe_Large.png?v=1687922221",
        name: "Non-Dairy Vanilla Frappe",
        price: 175
    }
];

// Render menu items with Add to Cart button for each
items.forEach(function (element, index) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", element.images);

    let item = document.createElement("h4");
    item.setAttribute("class", "item");
    item.innerText = element.name;

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerText = "₱" + element.price;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.onclick = function () {
        addFoodToCart(element);
    };

    let removeFromCartBtn = document.createElement("button");
    removeFromCartBtn.innerText = "Remove";
    removeFromCartBtn.onclick = function () {
        removeOneFromMenu(element);
    };

    let buttonRow = document.createElement("div");
    buttonRow.setAttribute("class", "button-row");
    buttonRow.append(addToCartBtn, removeFromCartBtn);

    let countText = document.createElement("p");
    countText.setAttribute("class", "item-count");
    countText.innerText = "Added: 0";

    card.append(image, item, price, buttonRow, countText);
    container.append(card);
});

// Cart Modal Elements
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btn = document.querySelector("#order-btn");

// For showing cart items in the modal
function renderCartModal() {
    // Remove any previously appended food-list in modal-content
    let modalContent = modal.querySelector('.modal-content');
    let existingList = document.getElementById('food-list');
    if(existingList) modalContent.removeChild(existingList);

    let foodList = document.createElement('div');
    foodList.id = 'food-list';

    if (cart.length === 0) {
        foodList.innerHTML = "<p style='color:#d00'>No items in cart.</p>";
    } else {
        let list = document.createElement('ul');
        list.style.listStyle = 'none';
        list.style.paddingLeft = '0';
        let total = 0;
        cart.forEach((itm, idx) => {
            let li = document.createElement('li');
            li.style.marginBottom = '8px';
            li.innerHTML = `<img src="${itm.images}" style="width:30px;vertical-align:middle;margin-right:5px;"> <span style="font-weight:bold;">${itm.name}</span> - <span>₱${itm.price}</span> <button style="margin-left:8px;padding:2px 10px;" data-idx="${idx}">Remove</button>`;
            list.appendChild(li);
            total += itm.price;
        });
        foodList.appendChild(list);

        // Remove item event
        foodList.querySelectorAll('button[data-idx]').forEach(btnEl => {
            btnEl.onclick = function(e) {
                let idx = Number(this.getAttribute('data-idx'));
                removeFromCart(idx);
                renderCartModal();
            }
        });

        let totalDiv = document.createElement('div');
        totalDiv.style.fontWeight = "bold";
        totalDiv.style.marginTop = "8px";
        totalDiv.textContent = "Total: ₱" + total;
        foodList.appendChild(totalDiv);

        // Place Order button
        let placeOrderBtn = document.createElement('button');
        placeOrderBtn.innerText = "Place Order";
        placeOrderBtn.style.marginTop = "18px";
        placeOrderBtn.onclick = placeOrderHandler;
        foodList.appendChild(placeOrderBtn);
    }
    // Insert above title in modal
    modalContent.insertBefore(foodList, modalContent.querySelector('h4'));
    modalContent.querySelector('h4').textContent = "Cart";
    document.getElementById("orderNo").style.display = "none";
}

function addFoodToCart(element) {
    cart.push(element);
    cartCounts[element.name] = (cartCounts[element.name] || 0) + 1;
    updateCardCounts();
    if (modal.style.display === "block") {
        renderCartModal();
    }
}

function removeFromCart(idx) {
    let removed = cart[idx];
    if (removed) {
        cartCounts[removed.name] = Math.max((cartCounts[removed.name] || 1) - 1, 0);
    }
    cart.splice(idx, 1);
    updateCardCounts();
}

// Remove one instance of an item from the cart via the menu card
function removeOneFromMenu(element) {
    if (!cartCounts[element.name]) {
        return;
    }

    let indexInCart = cart.findIndex(function(itm) {
        return itm.name === element.name;
    });

    if (indexInCart !== -1) {
        cart.splice(indexInCart, 1);
        cartCounts[element.name] = Math.max((cartCounts[element.name] || 1) - 1, 0);
        if (cartCounts[element.name] === 0) {
            delete cartCounts[element.name];
        }
        updateCardCounts();
        if (modal.style.display === "block") {
            renderCartModal();
        }
    }
}

// Place Order Handler
function placeOrderHandler() {
    // Hide cart list and show a simple thank-you message
    let modalContent = modal.querySelector('.modal-content');
    let foodList = document.getElementById('food-list');
    if (foodList) foodList.style.display = "none";

    modalContent.querySelector('h4').textContent = "Thank you!";
    let orderMsg = document.getElementById("orderNo");
    orderMsg.textContent = "Please wait for your order.";
    orderMsg.style.display = "block";

    // Clear cart and counts immediately after placing the order
    cart = [];
    cartCounts = {};
    updateCardCounts();
}

// Update the "Added: X" text under each menu item
function updateCardCounts() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
        let name = items[index].name;
        let count = cartCounts[name] || 0;
        let countEl = card.querySelector('.item-count');
        if (countEl) {
            countEl.textContent = "Added: " + count;
        }
    });
}

// Modal close
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Show cart in modal on clicking "View Cart / Order"
btn.addEventListener("click", function(){
    renderCartModal();
    modal.style.display = "block";
});


