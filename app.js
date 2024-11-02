// app.js
// Sélectionne le bouton du menu et la barre latérale
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.Barre-Latérale');
const dateElement = document.getElementById('date');
const newTodoInput = document.getElementById('new-todo');
const taskList = document.getElementById('task-list');

// Ajoute un événement de clic pour basculer la classe 'visible'
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

// Fonction pour afficher la date
function displayDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const dayName = days[today.getDay()]; // Nom du jour
    const day = today.getDate(); // Jour du mois
    const month = months[today.getMonth()]; // Mois
    const year = today.getFullYear(); // Année

    // Affichage
    const formatDate = `it's ${dayName}, ${day} ${month} ${year}`;
    // Affiche dans HTML
    dateElement.textContent = formatDate;
}

// Ajoute un écouteur d'événement pour capturer l'appui sur la touche "Entrée"
newTodoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && newTodoInput.value.trim() !== '') {
        // Crée un conteneur pour la tâche
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        // Ajoute une case à cocher
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Crée un élément pour le texte de la tâche
        const taskText = document.createElement('span');
        taskText.textContent = newTodoInput.value;

        
        // Ajoute la case à cocher, le texte et le bouton dans l'élément de tâche
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);

        // Ajoute l'élément de tâche au conteneur de la liste des tâches
        taskList.appendChild(taskItem);

        // Réinitialise le champ de saisie
        newTodoInput.value = '';
    }
});
// Appelle la fonction pour afficher la date au chargement
displayDate();

