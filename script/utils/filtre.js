import { displayRecettes, displayFiltreIngredients, noDisplayFocusIngredientButton, displayFocusIngredient,
    noDisplayFocusAppareilButton, displayFocusAppareil, displayFiltreAppareil, displayFocusUstensile,
    noDisplayFocusUstensileButton, displayFiltreUstensile, displayFiltreActif, noDisplayFocusIngredient,
    noDisplayFocusAppareil, noDisplayFocusUstensiles } from "../utils/display.js";
export { initFiltre };


function initFiltre(data) {
    //Initialisation de mes filtre actif
    var tableauFiltreActif = [];

    //Initialisation Filtre des ingredients
    var tableauIngredients = [];
    tableauIngredients = tableauIngredientsInits(tableauIngredients, data);
    document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
    displayFiltreIngredients(tableauIngredients);
    document.querySelector("#filtre_secondaire_composants_ingredient").style.display = "none";
    document.getElementById("filtre_titre_input").addEventListener('keyup', rechercheTitre);
    document.getElementById("filtre_ingredients_input").addEventListener('keyup', rechercheFiltreIngredient);
    document.getElementById("filtre_ingredients_input").addEventListener('focus', displayFocusIngredient);

    //Initialisation Filtre des ingredients
    var tableauAppareil = [];
    tableauAppareil = tableauAppareilsInit(tableauAppareil, data);
    document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
    displayFiltreAppareil(tableauAppareil);
    document.querySelector("#filtre_secondaire_composants_appareil").style.display = "none";
    document.getElementById("filtre_appareils_input").addEventListener('keyup', rechercheFiltreAppareil);
    document.getElementById("filtre_appareils_input").addEventListener('focus', displayFocusAppareil);
    
    //Initialisation Filtre des ingredients
    var tableauUstensiles = [];
    tableauUstensiles = tableauUstensilesInit(tableauUstensiles, data);
    document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
    displayFiltreUstensile(tableauUstensiles);
    document.querySelector("#filtre_secondaire_composants_ustensiles").style.display = "none";
    document.getElementById("filtre_ustensiles_input").addEventListener('keyup', rechercheFiltreUstensile);
    document.getElementById("filtre_ustensiles_input").addEventListener('focus', displayFocusUstensile);
    initEvenementFiltre();
    
    /**
     * Fonction recherchant toutes les recettes ayant les inputs dans le titre. 
     */
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

    /**
     * Recherche pour les filtre Ingredient
     */
    function rechercheFiltreIngredient() {
        let inputUser = this.value;
        var result = [];
        document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
        displayFiltreIngredients(tableauIngredients);
        initEvenementFiltre();
        if (nombreCharMin(inputUser)) {
            tableauIngredients.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
            console.log(result);
            displayFiltreIngredients(result);
            initEvenementFiltre();
        }
    }

    /**
     *  Recherche pour les filtre Appareil
     */
    function rechercheFiltreAppareil() {
        let inputUser = this.value;
        var result = [];
        tableauAppareil = tableauAppareilsInit(tableauAppareil, data);
        document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
        displayFiltreAppareil(tableauAppareil);
        initEvenementFiltre();
        if (nombreCharMin(inputUser)) {
            tableauAppareil.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
            displayFiltreAppareil(result);
            initEvenementFiltre();
        }
    }

    /**
     *  Recherche pour les filtre Ustensile
     */
    function rechercheFiltreUstensile() {
        let inputUser = this.value;
        var result = [];
        tableauUstensiles = tableauAppareilsInit(tableauUstensiles, data);
        document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
        displayFiltreUstensile(tableauUstensiles);
        initEvenementFiltre();
        if (nombreCharMin(inputUser)) {
            tableauUstensiles.forEach(element => {
                if (comparaisonString(element, inputUser)) {
                    result.push(element);
                }
            });
            document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
            displayFiltreUstensile(result);
            initEvenementFiltre();
            console.log('');
        }
    }

    /**
     * Initialise les evenements pour chaque bouton des filtres.
     */
    function initEvenementFiltre(){
        let boutons = document.querySelectorAll(".element_button_filtre");
        boutons.forEach(element => {
            document.getElementById(element.id).addEventListener("click", ajoutFiltre);
        });
    }

    /**
     * Fontion se déclanchant quand on click sur un bouton filtre.
     */
    function ajoutFiltre(){
        displayFiltreActif(this);
        supprimerFiltreTab(tableauIngredients, this.id);
        supprimerFiltreTab(tableauAppareil, this.id);
        supprimerFiltreTab(tableauUstensiles, this.id);
        noDisplayFocusIngredientButton(this);
        noDisplayFocusAppareilButton(this);
        noDisplayFocusUstensileButton(this);
        document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
        document.getElementById("filtre_ingredients_input").value = "";
        displayFiltreIngredients(tableauIngredients);
        document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
        document.getElementById("filtre_appareils_input").value = "";
        displayFiltreAppareil(tableauAppareil);
        document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
        document.getElementById("filtre_ustensiles_input").value = "";
        displayFiltreUstensile(tableauUstensiles);
        initEvenementFiltre();
        ajoutEvenementFiltreActif();
    }
    
    /**
     * Supprime un element dans le tableau et le rajoute dans le tableau des filtres Actif
     * @param {*} tab 
     * @param {*} element 
     */
    function supprimerFiltreTab(tab, element){
        let index = tab.indexOf(element);
        if (index !== -1){
            tableauFiltreActif.push(element);
            tab.splice(index, 1);
        }
    }

    function ajoutEvenementFiltreActif(){
        tableauFiltreActif.forEach(element => {
            document.getElementById(element).addEventListener("click", supprimeFiltreTag);
        });
    }

    /**
     * Delete the tag on which the user clicked.
     */
    function supprimeFiltreTag(){
        if (this.getAttribute('class').includes("blue_element")){
            tableauIngredients.push(this.id);
            var index = tableauFiltreActif.indexOf(this.id);
            if(index !== -1){
                tableauFiltreActif.splice(index, 1);
            }
            this.parentNode.removeChild(this);
            document.getElementById("filtre_secondaire_composants_ingredient").innerHTML = "";
            displayFiltreIngredients(tableauIngredients);
            initEvenementFiltre();
            
        } else if (this.getAttribute('class').includes("green_element")){
            tableauAppareil.push(this.id);
            var index = tableauFiltreActif.indexOf(this.id);
            if(index !== -1){
                tableauFiltreActif.splice(index, 1);
            }
            this.parentNode.removeChild(this);
            document.getElementById("filtre_secondaire_composants_appareil").innerHTML = "";
            displayFiltreAppareil(tableauAppareil);
            initEvenementFiltre();
        } else if (this.getAttribute('class').includes("orange_element")){
            tableauUstensiles.push(this.id);
            var index = tableauFiltreActif.indexOf(this.id);
            if(index !== -1){
                tableauFiltreActif.splice(index, 1);
            }
            this.parentNode.removeChild(this);
            document.getElementById("filtre_secondaire_composants_ustensiles").innerHTML = "";
            displayFiltreUstensile(tableauUstensiles);
            initEvenementFiltre();
        }
    }
}


