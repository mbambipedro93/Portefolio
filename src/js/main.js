window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("bg-purple-800", window.scrollY > 0);
});

// Sélectionnez tous les liens de la barre de navigation
const navLinks = document.querySelectorAll('.nav-link');

// Parcourez chaque lien
navLinks.forEach(link => {
    // Ajoutez un gestionnaire d'événement de clic à chaque lien
    link.addEventListener('click', (event) => {
        // Empêchez le comportement par défaut du lien
        event.preventDefault();

        // Obtenez l'ID de la section cible à partir de l'attribut href du lien
        const targetId = link.getAttribute('href');

        // Sélectionnez la section cible
        const targetSection = document.querySelector(targetId);

        // Faites défiler la fenêtre jusqu'à la section cible avec une animation fluide
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
