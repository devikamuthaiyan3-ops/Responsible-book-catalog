/**
 * ==============================================================================
 * BookVerse - Responsive Online Book Catalog
 * College MWP Mini Project
 * Technologies: Pure JavaScript (ES6+), DOM Manipulation, Event Handling
 * ==============================================================================
 */

// Run when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the entire application
    initCatalogApp();
});

/**
 * Main application initializer function
 */
function initCatalogApp() {
    // --------------------------------------------------------------------------
    // 1. DATA SOURCE: Sample Books Collection (At least 12 books - 16 curated)
    // --------------------------------------------------------------------------
    const sampleBooks = [
        // --- Programming Category ---
        {
            id: 1,
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            author: "Robert C. Martin",
            category: "Programming",
            price: 34.99,
            rating: 4.8,
            reviews: 3840,
            pages: 464,
            year: 2008,
            isbn: "978-0132350884",
            publisher: "Prentice Hall",
            description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This landmark book presents best practices of cleaning code 'on the fly' and creating robust, testable software architectures.",
            coverImage: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "JavaScript: The Definitive Guide (7th Edition)",
            author: "David Flanagan",
            category: "Programming",
            price: 39.99,
            rating: 4.7,
            reviews: 2150,
            pages: 704,
            year: 2020,
            isbn: "978-1491952023",
            publisher: "O'Reilly Media",
            description: "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to client-side APIs defined by web browsers.",
            coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "The Pragmatic Programmer: Your Journey To Mastery",
            author: "Andrew Hunt & David Thomas",
            category: "Programming",
            price: 42.50,
            rating: 4.9,
            reviews: 4920,
            pages: 352,
            year: 2019,
            isbn: "978-0135957059",
            publisher: "Addison-Wesley",
            description: "Illustrates the best approaches and major pitfalls of modern software development. It examines topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible.",
            coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "Python Crash Course: A Hands-On Guide",
            author: "Eric Matthes",
            category: "Programming",
            price: 28.00,
            rating: 4.8,
            reviews: 5610,
            pages: 544,
            year: 2019,
            isbn: "978-1593279288",
            publisher: "No Starch Press",
            description: "A fast-paced, thorough introduction to Python that will have you writing programs, solving problems, and making things that work in no time. Ideal for ambitious beginners and aspiring engineers.",
            coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
        },

        // --- Fiction Category ---
        {
            id: 5,
            title: "The Midnight Library",
            author: "Matt Haig",
            category: "Fiction",
            price: 16.99,
            rating: 4.6,
            reviews: 12430,
            pages: 304,
            year: 2020,
            isbn: "978-0525559474",
            publisher: "Viking",
            description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. A dazzling novel about choices, regret, and finding true meaning.",
            coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            title: "The Alchemist",
            author: "Paulo Coelho",
            category: "Fiction",
            price: 14.50,
            rating: 4.7,
            reviews: 18200,
            pages: 208,
            year: 1988,
            isbn: "978-0062315007",
            publisher: "HarperOne",
            description: "A magical story about following your dreams. Santiago, an Andalusian shepherd boy, embarks on a journey to Egypt in search of worldly treasure, finding spiritual enlightenment and personal destiny along the way.",
            coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Fiction",
            price: 15.20,
            rating: 4.9,
            reviews: 24500,
            pages: 336,
            year: 1960,
            isbn: "978-0061120084",
            publisher: "J. B. Lippincott & Co.",
            description: "An indelible classic of modern American literature exploring moral courage, racial injustice, childhood innocence, and empathy through the eyes of young Scout Finch and her lawyer father Atticus Finch.",
            coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            title: "1984: A Novel",
            author: "George Orwell",
            category: "Fiction",
            price: 13.99,
            rating: 4.8,
            reviews: 21900,
            pages: 328,
            year: 1949,
            isbn: "978-0451524935",
            publisher: "Secker & Warburg",
            description: "The chilling prophetic dystopian masterpiece illustrating totalitarian control, surveillance by 'Big Brother', doublethink, and the battle of Winston Smith to retain his individuality and humanity.",
            coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80"
        },

        // --- Science Category ---
        {
            id: 9,
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            category: "Science",
            price: 19.99,
            rating: 4.8,
            reviews: 9780,
            pages: 256,
            year: 1988,
            isbn: "978-0553380163",
            publisher: "Bantam Books",
            description: "A landmark volume in science writing by one of the greatest minds of our era. Hawking addresses fundamental questions about the birth and death of the universe, black holes, time travel, and cosmology.",
            coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10,
            title: "Cosmos",
            author: "Carl Sagan",
            category: "Science",
            price: 21.50,
            rating: 4.9,
            reviews: 8320,
            pages: 384,
            year: 1980,
            isbn: "978-0345539434",
            publisher: "Random House",
            description: "Carl Sagan's classic book is a breathtaking journey through fifteen billion years of cosmic evolution, tracing how science and civilization grew together and awakening our awe for the universe we inhabit.",
            coverImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11,
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            category: "Science",
            price: 24.99,
            rating: 4.8,
            reviews: 17600,
            pages: 464,
            year: 2014,
            isbn: "978-0062316097",
            publisher: "Harper",
            description: "Harari surveys the entire span of human history, from the emergence of Homo sapiens in the Stone Age up to the political and technological revolutions of the 21st century.",
            coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12,
            title: "The Gene: An Intimate History",
            author: "Siddhartha Mukherjee",
            category: "Science",
            price: 22.00,
            rating: 4.7,
            reviews: 5410,
            pages: 608,
            year: 2016,
            isbn: "978-1476733524",
            publisher: "Scribner",
            description: "The Pulitzer Prize–winning author of The Emperor of All Maladies weaves science, social history, and personal narrative into a magnificent story of the basic unit of heredity and the future of genetic engineering.",
            coverImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
        },

        // --- Technology Category ---
        {
            id: 13,
            title: "The Innovators: How a Group of Hackers, Geniuses Created the Digital Revolution",
            author: "Walter Isaacson",
            category: "Technology",
            price: 26.50,
            rating: 4.6,
            reviews: 4180,
            pages: 560,
            year: 2014,
            isbn: "978-1476708690",
            publisher: "Simon & Schuster",
            description: "The story of the people who created the computer and the Internet, beginning with Ada Lovelace and continuing through Alan Turing, John von Neumann, Steve Jobs, Bill Gates, and Larry Page.",
            coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 14,
            title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
            author: "Max Tegmark",
            category: "Technology",
            price: 23.99,
            rating: 4.7,
            reviews: 3670,
            pages: 384,
            year: 2017,
            isbn: "978-1101946596",
            publisher: "Knopf",
            description: "MIT professor Max Tegmark explores how artificial intelligence will affect crime, war, justice, jobs, society, and our very sense of being human, outlining paths toward creating superintelligence responsibly.",
            coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 15,
            title: "The Design of Everyday Things",
            author: "Don Norman",
            category: "Technology",
            price: 18.99,
            rating: 4.8,
            reviews: 7920,
            pages: 368,
            year: 2013,
            isbn: "978-0465050659",
            publisher: "Basic Books",
            description: "The ultimate guide to human-centered design. Even the smartest among us can feel inept trying to open a door or figure out a stove knob. Norman explains cognitive principles that make products intuitive and delight users.",
            coverImage: "https://images.unsplash.com/photo-1507842229451-7f01be8610ce?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 16,
            title: "Chip War: The Fight for the World's Most Critical Technology",
            author: "Chris Miller",
            category: "Technology",
            price: 27.50,
            rating: 4.9,
            reviews: 6240,
            pages: 464,
            year: 2022,
            isbn: "978-1982172008",
            publisher: "Scribner",
            description: "Financial Times Best Business Book of the Year. An epic account of how microchips became the new oil—the scarce resource modern civilization depends on—and the high-stakes geopolitical battle to control them.",
            coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
        }
    ];

    // --------------------------------------------------------------------------
    // 2. STATE MANAGEMENT
    // --------------------------------------------------------------------------
    let currentFilter = "All";
    let searchQuery = "";
    let currentSort = "featured";
    let wishlist = loadWishlistFromStorage(); // Array of book IDs

    // --------------------------------------------------------------------------
    // 3. DOM ELEMENT REFERENCES
    // --------------------------------------------------------------------------
    const booksGrid = document.getElementById("books-grid");
    const noBooksState = document.getElementById("no-books-state");
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const sortSelect = document.getElementById("sort-select");
    const showingCountEl = document.getElementById("showing-count");
    const totalCountEl = document.getElementById("total-count");
    const totalBooksCountHero = document.getElementById("total-books-count");
    const resetFiltersBtn = document.getElementById("reset-filters-btn");

    // Modal elements
    const bookModal = document.getElementById("book-modal");
    const modalBody = document.getElementById("modal-body");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    // Navigation elements
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const header = document.getElementById("header");
    const wishlistBtn = document.getElementById("wishlist-btn");
    const wishlistBadge = document.getElementById("wishlist-badge");
    const currentYearEl = document.getElementById("current-year");

    // Set dynamic copyright year and initial counters
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (totalBooksCountHero) totalBooksCountHero.textContent = `${sampleBooks.length}+`;
    updateWishlistBadge();

    // --------------------------------------------------------------------------
    // 4. CORE RENDERING ENGINE
    // --------------------------------------------------------------------------

    /**
     * Filters, sorts, and renders book cards to the DOM
     */
    function renderCatalog() {
        // Step 1: Filter by category and search keyword
        let filtered = sampleBooks.filter(book => {
            // Category condition
            const matchesCategory = (currentFilter === "All") || (book.category === currentFilter);

            // Search condition (matches title OR author)
            const query = searchQuery.trim().toLowerCase();
            const matchesSearch = query === "" || 
                book.title.toLowerCase().includes(query) || 
                book.author.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });

        // Step 2: Sort the filtered books
        filtered = sortBooks(filtered, currentSort);

        // Step 3: Update counts
        showingCountEl.textContent = filtered.length;
        totalCountEl.textContent = sampleBooks.length;

        // Step 4: Display empty state or render cards
        if (filtered.length === 0) {
            booksGrid.innerHTML = "";
            noBooksState.style.display = "block";
        } else {
            noBooksState.style.display = "none";
            booksGrid.innerHTML = filtered.map(book => createBookCardHTML(book)).join("");

            // Attach event listeners to newly created card elements
            attachCardEventListeners();
        }
    }

    /**
     * Generates HTML markup for a single book card
     * @param {Object} book - The book data object
     * @returns {string} - HTML string
     */
    function createBookCardHTML(book) {
        const isFav = wishlist.includes(book.id);
        const categoryClass = `badge-${book.category.toLowerCase()}`;
        const starMarkup = generateStarRatingMarkup(book.rating);

        return `
            <article class="book-card" data-id="${book.id}">
                <div class="book-cover-wrap">
                    <span class="badge-category ${categoryClass}">${book.category}</span>
                    <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                            data-book-id="${book.id}" 
                            title="${isFav ? 'Remove from favorites' : 'Add to favorites'}" 
                            aria-label="Toggle favorite for ${book.title}">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <img 
                        src="${book.coverImage}" 
                        alt="Cover of ${escapeHtml(book.title)}" 
                        class="book-cover-img" 
                        loading="lazy" 
                        onerror="this.onerror=null; this.src='${generateFallbackCoverSVG(book)}';"
                    />
                </div>
                
                <div class="book-details">
                    <h3 class="book-title" title="${escapeHtml(book.title)}">${escapeHtml(book.title)}</h3>
                    <p class="book-author">
                        <i class="fa-solid fa-user-pen"></i> By ${escapeHtml(book.author)}
                    </p>
                    
                    <div class="book-rating">
                        <span class="stars">${starMarkup}</span>
                        <span class="rating-value">${book.rating.toFixed(1)}</span>
                        <span class="rating-reviews">(${book.reviews.toLocaleString()})</span>
                    </div>

                    <div class="book-card-footer">
                        <div class="book-price-wrap">
                            <span class="price-label">Price</span>
                            <span class="book-price">$${book.price.toFixed(2)}</span>
                        </div>
                        <button class="btn-view-details" data-book-id="${book.id}">
                            <i class="fa-solid fa-eye"></i> View Details
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * Generates star icons HTML based on rating (out of 5)
     */
    function generateStarRatingMarkup(rating) {
        let starsHTML = "";
        const fullStars = Math.floor(rating);
        const hasHalfStar = (rating - fullStars) >= 0.4;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }
        return starsHTML;
    }

    /**
     * Returns an SVG Data URI as a fallback image if external image fails
     */
    function generateFallbackCoverSVG(book) {
        const bgColors = {
            "Programming": "%231b4332",
            "Fiction": "%2378350f",
            "Science": "%230c4a6e",
            "Technology": "%233b0764"
        };
        const bg = bgColors[book.category] || "%231b4332";
        const shortTitle = encodeURIComponent(book.title.slice(0, 32) + (book.title.length > 32 ? "..." : ""));
        const category = encodeURIComponent(book.category);

        return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420"><rect width="300" height="420" fill="${bg}"/><rect x="15" y="15" width="270" height="390" fill="none" stroke="%23ffffff" stroke-width="2" stroke-opacity="0.3"/><text x="150" y="160" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23ffffff" text-anchor="middle">${shortTitle}</text><text x="150" y="210" font-family="sans-serif" font-size="14" fill="%23a7f3d0" text-anchor="middle">[${category}]</text><text x="150" y="260" font-family="sans-serif" font-size="13" fill="%23ffffff" opacity="0.8" text-anchor="middle">BookVerse Edition</text></svg>`;
    }

    /**
     * Sorts book array based on selected sort option
     */
    function sortBooks(books, sortMethod) {
        const cloned = [...books];
        switch (sortMethod) {
            case "price-low":
                return cloned.sort((a, b) => a.price - b.price);
            case "price-high":
                return cloned.sort((a, b) => b.price - a.price);
            case "rating-high":
                return cloned.sort((a, b) => b.rating - a.rating);
            case "title-az":
                return cloned.sort((a, b) => a.title.localeCompare(b.title));
            case "title-za":
                return cloned.sort((a, b) => b.title.localeCompare(a.title));
            case "featured":
            default:
                return cloned.sort((a, b) => a.id - b.id);
        }
    }

    // --------------------------------------------------------------------------
    // 5. EVENT HANDLERS & LISTENERS
    // --------------------------------------------------------------------------

    /**
     * Attaches interactive events to cards (View Details and Favorite toggle)
     */
    function attachCardEventListeners() {
        // "View Details" buttons
        document.querySelectorAll(".btn-view-details").forEach(button => {
            button.addEventListener("click", () => {
                const bookId = parseInt(button.dataset.bookId, 10);
                openBookModal(bookId);
            });
        });

        // Wishlist / Favorite toggle buttons
        document.querySelectorAll(".card-fav-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const bookId = parseInt(btn.dataset.bookId, 10);
                toggleFavorite(bookId);
            });
        });
    }

    /**
     * Search Input Event
     */
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim().length > 0) {
            clearSearchBtn.classList.add("visible");
        } else {
            clearSearchBtn.classList.remove("visible");
        }
        renderCatalog();
    });

    /**
     * Clear Search Button
     */
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.remove("visible");
        searchInput.focus();
        renderCatalog();
    });

    /**
     * Category Filter Buttons
     */
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });
            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            // Update current filter & re-render
            currentFilter = button.dataset.filter;
            renderCatalog();
        });
    });

    /**
     * Sort Dropdown Event
     */
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderCatalog();
    });

    /**
     * Reset Filters Button (Inside empty state)
     */
    resetFiltersBtn.addEventListener("click", () => {
        resetAllCatalogFilters();
    });

    /**
     * Featured Categories Cards Click (in the Hero/Categories section)
     */
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const selectedCat = card.dataset.category;
            setCategoryFilter(selectedCat);

            // Smooth scroll down to the catalog section
            document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
        });
    });

    /**
     * Footer Category Links Click
     */
    document.querySelectorAll(".footer-filter-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedCat = link.dataset.category;
            setCategoryFilter(selectedCat);
            document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
        });
    });

    /**
     * Helper to set active category filter programmatically
     */
    function setCategoryFilter(categoryName) {
        currentFilter = categoryName;
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === categoryName) {
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            }
        });
        renderCatalog();
    }

    /**
     * Resets search query, category filter, and sort options
     */
    function resetAllCatalogFilters() {
        currentFilter = "All";
        searchQuery = "";
        currentSort = "featured";
        searchInput.value = "";
        clearSearchBtn.classList.remove("visible");
        sortSelect.value = "featured";

        filterButtons.forEach(btn => {
            if (btn.dataset.filter === "All") {
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            }
        });

        renderCatalog();
        showToast("Filters reset successfully!", "info");
    }

    // --------------------------------------------------------------------------
    // 6. VIEW DETAILS MODAL POPUP SYSTEM
    // --------------------------------------------------------------------------

    /**
     * Opens modal dialog populated with details of the book
     */
    function openBookModal(bookId) {
        const book = sampleBooks.find(b => b.id === bookId);
        if (!book) return;

        const isFav = wishlist.includes(book.id);
        const starMarkup = generateStarRatingMarkup(book.rating);
        const categoryClass = `badge-${book.category.toLowerCase()}`;

        modalBody.innerHTML = `
            <div class="modal-detail-grid">
                <div class="modal-cover-wrapper">
                    <img 
                        src="${book.coverImage}" 
                        alt="${escapeHtml(book.title)}" 
                        class="modal-cover-img"
                        onerror="this.onerror=null; this.src='${generateFallbackCoverSVG(book)}';"
                    />
                </div>

                <div class="modal-content-info">
                    <span class="modal-category-badge ${categoryClass}">${book.category}</span>
                    <h2 class="modal-title" id="modal-book-title">${escapeHtml(book.title)}</h2>
                    <p class="modal-author"><i class="fa-solid fa-user-pen"></i> Written by <strong>${escapeHtml(book.author)}</strong></p>

                    <div class="modal-rating-row">
                        <span class="stars">${starMarkup}</span>
                        <span class="modal-rating-score">${book.rating.toFixed(1)} / 5.0</span>
                        <span class="rating-reviews">(${book.reviews.toLocaleString()} reader reviews)</span>
                    </div>

                    <div class="modal-price-tag">$${book.price.toFixed(2)}</div>

                    <h4 class="modal-synopsis-title"><i class="fa-solid fa-align-left"></i> Book Synopsis</h4>
                    <p class="modal-description">${escapeHtml(book.description)}</p>

                    <div class="modal-specs-list">
                        <div class="spec-item"><strong>Publisher:</strong> ${escapeHtml(book.publisher)}</div>
                        <div class="spec-item"><strong>Year:</strong> ${book.year}</div>
                        <div class="spec-item"><strong>Pages:</strong> ${book.pages} pages</div>
                        <div class="spec-item"><strong>ISBN-13:</strong> ${escapeHtml(book.isbn)}</div>
                    </div>

                    <div class="modal-actions">
                        <button class="btn-modal-wishlist ${isFav ? 'active' : ''}" id="modal-wishlist-action" data-book-id="${book.id}">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                            <span>${isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                        </button>
                        <button class="btn-modal-close-alt" id="modal-close-alt-btn">
                            Close Preview
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Attach action events inside modal
        document.getElementById("modal-wishlist-action").addEventListener("click", () => {
            toggleFavorite(book.id);
            // Re-sync modal button state
            const updatedFav = wishlist.includes(book.id);
            const btn = document.getElementById("modal-wishlist-action");
            btn.className = `btn-modal-wishlist ${updatedFav ? 'active' : ''}`;
            btn.innerHTML = `<i class="${updatedFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span>${updatedFav ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>`;
        });

        document.getElementById("modal-close-alt-btn").addEventListener("click", closeBookModal);

        // Display modal
        bookModal.classList.add("active");
        bookModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent body scroll
    }

    /**
     * Closes the book modal
     */
    function closeBookModal() {
        bookModal.classList.remove("active");
        bookModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Restore body scroll
    }

    // Modal close button event
    modalCloseBtn.addEventListener("click", closeBookModal);

    // Close on click outside modal card
    bookModal.addEventListener("click", (e) => {
        if (e.target === bookModal) {
            closeBookModal();
        }
    });

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && bookModal.classList.contains("active")) {
            closeBookModal();
        }
    });

    // --------------------------------------------------------------------------
    // 7. FAVORITES / WISHLIST MANAGEMENT
    // --------------------------------------------------------------------------

    /**
     * Toggles favorite status of a book
     */
    function toggleFavorite(bookId) {
        const book = sampleBooks.find(b => b.id === bookId);
        const index = wishlist.indexOf(bookId);

        if (index > -1) {
            wishlist.splice(index, 1);
            showToast(`Removed "${book ? book.title.slice(0, 24) + '...' : 'Book'}" from Favorites.`, "info");
        } else {
            wishlist.push(bookId);
            showToast(`Added "${book ? book.title.slice(0, 24) + '...' : 'Book'}" to Favorites!`, "success");
        }

        saveWishlistToStorage();
        updateWishlistBadge();

        // Update favorite heart button states in currently rendered cards
        document.querySelectorAll(`.card-fav-btn[data-book-id="${bookId}"]`).forEach(btn => {
            const isFav = wishlist.includes(bookId);
            btn.className = `card-fav-btn ${isFav ? 'active' : ''}`;
            btn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
            btn.title = isFav ? 'Remove from favorites' : 'Add to favorites';
        });
    }

    /**
     * Updates header wishlist badge number
     */
    function updateWishlistBadge() {
        if (wishlistBadge) {
            wishlistBadge.textContent = wishlist.length;
        }
    }

    /**
     * Header Wishlist button click: Filter to show only favorites or notify
     */
    wishlistBtn.addEventListener("click", () => {
        if (wishlist.length === 0) {
            showToast("Your favorites list is empty. Click the heart icon on any book to add it!", "info");
            return;
        }

        // Filter catalog to show only wishlist books
        searchInput.value = "";
        searchQuery = "";
        currentFilter = "All";
        clearSearchBtn.classList.remove("visible");

        // Filter dynamically
        const favBooks = sampleBooks.filter(book => wishlist.includes(book.id));
        booksGrid.innerHTML = favBooks.map(book => createBookCardHTML(book)).join("");
        attachCardEventListeners();

        showingCountEl.textContent = favBooks.length;
        totalCountEl.textContent = sampleBooks.length;
        noBooksState.style.display = "none";

        // Scroll down to catalog
        document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
        showToast(`Displaying your ${wishlist.length} favorite book(s).`, "success");
    });

    /**
     * LocalStorage helpers
     */
    function loadWishlistFromStorage() {
        try {
            const saved = localStorage.getItem("bookverse_wishlist");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    function saveWishlistToStorage() {
        try {
            localStorage.setItem("bookverse_wishlist", JSON.stringify(wishlist));
        } catch (e) {
            // LocalStorage might be disabled in private mode
        }
    }

    // --------------------------------------------------------------------------
    // 8. TOAST NOTIFICATIONS
    // --------------------------------------------------------------------------

    /**
     * Displays a clean toast notification popup in the bottom right corner
     */
    function showToast(message, type = "info") {
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer) return;

        const toast = document.createElement("div");
        toast.className = "toast";

        const iconClass = type === "success" 
            ? "fa-solid fa-circle-check" 
            : "fa-solid fa-circle-info";

        toast.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${escapeHtml(message)}</span>
        `;

        toastContainer.appendChild(toast);

        // Auto remove from DOM after animation completes (3 seconds)
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }

    // --------------------------------------------------------------------------
    // 9. MOBILE NAVIGATION & SCROLL HIGHLIGHTS
    // --------------------------------------------------------------------------

    // Hamburger menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            navToggle.innerHTML = isOpen 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close mobile menu when clicking any nav link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // Sticky header shadow on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Active link highlighting based on scroll position
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // --------------------------------------------------------------------------
    // 10. UTILITY FUNCTIONS
    // --------------------------------------------------------------------------

    /**
     * Prevents XSS attacks by sanitizing string inputs
     */
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // --------------------------------------------------------------------------
    // 11. INITIALIZE CATALOG ON PAGE LOAD
    // --------------------------------------------------------------------------
    renderCatalog();
}
