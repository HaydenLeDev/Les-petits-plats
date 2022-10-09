/**
 * This file builds the HTML for recipes
 */

export {recetteFactory};

/**
 * Create a recipe card with the data received.
 * @param {*} recette 
 * @returns a recette card
 */
function recetteFactory(recette){
    const {name, ingredients, time, description} = recette;
    
    function getRecetteCardDOM(){
        const card = document.createElement("div");
        const image = document.createElement("div");
        const infoCard = document.createElement("div");
        const infoMinute = document.createElement("div");
        const infoCardPrincipal = document.createElement("div");
        const infoCardSecondaire = document.createElement("div");
        const titre = document.createElement("h2");
        const descript = document.createElement("p");
        const min = document.createElement("p");
        const horloge = document.createElement("i");
        const ingredientListe = document.createElement("div");

        card.classList.add("card");
        image.classList.add("card-image");
        infoCard.classList.add("card-info");
        infoMinute.classList.add("card-info-minutes");
        infoCardPrincipal.classList.add("card-info-principal");
        infoCardSecondaire.classList.add("card-info-secondaire");
        titre.classList.add("card-info-titre");
        min.classList.add("card-info-min");
        horloge.setAttribute("class", "far fa-clock");
        ingredientListe.classList.add("card-info-ingredients");
        descript.classList.add("card-info-description");

        titre.textContent = name;
        min.textContent = time + " min";

        ingredients.forEach(i => {
            const ingredientItem = document.createElement("div");
            const ingredientName = document.createElement("p");
            const nombre = document.createElement("p");
            ingredientItem.classList.add("card-info-secondaire-ingredients");
            ingredientName.classList.add("card-info-secondaire-ingredients-name");
            nombre.classList.add("card-info-secondaire-ingredients-nombre");
            ingredientName.textContent = i.ingredient;
            if (i.quantity === undefined){
                nombre.textContent = "";
            } else if (i.unit === undefined){
                nombre.textContent = ": " + i.quantity;
            } else {
                nombre.textContent = ": " + i.quantity + " " + i.unit;
            }
 
            ingredientItem.appendChild(ingredientName);
            ingredientItem.appendChild(nombre);
            ingredientListe.appendChild(ingredientItem);
            
        });



        descript.textContent = description;

        infoMinute.appendChild(horloge);
        infoMinute.appendChild(min);

        infoCardPrincipal.appendChild(titre);
        infoCardPrincipal.appendChild(infoMinute);

        infoCardSecondaire.appendChild(ingredientListe);
        infoCardSecondaire.appendChild(descript);

        infoCard.appendChild(infoCardPrincipal);
        infoCard.appendChild(infoCardSecondaire);

        card.appendChild(image);
        card.appendChild(infoCard);

        return card;
    }

    return{getRecetteCardDOM}

}

