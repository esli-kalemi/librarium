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
        console.log("Some fields are empty!");
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