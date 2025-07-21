'use strict';

const form = document.getElementById("createForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const description = form.description.value.trim();
    const price = parseFloat(form.price.value);

    if (!name || !description || isNaN(price) || price <= 0) {
        alert("Please fill all fields correctly.");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    let id = 1;
    if (products.length) {
        id = products.at(-1).id + 1;
    }

    const newProduct = { id, name, description, price };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));


    window.location.href = "list.html";
});
