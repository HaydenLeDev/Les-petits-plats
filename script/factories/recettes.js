export {recetteFactory};

function recetteFactory(recette){
    const {id, name, servings, ingredients, time, description, appliance, ustensils} = recette;
    
    function getRecetteCardDOM(){
        const info = document.createElement("p");
        info.textContent = description;
        return info;
    }

    return{getRecetteCardDOM}

}

