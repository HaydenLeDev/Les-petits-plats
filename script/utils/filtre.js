import { displayRecettes, displayFiltreIngredients, displayFocus } from "../utils/display.js";
export{initFiltre}



function initFiltre(data){

    

    document.getElementById("filtre_titre_input").addEventListener('keyup', rechercheTitre);
    document.getElementById("filtre_ingredients_input").addEventListener('keyup', rechercheFiltre);
    document.getElementById("filtre_ingredients_input").addEventListener('keyup', displayFocus);

    function rechercheTitre(){
        let inputUser = this.value;
        let result= [];
        if (nombreCharMin(inputUser)){
            document.getElementById("liste_recette").innerHTML="";
            data.forEach(element => {
                console.log(element.name);
                if (comparaisonString (element.name, inputUser)){
                    result.push(element);
                }
            });
            console.log(result);
            if (result.length == 0 ){
                document.getElementById("recette_null").style.display = "flex";
            } else{
                document.getElementById("recette_null").style.display = "none";
                displayRecettes(result);
            }
            
        } else {
            document.getElementById("liste_recette").innerHTML="";
            displayRecettes(data);
        }
    }

    function rechercheFiltre(){
        let inputUser = this.value;
        var tableauIngredients = [];
        var result = [];
        tableauIngredients = tableauIngredientsInits(tableauIngredients, data);
        displayFiltreIngredients(tableauIngredients);
        if(nombreCharMin(inputUser)){
            tableauIngredients.forEach(element => {
                if (comparaisonString (element, inputUser)){
                    result.push(element);
                }
            });
            console.log(result);
            document.getElementById("filtre_secondaire_composants_ingredient").innerHTML="";
            displayFiltreIngredients(result);
        }
    }
}



function nombreCharMin(text){
    if (text.length > 2){
        return true;
    }
    return false;
}

function comparaisonString (text_1, text_2){
    let text_1Up = text_1.toUpperCase();
    let text_2Up = text_2.toUpperCase();
    return text_1Up.includes(text_2Up);
}

function tableauIngredientsInits (tab, data){
    data.forEach(element => {
        element.ingredients.forEach(i => {   
            if(tab.indexOf(i.ingredient) === -1){
                console.log(i.ingredient);
                tab.push(i.ingredient);
            }
        });
    });
    return tab;
}