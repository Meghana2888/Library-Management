// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Live Search Filter
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const books = document.querySelectorAll('.book-card');
    
    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        book.style.display = title.includes(filter) ? 'block' : 'none';
    });
});
