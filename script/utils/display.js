import { recetteFactory } from "../factories/recettes.js";
import { filtreFactory } from "../factories/filtre.js";
export { displayRecettes, displayFiltreIngredients, displayFocusIngredient, noDisplayFocusIngredientButton,
    displayFocusAppareil, noDisplayFocusAppareilButton, displayFiltreAppareil, displayFocusUstensile,
    noDisplayFocusUstensileButton, displayFiltreUstensile, displayFiltreActif, noDisplayFocusIngredient,
    noDisplayFocusAppareil, noDisplayFocusUstensiles};


/**
 * Displays the receipts received in a table
 * @param {*} data 
 */
async function displayRecettes(data){
    const recettesSection = document.querySelector(".recettes");

    data.forEach(recette => {
        const recettesModel = recetteFactory(recette);
        const recetteCarte = recettesModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCarte);
    });
}


/**
 * Create an element in the dom en for each element of the array.
 * @param {*} tab 
 */
async function displayFiltreIngredients(tab){
    const filtreIngredientsDom = document.querySelector("#filtre_secondaire_composants_ingredient");
    let nbMax = 0;
    tab.forEach(el => {
        if(nbMax < 30){
            gestionGridTag(nbMax, filtreIngredientsDom);
            const filtreModel = filtreFactory(el);
            const filtreElement = filtreModel.getFiltreButtonDOM();
            filtreIngredientsDom.appendChild(filtreElement);
            nbMax++;
        }
        
    });
}


/**
 * Create an element in the dom en for each element of the array.
 * @param {*} tab 
 */
async function displayFiltreAppareil(tab){
    const filtreAppareilDom = document.querySelector("#filtre_secondaire_composants_appareil");
    let nbMax = 0;
    tab.forEach(el => {
        if(nbMax < 30){
            gestionGridTag(nbMax, filtreAppareilDom);
            const filtreModel = filtreFactory(el);
            const filtreElement = filtreModel.getFiltreButtonDOM();
            filtreAppareilDom.appendChild(filtreElement);
            nbMax++;
        }
    });
}

/**
 * Create an element in the dom en for each element of the array.
 * @param {*} tab 
 */
async function displayFiltreUstensile(tab){
    const filtreUstensilesDom = document.querySelector("#filtre_secondaire_composants_ustensiles");
    let nbMax = 0;
    tab.forEach(el => {
        if(nbMax < 30){
            gestionGridTag(nbMax, filtreUstensilesDom);
            const filtreModel = filtreFactory(el);
            const filtreElement = filtreModel.getFiltreButtonDOM();
            filtreUstensilesDom.appendChild(filtreElement);
            nbMax++;
        }
        
    });
}

/**
 * Displays by making ingredient tags active.
 */
async function displayFocusIngredient(){   
    this.parentElement.parentElement.classList.add("filtre_secondaire_actif");
    document.getElementById("fleche_ingredients").setAttribute("class", "fleche_active");
    document.getElementById("filtre_secondaire_composants_ingredient").style.display = "grid";
    document.getElementById("filtre_ingredients_input").placeholder = "Recherche un ingrédient";
}

/**
 * Hide ingredients when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusIngredientButton(el){
    el.parentElement.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_ingredients").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_ingredient").style.display = "none";
    document.getElementById("filtre_ingredients_input").placeholder = "Ingrédients";
}

/**
 * Displays by making device tags active.
 */
async function displayFocusAppareil(){
    this.parentElement.parentElement.classList.add("filtre_secondaire_actif");
    document.getElementById("fleche_appareils").setAttribute("class", "fleche_active");
    document.getElementById("filtre_secondaire_composants_appareil").style.display = "grid";
    document.getElementById("filtre_appareils_input").placeholder = "Recherche appareils";
}

/**
 * Hide device when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusAppareilButton(el){
    el.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_appareils").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_appareil").style.display = "none";
    document.getElementById("filtre_appareils_input").placeholder = "Appareils";
}

/**
 * Displays by making utensil tags active.
 */
async function displayFocusUstensile(){
    this.parentElement.parentElement.classList.add("filtre_secondaire_actif");
    document.getElementById("fleche_ustensiles").setAttribute("class", "fleche_active");
    document.getElementById("filtre_secondaire_composants_ustensiles").style.display = "grid";
    document.getElementById("filtre_ustensiles_input").placeholder = "Recherche d'un ustensiles";
}

/**
 * Hide utensil when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusUstensileButton(el){
    el.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_ustensiles").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_ustensiles").style.display = "none";
    document.getElementById("filtre_ustensiles_input").placeholder = "Ustensiles";
}

/**
 * Hide ingredients when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusIngredient(el){
    el.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_ingredients").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_ingredient").style.display = "none";
    document.getElementById("filtre_ingredients_input").placeholder = "Ingrédients";
}

/**
 * Hide device when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusAppareil(el){
    el.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_appareils").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_appareil").style.display = "none";
    document.getElementById("filtre_appareils_input").placeholder = "Appareils";
}

/**
 * Hide utensil when input is out of focus
 * @param {*} el 
 */
async function noDisplayFocusUstensiles(el){
    el.parentElement.parentElement.classList.remove("filtre_secondaire_actif");
    document.getElementById("fleche_ustensiles").setAttribute("class", "fleche");
    document.getElementById("filtre_secondaire_composants_ustensiles").style.display = "none";
    document.getElementById("filtre_ustensiles_input").placeholder = "Ustensiles";
}

/**
 * Create a tag according to the chosen element.
 * @param {*} element 
 */
async function displayFiltreActif(element){
    const filtreActif = document.querySelector("#filtre_actif");
    const filtreModel = filtreFactory(element);
    const filtreElement = filtreModel.getElementFiltreActif();
    filtreActif.appendChild(filtreElement);
}

/**
 * Manages the grid.
 * @param {*} nbElement 
 * @param {*} elementDOM 
 */
function gestionGridTag(nbElement, elementDOM){
    if (nbElement > 20){
        elementDOM.style.cssText = `
            display: grid; 
            grid-template-columns: repeat(3, 1fr);
            `;
    }
    if (nbElement < 20 && nbElement > 10){
        elementDOM.style.cssText = `
            display: grid; 
            grid-template-columns: repeat(2, 1fr);
            `;
    }
    if (nbElement < 10 && nbElement > -1){
        elementDOM.style.cssText = `
            display: grid; 
            grid-template-columns: repeat(1, 1fr);
            `;
    }
}