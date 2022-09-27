import { displayRecettes, displayFiltreIngredients, noDisplayFocusIngredient, displayFocusIngredient,
    noDisplayFocusAppareil, displayFocusAppareil, displayFiltreAppareil, displayFocusUstensile,
    noDisplayFocusUstensile, displayFiltreUstensile, displayFiltreActif } from "../utils/display.js";
export { initFiltre };


function initFiltre(data) {
    var tableauIngredients = [];
    tableauIngredients = tableauIngredientsInits(tableauIngredients, data);
    document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
    displayFiltreIngredients(tableauIngredients);
    document.getElementById("filtre_titre_input").addEventListener('keyup', rechercheTitre);
    document.getElementById("filtre_ingredients_input").addEventListener('keyup', rechercheFiltreIngredient);
    document.getElementById("filtre_ingredients_input").addEventListener('focus', displayFocusIngredient);
    initEvenementFiltre(tableauIngredients);


    var tableauAppareil = [];
    tableauAppareil = tableauAppareilsInit(tableauAppareil, data);
    document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
    displayFiltreAppareil(tableauAppareil);
    document.getElementById("filtre_appareils_input").addEventListener('keyup', rechercheFiltreAppareil);
    document.getElementById("filtre_appareils_input").addEventListener('focus', displayFocusAppareil);
    initEvenementFiltre(tableauAppareil);

    var tableauUstensiles = [];
    tableauUstensiles = tableauUstensilesInit(tableauUstensiles, data);
    document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
    displayFiltreUstensile(tableauUstensiles);
    document.getElementById("filtre_ustensiles_input").addEventListener('keyup', rechercheFiltreUstensile);
    document.getElementById("filtre_ustensiles_input").addEventListener('focus', displayFocusUstensile);
    initEvenementFiltre(tableauUstensiles);
    

    function rechercheTitre() {
        let inputUser = this.value;
        let result = [];
        if (nombreCharMin(inputUser)) {
            document.getElementById("liste_recette").innerHTML = "";
            data.forEach(element => {
                console.log(element.name);
                if (comparaisonString(element.name, inputUser)) {
                    result.push(element);
                }
            });
            console.log(result);
            if (result.length == 0) {
                document.getElementById("recette_null").style.display = "flex";
            } else {
                document.getElementById("recette_null").style.display = "none";
                displayRecettes(result);
            }

        } else {
            document.getElementById("liste_recette").innerHTML = "";
            displayRecettes(data);
        }
    }

    function rechercheFiltreIngredient() {
        let inputUser = this.value;
        var result = [];
        document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
        displayFiltreIngredients(tableauIngredients);
        initEvenementFiltre(tableauIngredients);
        if (nombreCharMin(inputUser)) {
            tableauIngredients.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            console.log(result);
            document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
            displayFiltreIngredients(result);
            initEvenementFiltre(result);
        }
    }

    function rechercheFiltreAppareil() {
        let inputUser = this.value;
        var result = [];
        tableauAppareil = tableauAppareilsInit(tableauAppareil, data);
        document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
        displayFiltreAppareil(tableauAppareil);
        if (nombreCharMin(inputUser)) {
            tableauAppareil.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            console.log(result);
            document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
            displayFiltreAppareil(result);
        }
    }

    function rechercheFiltreUstensile() {
        let inputUser = this.value;
        var result = [];
        tableauUstensiles = tableauAppareilsInit(tableauUstensiles, data);
        document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
        displayFiltreUstensile(tableauUstensiles);
        if (nombreCharMin(inputUser)) {
            tableauUstensiles.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            console.log(result);
            document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
            displayFiltreUstensile(result);
        }
    }

    function initEvenementFiltre(tab){
        let boutons = document.querySelectorAll(".element_button_filtre");
        boutons.forEach(element => {
            document.getElementById(element.id).addEventListener("click", ajoutFiltre);
        });
    }

    function ajoutFiltre(){
        console.log(this.id);
        displayFiltreActif(this.id);
        supprimerFiltreTab(tableauIngredients, this.id);
        noDisplayFocusIngredient(this);
        noDisplayFocusAppareil(this);
        noDisplayFocusUstensile(this);
        document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
        displayFiltreIngredients(tableauIngredients);
        initEvenementFiltre(tableauIngredients);
        console.log(tableauIngredients);
    }
    
}



function nombreCharMin(text) {
    if (text.length > 2) {
        return true;
    }
    return false;
}

function comparaisonString(text_1, text_2) {
    let text_1Up = text_1.toUpperCase();
    let text_2Up = text_2.toUpperCase();
    return text_1Up.includes(text_2Up);
}

function tableauIngredientsInits(tab, data) {
    data.forEach(element => {
        element.ingredients.forEach(i => {
            if (tab.indexOf(i.ingredient) === -1) {
                tab.push(i.ingredient);
            }
        });
    });
    return tab;
}

function tableauAppareilsInit(tab, data) {
    data.forEach(element => {
        if (tab.indexOf(element.appliance) === -1) {
            tab.push(element.appliance);
        }
    });
    return tab;
}

function tableauUstensilesInit(tab, data) {
    data.forEach(element => {
        element.ustensils.forEach(i => {
            if (tab.indexOf(i) === -1) {
                tab.push(i);
            }
        });
    });
    return tab;
}



function supprimerFiltreTab(tab, element){
    let index = tab.indexOf(element);
    if (index !== -1){
        tab.splice(index, 1);
    }
    console.log(index);
}