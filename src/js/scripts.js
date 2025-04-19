// This file contains JavaScript code for interactive features and functionality on the SciNeW website.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Toggle mobile navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Example: Fetch and display latest news articles
    fetch('/api/latest-news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.querySelector('.news-container');
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                    <a href="${article.link}">Read more</a>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});