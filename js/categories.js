const bookCategories = {
    fiction: {
        name: 'Fiction',
        books: [
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', stock: 5, shipped: 34, dateAdded: '2026-06-01', cover: '../images/gatsby.jpg' },
            { title: 'Pride and Prejudice', author: 'Jane Austen', stock: 8, shipped: 52, dateAdded: '2026-05-20',cover: '../images/pride.jpg' },
            { title: '1984', author: 'George Orwell', stock: 2, shipped: 45, dateAdded: '2026-05-15',cover: '../images/1984.jpg' },
            { title: 'To Kill a Mockingbird', author: 'Harper Lee', stock: 6, shipped: 61, dateAdded: '2026-04-30',cover: '../images/mockingbird.jpg' },
            { title: 'Invisible Cities', author: 'Italo Calvino', stock: 4, shipped: 28, dateAdded: '2026-05-28', cover: '../images/invisible.jpg' },
        ]
    },
    nonfiction: {
        name: 'Non-Fiction',
        books: [
            { title: 'A Brief History of Time', author: 'Stephen Hawking', stock: 3, shipped: 42, dateAdded: '2026-05-28', cover: '../images/abriefhistory.jpg' },
            { title: 'Sapiens', author: 'Yuval Noah Harari', stock: 7, shipped: 89, dateAdded: '2026-05-10', cover: '../images/sapiens.jpg' },
            { title: 'Atomic Habits', author: 'James Clear', stock: 4, shipped: 112, dateAdded: '2026-05-01', cover: '../images/atomichabits.jpg' },
            { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', stock: 5, shipped: 68, dateAdded: '2026-04-15', cover: '../images/thinking.jpg' },
            { title: 'The Selfish Gene', author: 'Richard Dawkins', stock: 3, shipped: 35, dateAdded: '2026-05-25', cover: '../images/selfishgene.jpg' },
        ]
    },
    children: {
        name: 'Children\'s Books',
        books: [
            { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', stock: 12, shipped: 156, dateAdded: '2026-05-22', cover: '../images/caterpillar.webp' },
            { title: 'Charlotte\'s Web', author: 'E.B. White', stock: 9, shipped: 94, dateAdded: '2026-05-18', cover: '../images/charlotte.jpg' },
            { title: 'Winnie-the-Pooh', author: 'A.A. Milne', stock: 10, shipped: 78, dateAdded: '2026-05-01', cover: '../images/winnie.jpg' },
            { title: 'The Tale of Peter Rabbit', author: 'Beatrix Potter', stock: 8, shipped: 67, dateAdded: '2026-04-20', cover: '../images/peter-rabbit-.jpg' },
            { title: 'Where the Wild Things Are', author: 'Maurice Sendak', stock: 11, shipped: 142, dateAdded: '2026-05-30', cover: '../images/wildthings.jpg' },
        ]
    },
    mystery: {
        name: 'Mystery & Thriller',
        books: [
            { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', stock: 6, shipped: 78, dateAdded: '2026-05-25', cover: '../images/dragontatto.jpg' },
            { title: 'The Da Vinci Code', author: 'Dan Brown', stock: 4, shipped: 95, dateAdded: '2026-05-10', cover: '../images/DaVinciCode.jpg' },
            { title: 'Sherlock Holmes: A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 5, shipped: 71, dateAdded: '2026-05-20', cover: '../images/AStudyInScarlet.jpg' },
            { title: 'The Maltese Falcon', author: 'Dashiell Hammett', stock: 3, shipped: 42, dateAdded: '2026-04-25', cover: '../images/The_Maltese_Falcon.jpg' },
            { title: 'Gone Girl', author: 'Gillian Flynn', stock: 7, shipped: 105, dateAdded: '2026-05-27', cover: '../images/gonegirl.jpg' },
        ]
    },
    science_fiction: {
        name: 'Science Fiction',
        books: [
            { title: 'Dune', author: 'Frank Herbert', stock: 6, shipped: 87, dateAdded: '2026-05-20', cover: '../images/dune.jpg' },
            { title: 'Foundation', author: 'Isaac Asimov', stock: 4, shipped: 65, dateAdded: '2026-05-15', cover: '../images/foundation.jpg' },
            { title: 'Neuromancer', author: 'William Gibson', stock: 3, shipped: 48, dateAdded: '2026-05-28', cover: '../images/Neuromancer.jpg' },
            { title: 'The Martian', author: 'Andy Weir', stock: 5, shipped: 102, dateAdded: '2026-05-05', cover: '../images/themartian.jpg' },
            { title: 'Snow Crash', author: 'Neal Stephenson', stock: 2, shipped: 38, dateAdded: '2026-04-18', cover: '../images/snowCrash.jpg' },
        ]
    }
};

let currentSort = 'latest';

function sortBooks(sortType, button) {
    currentSort = sortType;
    
    // Update active button styling
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('btn-gold');
        btn.classList.add('btn-secondary');
    });
    
    if (button) {
        button.classList.add('active');
        button.classList.remove('btn-secondary');
        button.classList.add('btn-gold');
    }
    
    renderCategories();
}

function sortBooksInCategory(books) {
    const sorted = [...books];
    
    if (currentSort === 'latest') {
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (currentSort === 'shipped') {
        sorted.sort((a, b) => b.shipped - a.shipped);
    } else if (currentSort === 'stock') {
        sorted.sort((a, b) => b.stock - a.stock);
    }
    
    return sorted;
}

function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    container.innerHTML = '';
    
    for (const [key, category] of Object.entries(bookCategories)) {
        const sortedBooks = sortBooksInCategory(category.books);
        
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        categorySection.innerHTML = `
            <div class="category-title">${category.name}</div>
            <div class="books-grid">
                ${sortedBooks.map(book => `
                    <div class="book-card">
                        <div class="book-cover${book.cover ? '' : ' no-cover'}">
                            <img src="${book.cover ?? ''}" alt="${book.title} cover" loading="lazy" onerror="this.style.display='none'">
                            <span class="cover-fallback">${book.title.charAt(0)}</span>
                        </div>
                        <div class="book-info">
                            <div class="book-title">${book.title}</div>
                            <div class="book-author">${book.author}</div>
                            <div class="book-meta">
                                <i class="fa-solid fa-box"></i> ${book.stock} | <i class="fa-solid fa-truck"></i> ${book.shipped}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categorySection);
    }
}

// Initial render
renderCategories();