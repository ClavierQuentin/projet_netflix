let pageAccueil = document.getElementById('pageAccueil');
let ajouterProfil = document.getElementById('bloc_ajouter')
const button = document.getElementById("gerer_profil");

button.addEventListener('click', () =>{
    pageAccueil.style.display = "none";
    ajouterProfil.style.display = "flex";
})