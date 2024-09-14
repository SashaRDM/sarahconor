// Carousel des témoignages
let index = 0;
const temoignages = document.querySelectorAll('.temoignage');

function showTemoignage(n) {
    temoignages.forEach((temoignage, i) => {
        temoignage.classList.remove('active');
        if (i === n) {
            temoignage.classList.add('active');
        }
    });
}

function nextTemoignage() {
    index = (index + 1) % temoignages.length;
    showTemoignage(index);
}

setInterval(nextTemoignage, 5000); // Change de témoignage toutes les 5 secondes

// Afficher le premier témoignage au chargement
showTemoignage(index);
