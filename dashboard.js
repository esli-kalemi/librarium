// dashboard.js

// Sidebar active link highlight
const sections = document.querySelectorAll('.section-block');
const navLinks = document.querySelectorAll('.sidebar-nav li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Sidebar smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Book form
document.getElementById("bookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const category = document.getElementById("bookCategory").value;
    const price = document.getElementById("bookPrice").value;
    const stock = document.getElementById("bookStock").value;

    if (!title || !author || !category || !price || !stock) {
        alert("All fields should be completed");
        return;
    }

    const tableBody = document.getElementById("bookTableBody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${category}</td>
        <td>${price}</td>
        <td>${stock}</td>
    `;

    tableBody.appendChild(row);

    this.reset();
});

// Authors/Categories/Clients/Orders actions
const authorsTableBody = document.getElementById("authorsTableBody");
const categoriesTableBody = document.getElementById("categoriesTableBody");
const clientsTableBody = document.getElementById("clientsTableBody");
const ordersTableBody = document.getElementById("ordersTableBody");

function searchTable(tableBody, query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!tableBody) return;

    Array.from(tableBody.rows).forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = normalizedQuery && !rowText.includes(normalizedQuery) ? 'none' : '';
    });
}

function addAuthor() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td contenteditable="true" placeholder="Author name"></td>
        <td contenteditable="true" placeholder="Biography"></td>
        <td contenteditable="true" placeholder="Number of titles"></td>
    `;
    if (authorsTableBody) authorsTableBody.insertBefore(row, authorsTableBody.firstChild);
}

function editCategory() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td contenteditable="true" placeholder="Category name"></td>
        <td contenteditable="true" placeholder="Quantity"></td>
    `;
    if (categoriesTableBody) categoriesTableBody.insertBefore(row, categoriesTableBody.firstChild);
}

function addClient() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td contenteditable="true" placeholder="Client name"></td>
        <td contenteditable="true" placeholder="Email"></td>
        <td contenteditable="true" placeholder="Total orders"></td>
    `;
    if (clientsTableBody) clientsTableBody.insertBefore(row, clientsTableBody.firstChild);
}

function editOrders() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td contenteditable="true" placeholder="Order ID"></td>
        <td contenteditable="true" placeholder="Client name"></td>
        <td contenteditable="true" placeholder="Date"></td>
        <td contenteditable="true" placeholder="Status"></td>
        <td contenteditable="true" placeholder="Total"></td>
    `;
    if (ordersTableBody) ordersTableBody.insertBefore(row, ordersTableBody.firstChild);
}

const addAuthorBtn = document.getElementById("addAuthorBtn");
const editCategoryBtn = document.getElementById("editCategoryBtn");
const addClientBtn = document.getElementById("addClientBtn");
const editOrdersBtn = document.getElementById("editOrdersBtn");
const bookSearch = document.getElementById("bookSearch");
const inventorySearch = document.getElementById("inventorySearch");
const inventoryTableBody = document.querySelector("#inventory table tbody");

if (addAuthorBtn) addAuthorBtn.addEventListener("click", addAuthor);
if (editCategoryBtn) editCategoryBtn.addEventListener("click", editCategory);
if (addClientBtn) addClientBtn.addEventListener("click", addClient);
if (editOrdersBtn) editOrdersBtn.addEventListener("click", editOrders);

if (bookSearch) {
    bookSearch.addEventListener("input", () => {
        const query = bookSearch.value;
        searchTable(document.getElementById("bookTableBody"), query);
    });
}

if (inventorySearch) {
    inventorySearch.addEventListener("input", () => {
        const query = inventorySearch.value;
        searchTable(inventoryTableBody, query);
    });
}