/**
 * Vérifie si le nombre de char est supperieur a 2
 * @param {} text 
 * @returns 
 */
function nombreCharMin(text) {
    if (text.length > 2) {
        return true;
    }
    return false;
}

/**
 * Compare 2 string
 * @param {*} text_1 
 * @param {*} text_2 
 * @returns 
 */
function comparaisonString(text_1, text_2) {
    let text_1Up = text_1.toUpperCase();
    let text_2Up = text_2.toUpperCase();
    return text_1Up.includes(text_2Up);
}

/**
 * Initialise le tableau des Ingredients.
 * @param {*} tab 
 * @param {*} data 
 * @returns 
 */
function tableauIngredientsInits(tab, data) {
    data.forEach(element => {
        element.ingredients.forEach(i => {
            if (tab.indexOf(i.ingredient.toLowerCase()) === -1) {
                tab.push(i.ingredient.toLowerCase());
            }
        });
    });

    upPremiereLettre(tab);

    return tab;
}

/**
 * Initialise le tableau des Appareils.
 * @param {*} tab 
 * @param {*} data 
 * @returns 
 */
function tableauAppareilsInit(tab, data) {
    data.forEach(element => {
        if (tab.indexOf(element.appliance.toLowerCase()) === -1) {
            tab.push(element.appliance.toLowerCase());
        }
    });
    upPremiereLettre(tab);
    return tab;
}

/**
 * Initialise le tableau des Ustensiles.
 * @param {*} tab 
 * @param {*} data 
 * @returns 
 */
function tableauUstensilesInit(tab, data) {
    data.forEach(element => {
        element.ustensils.forEach(i => {
            if (tab.indexOf(i.toLowerCase()) === -1) {
                tab.push(i.toLowerCase());
            }
        });
    });
    upPremiereLettre(tab);
    return tab;
}

/**
 * Takes care of the management of the focus of the different filters
 */
function estActif(){
    var ingredientInput = document.getElementById("filtre_ingredients_input");
    var appareilsInput = document.getElementById("filtre_appareils_input");
    var ustensilesInput = document.getElementById("filtre_ustensiles_input");

    if (document.activeElement === ingredientInput){
        noDisplayFocusAppareil(appareilsInput);
        noDisplayFocusUstensiles(ustensilesInput);
    } else if (document.activeElement === appareilsInput){
        noDisplayFocusIngredient(ingredientInput);
        noDisplayFocusUstensiles(ustensilesInput);
    } else if (document.activeElement === ustensilesInput){
        noDisplayFocusIngredient(ingredientInput);
        noDisplayFocusAppareil(appareilsInput);
    } else {
        noDisplayFocusIngredient(ingredientInput);
        noDisplayFocusAppareil(appareilsInput);
        noDisplayFocusUstensiles(ustensilesInput);
    }
    
}

document.getElementById("body").addEventListener("click", estActif);

/**
 * Capitalize the first letter of each word
 * @param {} tab 
 */
function upPremiereLettre(tab){
    for (let i = 0; i < tab.length; i++){
        tab[i] = tab[i][0].toUpperCase() + tab[i].slice(1);
    }
}