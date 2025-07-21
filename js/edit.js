'use strict';

const form = document.getElementById("editForm");
const id = parseInt(localStorage.getItem("selectedProductID"));

if (!id) {
    alert("Товар не вибрано!");
    window.location.href = "list.html";
}

const products = JSON.parse(localStorage.getItem("products")) || [];
const product = products.find(p => p.id === id);

if (!product) {
    alert("Товар не знайдено!");
    window.location.href = "list.html";
}

form.name.value = product.name;
form.description.value = product.description;
form.price.value = product.price;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const description = form.description.value.trim();
    const price = parseFloat(form.price.value);

    if (!name || !description || isNaN(price) || price <= 0) {
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    product.name = name;
    product.description = description;
    product.price = price;

    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "list.html";
});
