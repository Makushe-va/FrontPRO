'use strict';

const tbody = document.getElementById("productTableBody");

function loadProducts() {
    tbody.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("products")) || [];

    [...products].reverse().forEach(product => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>
        <button class="btn btn-warning btn-sm me-1" onclick="editProduct(${product.id})">Редагувати</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Видалити</button>
      </td>
    `;
        tbody.appendChild(tr);
    });
}

function deleteProduct(id) {
    if (!confirm("Ви впевнені, що хочете видалити цей товар?")) return;

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

function editProduct(id) {
    localStorage.setItem("selectedProductID", id);
    window.location.href = "edit.html";
}
loadProducts();
