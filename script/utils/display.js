import { recetteFactory } from "../factories/recettes.js";
import { filtreFactory } from "../factories/filtre.js";
export { displayRecettes, displayFiltreIngredients, displayFocus, noDisplayFocus };

async function displayRecettes(data){
    const recettesSection = document.querySelector(".recettes");

    data.forEach(recette => {
        const recettesModel = recetteFactory(recette);
        const recetteCarte = recettesModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCarte);
    });
}

async function displayFiltreIngredients(tab){
    const filtreIngredientsDom = document.querySelector("#filtre_secondaire_composants_ingredient");
    let nbMax = 0;
    tab.forEach(el => {
        if(nbMax < 30){
            const filtreModel = filtreFactory(el);
            const filtreElement = filtreModel.getFiltreButtonDOM();
            filtreIngredientsDom.appendChild(filtreElement);
            nbMax++;
        }
        
    });
}

async function displayFocus(){
    this.parentElement.parentElement.classList.add("filtre_secondaire_actif");
    document.getElementById("filtre_secondaire_composants_ingredient").style.display = "grid";
    document.getElementById("filtre_ingredients_input").placeholder = "Recherche un ingrédient";
    document.get
}

async function noDisplayFocus(){
    this.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("filtre_secondaire_composants_ingredient").style.display = "none";
    document.getElementById("filtre_ingredients_input").placeholder = "Ingredient";
}