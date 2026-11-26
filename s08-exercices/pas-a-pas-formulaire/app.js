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

// ETAPE 2 - LIRE UN CHAMPS
// Deuxieme ecouteur submit : lire le champ
form.addEventListener('submit', (event)=> {
// preventDefault : la page ne se recharge pas
    event.preventDefault();
    //value : le texte du champ, trim : sans espace autour
    const city = field.value.trim();
    // le resultat, ecrit dans la page
    result.textContent = `Recherche : ${city}`;
})

//ETAPE 3 -  VERIFIER
// Remplace l'ecouteur de l'étape 2 : lire, puis verifier
form.addEventListener(`submit`, (event)=>{
// preventDefault : la page ne se recharge pas
    event.preventDefault();
    //value : le texte du champ, trim : sans espace autour
    const city = field.value.trim();
    // champ vide : un message d'erreur, et aucun resultat
    if(city === ``){
        //le message, visible sous le champ
        error.textContent = `Veuillez écrire le nom d'une ville.`;
        // On efface un ancien résultat
        result.textContent = ``;
    }else if (city.length === 1){
        error.textContent = `Veuillez écrire au moins 2 caractères`;
        // On efface un ancien résultat
        result.textContent = ``;
    }else{
        // Champe rempli : plus de message d'erreur
        error.textContent =``;
        //le resultat, ecrit dans la page
        result.textContent = `Recherche : ${city}`;
    }
})

// ETAPE 4 - EFFACER EN RETAPANT
// VIDE LE MESSAGE PENDANT LA SAISIE
field.addEventListener(`input`, ()=>{
    //on efface l'erreur dès qu'on retape
    error.textContent=``;
})

//ETAPE 5 - Dans l'écouteur de l'étape 3, ajoutez un cas : une ville d'une seule lettre affiche le message "Veuillez écrire au moins 2 caractères", pour cela vous devez utiliser (city.length === 1)