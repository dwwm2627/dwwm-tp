// Pas à pas du jeudi matin : valider un formulaire côté client.
// Le formulaire et ses éléments
const form = document.querySelector('#recherche');
const field = document.querySelector('#ville');
const error = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
console.log(form, field, error, result);

// ETAPE 1 - GARDER LA MAIN
// SUBMIT :LE FORMULAIRE EST ENVOYE (BOUTON OU ENTREE)
form.addEventListener('submit', (event)=> {
    // preventDefault : la page ne se recharge pas
    event.preventDefault();
    // pour voir que l'écouteur s'exécute
    console.log(`envoyé!`)
})