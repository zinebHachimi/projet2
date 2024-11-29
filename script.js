// Fonction pour afficher un message dans la console quand la souris entre sur une image
function onImageMouseOver(event) {
    console.log('Souris sur l\'image : ' + event.target.alt);
}

// Fonction pour afficher un message dans la console quand la souris quitte une image
function onImageMouseLeave(event) {
    console.log('Souris quitté l\'image : ' + event.target.alt);
}

// Fonction pour afficher un message dans la console quand une image reçoit le focus
function onImageFocus(event) {
    console.log('Focus sur l\'image : ' + event.target.alt);
}

// Fonction pour afficher un message dans la console quand une image perd le focus
function onImageBlur(event) {
    console.log('Perte de focus de l\'image : ' + event.target.alt);
}

// Fonction pour charger la page
function onPageLoad() {
    console.log("La page a été chargée avec succès !");
}

// Fonction pour ajouter l'attribut tabindex à toutes les images
function addTabIndex() {
    let images = document.querySelectorAll('figure');
    images.forEach(function(figure, index) {
        figure.setAttribute('tabindex', index + 1);
    });
}

// Ajout des écouteurs d'événements
window.onload = onPageLoad;

document.querySelectorAll('figure').forEach(function(figure) {
    figure.addEventListener('mouseover', onImageMouseOver);
    figure.addEventListener('mouseleave', onImageMouseLeave);
    figure.addEventListener('focus', onImageFocus);
    figure.addEventListener('blur', onImageBlur);
});

// Ajout du tabindex à toutes les images
addTabIndex();
