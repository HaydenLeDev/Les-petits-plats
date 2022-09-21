import {recipes} from "../../data/recipes.js";
import {recetteFactory} from "../factories/recettes.js";

var data;

async function getData(){
    data = recipes;
}

async function displayRecettes(){
    const recettesSection = document.querySelector(".recettes");

    data.forEach(recette => {
        const recettesModel = recetteFactory(recette);
        const recetteCarte = recettesModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCarte);
    });
}

getData();
console.log(data);
displayRecettes();
