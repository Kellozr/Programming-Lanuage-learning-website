document.addEventListener('DOMContentLoaded', () => {
    const accordionTitles = document.querySelectorAll('.accordion-title');
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.accordion-item');
        items.forEach(item => {
            const title = item.querySelector('.accordion-title').textContent.toLowerCase();
            item.style.display = title.includes(filter) ? 'block' : 'none';
        });
    });
});
