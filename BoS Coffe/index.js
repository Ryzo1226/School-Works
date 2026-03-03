
let menuContainer = document.querySelector("#container");

let cart = [];

let cartItemCounts = {};

let drinks = [
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

let pastries = [
    {
        images: "https://www.boscoffee.com/cdn/shop/files/croissant.png?v=1687923000",
        name: "Butter Croissant",
        price: 85
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/blueberry-muffin.png?v=1687923001",
        name: "Blueberry Muffin",
        price: 95
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/chocolate-chip-cookie.png?v=1687923002",
        name: "Chocolate Chip Cookie",
        price: 75
    },
    {
        images: "https://www.boscoffee.com/cdn/shop/files/banana-bread.png?v=1687923003",
        name: "Banana Bread",
        price: 90
    }
];

let currentCategory = "drinks";

function renderMenu(itemsForCategory) {
    menuContainer.innerHTML = "";

    itemsForCategory.forEach(function (menuItem) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let image = document.createElement("img");
        image.setAttribute("class", "image");
        image.setAttribute("src", menuItem.images);

        let itemName = document.createElement("h4");
        itemName.setAttribute("class", "item");
        itemName.innerText = menuItem.name;

        let price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerText = "₱" + menuItem.price;

        let addToCartBtn = document.createElement("button");
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.onclick = function () {
            addFoodToCart(menuItem);
        };

        let removeFromCartBtn = document.createElement("button");
        removeFromCartBtn.innerText = "Remove";
        removeFromCartBtn.onclick = function () {
            removeOneFromMenu(menuItem);
        };

        let buttonRow = document.createElement("div");
        buttonRow.setAttribute("class", "button-row");
        buttonRow.append(addToCartBtn, removeFromCartBtn);

        let countText = document.createElement("p");
        countText.setAttribute("class", "item-count");
        countText.innerText = "Added: 0";

        card.append(image, itemName, price, buttonRow, countText);
        menuContainer.append(card);
    });
}

let modal = document.getElementById("myModal");
let viewCartButton = document.querySelector("#order-btn");
let tabButtons = document.querySelectorAll(".menu-tab");
let placeOrderButton = document.getElementById("placeOrderBtn");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tabButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        this.classList.add("active");

        let category = this.getAttribute("data-category");
        currentCategory = category;

        if (category === "drinks") {
            renderMenu(drinks);
        } else if (category === "pastries") {
            renderMenu(pastries);
        }

        updateCardCounts();
    });
});

renderMenu(drinks);

if (placeOrderButton) {
    placeOrderButton.addEventListener("click", placeOrderHandler);
}

function renderCartModal() {
    let modalBody = document.getElementById('cart-body');
    modalBody.innerHTML = "";

    let foodList = document.createElement('div');
    foodList.id = 'food-list';

    let total = 0;

    if (cart.length === 0 || Object.keys(cartItemCounts).length === 0) {
        foodList.innerHTML = "<p style='color:#d00'>No items in cart.</p>";
    } else {
        let list = document.createElement('ul');
        list.style.listStyle = 'none';
        list.style.paddingLeft = '0';

        Object.keys(cartItemCounts).forEach(function (name) {
            let count = cartItemCounts[name];
            if (!count) {
                return;
            }

            let item = cart.find(function (cartItem) {
                return cartItem.name === name;
            });
            if (!item) {
                return;
            }

            let li = document.createElement('li');
            li.style.marginBottom = '8px';
            li.innerHTML = `<img src="${item.images}" style="width:30px;vertical-align:middle;margin-right:5px;"> <span style="font-weight:bold;">${item.name}</span> - <span>₱${item.price} x ${count}</span> <button style="margin-left:8px;padding:2px 10px;" data-name="${item.name}">Remove</button>`;
            list.appendChild(li);
            total += item.price * count;
        });
        foodList.appendChild(list);

        foodList.querySelectorAll('button[data-name]').forEach(function (buttonElement) {
            buttonElement.onclick = function () {
                let itemName = this.getAttribute('data-name');
                removeOneFromCartByName(itemName);
                renderCartModal();
            };
        });
    }

    modalBody.appendChild(foodList);

    let title = document.querySelector('.modal-title');
    if (title) {
        title.textContent = "Order";
    }

    let totalElement = document.getElementById("cartTotal");
    if (totalElement) {
        totalElement.textContent = "Total: ₱" + total;
    }

    document.getElementById("orderNo").style.display = "none";
}

function addFoodToCart(element) {
    cart.push(element);
    cartItemCounts[element.name] = (cartItemCounts[element.name] || 0) + 1;
    updateCardCounts();
    if (modal.style.display === "block") {
        renderCartModal();
    }
}

function removeFromCart(idx) {
    let removed = cart[idx];
    if (removed) {
        cartItemCounts[removed.name] = Math.max((cartItemCounts[removed.name] || 1) - 1, 0);
    }
    cart.splice(idx, 1);
    updateCardCounts();
}

function removeOneFromCartByName(name) {
    if (!cartItemCounts[name]) {
        return;
    }

    let indexInCart = cart.findIndex(function (item) {
        return item.name === name;
    });

    if (indexInCart !== -1) {
        cart.splice(indexInCart, 1);
        cartItemCounts[name] = Math.max((cartItemCounts[name] || 1) - 1, 0);
        if (cartItemCounts[name] === 0) {
            delete cartItemCounts[name];
        }
        updateCardCounts();
    }
}

function removeOneFromMenu(element) {
    if (!cartItemCounts[element.name]) {
        return;
    }

    let indexInCart = cart.findIndex(function (item) {
        return item.name === element.name;
    });

    if (indexInCart !== -1) {
        cart.splice(indexInCart, 1);
        cartItemCounts[element.name] = Math.max((cartItemCounts[element.name] || 1) - 1, 0);
        if (cartItemCounts[element.name] === 0) {
            delete cartItemCounts[element.name];
        }
        updateCardCounts();
        if (modal.style.display === "block") {
            renderCartModal();
        }
    }
}

function placeOrderHandler() {
    let modalBody = document.getElementById('cart-body');
    modalBody.innerHTML = "";

    let title = document.querySelector('.modal-title');
    if (title) {
        title.textContent = "Thank you!";
    }
    let orderMsg = document.getElementById("orderNo");
    orderMsg.textContent = "Please wait for your order.";
    orderMsg.style.display = "block";

    cart = [];
    cartItemCounts = {};
    updateCardCounts();
}

function updateCardCounts() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        let nameElement = card.querySelector('.item');
        if (!nameElement) {
            return;
        }
        let name = nameElement.innerText;
        let count = cartItemCounts[name] || 0;
        let countEl = card.querySelector('.item-count');
        if (countEl) {
            countEl.textContent = "Added: " + count;
        }
    });
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

viewCartButton.addEventListener("click", function () {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        renderCartModal();
        modal.style.display = "block";
    }
});