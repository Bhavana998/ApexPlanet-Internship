/* Section Toggle Functionality */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetSection = link.getAttribute("data-section");

    sections.forEach((section) => section.classList.remove("active"));

    document.getElementById(targetSection).classList.add("active");
  });
});

/* Default Section */
document.getElementById("portfolio").classList.add("active");

/* Product Page Functionality */
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 1000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
},
  {
    id: 2,
    name: "Shirt",
    category: "clothing",
    price: 20,
    rating: 4.0,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Phone",
    category: "electronics",
    price: 500,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 4,
    name: "Jeans",
    category: "clothing",
    price: 40,
    rating: 4.2,
    img: "data:image/jpeg;base64,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",
  },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortCriteria = document.getElementById("sortCriteria");

function renderProducts(filteredProducts) {
  productGrid.innerHTML = "";
  filteredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productGrid.appendChild(div);
  });
}

function filterAndSortProducts() {
  const category = categoryFilter.value;
  const sort = sortCriteria.value;

  let filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  filteredProducts.sort((a, b) => (sort === "price" ? a.price - b.price : b.rating - a.rating));

  renderProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortCriteria.addEventListener("change", filterAndSortProducts);

renderProducts(products);
