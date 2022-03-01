let pageAccueil = document.getElementById('pageAccueil');
let ajouterProfil = document.getElementById('bloc_ajouter')
const button = document.getElementById("ajouter_profil");
const boutonAnnuler = document.getElementById('bouton_annuler')

let pageGestion = document.getElementById('pageGestion')

const boutonTerminer = document.getElementById('gestion_terminer')

const boutonGererProfils = document.getElementById('gerer_profils')

const boutonAjouterProfil = document.getElementById('ajouter_profil_2')

button.addEventListener('click', () =>{
    pageAccueil.style.display = "none";

    ajouterProfil.style.display = "flex";
})
boutonAnnuler.addEventListener('click', () => {
    ajouterProfil.style.display = "none";
    pageAccueil.style.display = 'flex';
})

boutonGererProfils.addEventListener('click', () => {
    pageAccueil.style.display = 'none'
    pageGestion.style.display = 'flex'
})

boutonTerminer.addEventListener('click', () => {
    pageGestion.style.display = 'none'
    pageAccueil.style.display = 'flex'
})
boutonAjouterProfil.addEventListener('click', () => {
    pageGestion.style.display ='none'
    ajouterProfil.style.display = 'flex'
})