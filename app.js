// app.js

// Sélectionne le bouton du menu et la barre latérale
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.Barre-Latérale');

// Ajoute un événement de clic pour basculer la classe 'visible'
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

