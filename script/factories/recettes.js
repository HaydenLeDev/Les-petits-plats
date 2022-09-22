export {recetteFactory};

function recetteFactory(recette){
    const {id, name, servings, ingredients, time, description, appliance, ustensils} = recette;
    
    function getRecetteCardDOM(){
        const card = document.createElement("div");
        const image = document.createElement("div");
        const infoCard = document.createElement("div");
        const infoCardPrincipal = document.createElement("div");
        const infoCardSecondaire = document.createElement("div");
        const titre = document.createElement("h2");
        const descript = document.createElement("p");
        const min = document.createElement("p");
        const ingredientListe = document.createElement("div");

        card.classList.add("card");
        image.classList.add("card-image");
        infoCard.classList.add("card-info");
        infoCardPrincipal.classList.add("card-info-principal");
        titre.classList.add("card-info-titre");
        min.classList.add("card-info-min");
        ingredientListe.classList.add("card-info-ingredients");
        descript.classList.add("card-info-description");

        titre.textContent = name;
        min.textContent = time + " min";
        ingredientListe = getIngredientsElement();
        descript.textContent = description;

        infoCardPrincipal.appendChild(titre);
        infoCardPrincipal.appendChild(min);

        infoCardSecondaire.appendChild(ingredientListe);
        infoCardSecondaire.appendChild(descript);

        infoCard.appendChild(infoCardPrincipal);
        infoCard.appendChild(infoCardSecondaire);

        card.appendChild(image);
        card.appendChild(infoCard);

        return card;
    }
    
    function getIngredientsElement(){
        const ingredientList = document.createElement("div");
        ingredients.forEach(i => {
            const ingredientItem = document.createElement("div");
            const ingredientName = document.createElement("p");
            const nombre = document.createElement("p");

            ingredientName.textContent = i.ingredient;
            nombre.textContent = i.quantity + " " + i.unit;
            console.log(nombre);    
            ingredientItem.appendChild(ingredientName);
            ingredientItem.appendChild(nombre);
            ingredientList.appendChild(ingredientItem);
            
        });
        return ingredientList;

    }

    return{getRecetteCardDOM}

}

