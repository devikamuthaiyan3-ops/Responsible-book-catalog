# Responsive Online Book Catalog
**College MWP (Major/Mini Web Project) Mini Project**

A modern, elegant, and fully functional **Responsive Online Book Catalog** web application built with **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. The project features an attractive **white and dark green theme**, real-time search, category filtering, multi-criteria sorting, interactive book detail modals, and favorites management.

---

## 📌 Project Overview
- **Project Title:** Responsive Online Book Catalog
- **Domain:** Web Development & User Interface Engineering
- **Tech Stack:** HTML5, CSS3 (CSS Grid & Flexbox), Vanilla JavaScript (ES6+)
- **Theme:** White & Dark Forest Green Theme (`#1b4332`, `#2d6a4f`, `#ffffff`, `#f8faf9`)
- **Compatibility:** 100% Responsive on Mobile Phones, Tablets, Laptops, and Desktops.

---

## 🚀 Key Features

1. **Modern Navigation Bar & Hero Section:**
   - Sticky header with logo and navigation links (Home, Catalog, Categories, About).
   - Wishlist/Favorites counter with dynamic badge updates.
   - Fully responsive hamburger navigation menu for mobile devices.
   - Engaging hero banner highlighting project details and key statistics.

2. **16 Curated Book Cards:**
   - Pre-loaded with 16 books spanning 4 major categories:
     - 💻 **Programming** (Clean Code, JavaScript Definitive Guide, Pragmatic Programmer, Python Crash Course)
     - 📖 **Fiction** (The Midnight Library, The Alchemist, To Kill a Mockingbird, 1984)
     - 🔬 **Science** (A Brief History of Time, Cosmos, Sapiens, The Gene)
     - ⚡ **Technology** (The Innovators, Life 3.0, The Design of Everyday Things, Chip War)
   - Every card displays: Cover image (with built-in SVG fallback), Title, Author, Category badge, Star rating, Price, and interactive buttons.

3. **Real-Time Instant Search:**
   - Search books instantly by **Title** or **Author**.
   - One-click clear search button (`✕`).

4. **Multi-Category Filter:**
   - Filter buttons for **All Books**, **Programming**, **Fiction**, **Science**, and **Technology**.
   - Direct category selection from hero cards and footer links.
   - Dynamic counter: *"Showing X of Y books"*.
   - Friendly empty-state with a "Reset All Filters" button if no books match.

5. **Sorting Capabilities:**
   - Featured (Default order)
   - Price: Low to High
   - Price: High to Low
   - Rating: Highest First
   - Title: A to Z & Z to A

6. **Interactive "View Details" Modal:**
   - Click **View Details** on any book card to open a high-resolution preview dialog.
   - Shows detailed synopsis, publisher, publication year, total pages, ISBN-13, and direct "Add to Wishlist" option.
   - Smooth animation, accessible backdrop close, close button, and keyboard `Escape` key support.

7. **Wishlist / Favorites System:**
   - Click heart icon on any card or inside modal to save books to favorites.
   - Persisted using browser `localStorage`.
   - Toast notification alerts for user actions.

8. **White & Dark Green Theme:**
   - Cohesive color scheme with deep forest greens, emerald highlights, soft mint accents, and clean white cards.
   - Clean typography using Google Fonts (*Playfair Display* & *Inter*).

---

## 📁 File Structure

```text
onlineBookCatalog/
│
├── index.html       # Semantic HTML5 markup, layout, sections, and modal dialog
├── style.css        # Responsive CSS3 styles, CSS variables, grid/flexbox, animations
├── script.js        # JavaScript ES6+ logic, sample books data, filtering, modal & events
└── README.md        # Comprehensive documentation and setup instructions
```

---

## 💻 How to Run the Project

You can run this project easily without installing any complex dependencies or web frameworks:

### Method 1: Direct Browser Opening (Quickest)
1. Navigate to the project folder:
   `c:\Users\devik\OneDrive\Documents\Desktop\onlineBookCatalog`
2. Double-click on `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: VS Code Live Server (Recommended for Development)
1. Open the `onlineBookCatalog` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/index.html`.

### Method 3: Python Built-in HTTP Server (Terminal)
Open PowerShell or Command Prompt in the project folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🎓 College Viva / Presentation Reference

Here are quick explanations of common questions asked during mini project evaluation:

| Question / Feature | How It Is Implemented |
|---|---|
| **How does real-time search work?** | An `input` event listener is attached to `#search-input`. When the user types, it updates `searchQuery` and triggers `renderCatalog()`, filtering book objects where `title.toLowerCase().includes(query)` or `author.toLowerCase().includes(query)`. |
| **How does category filtering work?** | Each filter tab contains a `data-filter` attribute. When clicked, `currentFilter` is updated, and the array `filter()` method retains only books matching that category or all books if `All` is active. |
| **How are book cards rendered dynamically?** | JavaScript maintains an array of 16 book objects. The `renderCatalog()` function uses `sampleBooks.map()` to generate card HTML strings and injects them into `#books-grid` via `innerHTML`. |
| **How is responsiveness achieved?** | Using mobile-first CSS media queries (`@media (max-width: 1024px)`, `@media (max-width: 768px)`, `@media (max-width: 480px)`), CSS Grid (`repeat(auto-fill, minmax(280px, 1fr))`), and Flexbox layouts. |
| **How does image fallback work?** | Each `<img>` has an `onerror` handler that injects a dynamically generated inline SVG image with book title and category color if the external URL is unreachable or offline. |

---

## 📜 License & Credits
Developed as an academic MWP Mini Project. Open for educational demonstration and enhancement.
