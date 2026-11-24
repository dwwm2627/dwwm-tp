// Palier 1 — Le compteur de visiteurs (lundi après-midi : les événements)
// 1. Sélectionnez les deux boutons (#entree, #remise) et le <strong id="valeur">.
// 2. Déclarez le nombre de visiteurs, qui va changer : let visitors = 0;
// 3. Clic sur « Un visiteur entre » : le nombre augmente de 1 et s'affiche (textContent).
// 4. Clic sur « Remettre à zéro » : le nombre revient à 0 et s'affiche.
// Vérifiez dans le navigateur : 3 clics donnent 3 ; la remise donne 0 ; au clavier aussi
// (Tab jusqu'au bouton, puis Entrée).

const showm = document.querySelector(`#valeur`);
let visitors = 0;

document.querySelector(`#entree`).addEventListener(`click`, ()=>{
    visitors=visitors+1;
    showm.textContent = visitors;
});

document.querySelector(`#remise`).addEventListener(`click`, ()=>{
    visitors = 0;
    showm.textContent = visitors;
})
