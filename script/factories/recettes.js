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

        card.classList.add("card");
        image.classList.add("card-image");
        infoCard.classList.add("card-info");
        infoCardPrincipal.classList.add("card-info-principal");
        titre.classList.add("card-info-titre");
        min.classList.add("card-info-min");
        descript.classList.add("card-info-description");

        titre.textContent = name;
        min.textContent = time + " min";
        descript.textContent = description;

        infoCardPrincipal.appendChild(titre);
        infoCardPrincipal.appendChild(min);

        infoCardSecondaire.appendChild(descript)

        infoCard.appendChild(infoCardPrincipal);
        infoCard.appendChild(infoCardSecondaire);

        card.appendChild(image);
        card.appendChild(infoCard);

        return card;
    }

    return{getRecetteCardDOM}

}

