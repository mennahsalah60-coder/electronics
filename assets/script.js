const products = [
    {
        id: 1,
        h2: "Samsung Galaxy",
        h3: "6.8-inch AMOLED display, Snapdragon 8 Gen 3, 200MP camera.",
        more: "Read More",
        image: "./assets/images/one.webp",
        old_price: "1499$",
        price_after_sale: "1299$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 2,
        h2: "Apple iPhone15 Pro",
        h3: "A17 Pro chip, titanium design, 48MP camera, long battery life.",
        more: "Read More",
        image: "./assets/images/iphone_14-pro-max_low.webp",
        old_price: "1599$",
        price_after_sale: "1499$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 3,
        h2: "MacBook Air M3",
        h3: "13-inch Retina display lorem, M3 chip, 8GB RAM, 256GB  SSD.",
        more: "Read More",
        image: "./assets/images/mac2-min.jpg",
        old_price: "1000$",
        price_after_sale: "900$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 4,
        h2: "Lenovo Legion 7",
        h3: "AMD Ryzen 9, RTX 4070, 16GB RAM, 1TB SSD, 16-inch QHD display.",
        more: "Read More",
        image: "./assets/images/four.webp",
        old_price: "2000$",
        price_after_sale: "1500$",
        cart: "./assets/images/cart.png",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 5,
        h2: "Anker 20000mAh Power Bank",
        h3: "High-capacity lorem portable charger with fast charging.",
        more: "Read More",
        image: "./assets/images/five.webp",
        old_price: "300$",
        price_after_sale: "250$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 6,
        h2: "Sony WH-1000XM5 Headphones",
        h3: "Industry-leading noise-canceling wireless headphones.",
        more: "Read More",
        image: "./assets/images/six.webp",
        old_price: "3000$",
        price_after_sale: "2000$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 7,
        h2: "Logitech MX Master 3S Mouse",
        h3: "Ergonomic wireless mouse with fast scrolling.",
        more: "Read More",
        image: "./assets/images/seven.webp",
        old_price: "1500$",
        price_after_sale: "1000$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },

    {
        id: 8,
        h2: "Apple AirPods Pro (2nd Gen)",
        h3: "Active noise cancellation, personalized spatial audio",
        more: "Read More",
        image: "./assets/images/eight.webp",
        old_price: "5000$",
        price_after_sale: "2500$",
        cart: "./assets/images/Group 1.svg",
        fav: "./assets/images/Favorite (1).svg"
    },
]

const ProductsContainer = document.querySelector(".products-container")
function displayProducts(allDisplay) {
    ProductsContainer.innerHTML = " ";

    allDisplay.forEach(product => {
        if (products.length === 0) {
        }
        ProductsContainer.innerHTML +=
            `<div class="card">
            <img class="card-img-top p-2 rounded-4 h-75" src="${product.image}">
            <div class="card-body">
                <h2 class= "card-title">${product.h2}</h2>
                <h3 class="card-text text-light-emphasis fs-5">${product.h3}</h3>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-5">${product.more}</a>
                <p class="card-text fs-2 text-success">${product.price_after_sale}
                    <span  class="fs-4 text-decoration-line-through text-danger">${product.old_price}</span>
                </p>
                <div class="button">
                    <a class="btn btn-primary pt-3">
                    <img src="${product.cart}" alt="Cart Icon" class="">
                    </a>
                    <p><img class="heart" src="${product.fav}" alt="Cart Icon" class=""></p>
                </div>
            </div>
        </div>`
    });
}
displayProducts(products);

const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-input")

searchBtn.addEventListener("click", function () {
    // preventDefault() --> form ?
    // event.preventDefault()
    ProductsContainer.innerHTML = "";

    const input = searchInput.value.toLowerCase().trim();

    const filteredNamePtoducts = products.filter((product) => {
        return product.h2.toLowerCase().includes(input);
    });

    if (filteredNamePtoducts.length === 0) {
        ProductsContainer.innerHTML =
            `<p class="text-center fs-2 text-secondary">No Data Found</p>`;
        return;
    }

    displayProducts(filteredNamePtoducts);
});


const priceBtn = document.querySelector(".price-btn")
const maxPrice = document.querySelector(".max-price")
const minPrice = document.querySelector(".min-price")

priceBtn.addEventListener("click", function () {
    ProductsContainer.innerHTML = "";
    const max = Number(maxPrice.value)
    const min = Number(minPrice.value)
    const filteredPrice = products.filter((product) => {
        // replace ?
        const price = Number(product.price_after_sale.replace("$", ""))
        return price >= min && price <= max
    })
    if (filteredPrice.length === 0) {
        ProductsContainer.innerHTML =
            `<p class="text-center fs-2 text-secondary">No Data Found</p>`;
        return;
    }
    displayProducts(filteredPrice)
})





