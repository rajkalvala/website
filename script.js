const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResultsList = document.getElementById('search-results-list');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    searchResultsList.innerHTML = '';

    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(paragraph => {
        const paragraphText = paragraph.textContent.toLowerCase();
        if (paragraphText.includes(searchTerm)) {
            const listItem = document.createElement('li');
            listItem.textContent = paragraphText;
            searchResultsList.appendChild(listItem);
        }
    });
});
