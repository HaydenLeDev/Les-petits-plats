/**
 * This file builds the html for the tags
 */

export {filtreFactory};

/**
 * Constructs a filter element with received data.
 * @param {*} elementFiltre 
 * @returns 
 */
function filtreFactory(elementFiltre) {

    /**
     * Constructs a button tag
     * @returns 
     */
    function getFiltreButtonDOM(){
        const elementButton = document.createElement("button");
        const spanText = document.createElement("span");
        elementButton.classList.add("element_button_filtre");
        elementButton.setAttribute("id", elementFiltre);
        spanText.classList.add("element_button_filtre_text");
        spanText.textContent = elementFiltre;
        elementButton.appendChild(spanText);
        return elementButton;
    }

    /**
     * Construct a tag
     * @returns 
     */
    function getElementFiltreActif(){
        const elementFiltreLi = document.createElement("li");
        const spanText = document.createElement("span");
        const ico = document.createElement("i");
        elementFiltreLi.classList.add("element_filtre_actif");
        ico.setAttribute("class", "far fa-times-circle");
        elementFiltreLi.setAttribute("id", elementFiltre.id);
        spanText.classList.add("element_filtre_actif_text");
        spanText.textContent = elementFiltre.id;

        //On regarde si de quel catégorie est le parent.
        if (elementFiltre.parentElement.id === "filtre_secondaire_composants_ingredient"){
            elementFiltreLi.classList.add("blue_element");
        } else if(elementFiltre.parentElement.id === "filtre_secondaire_composants_appareil"){
            elementFiltreLi.classList.add("green_element");
        } else if(elementFiltre.parentElement.id === "filtre_secondaire_composants_ustensiles"){
            elementFiltreLi.classList.add("orange_element");
        }
        
        elementFiltreLi.appendChild(spanText);
        elementFiltreLi.appendChild(ico);
        return elementFiltreLi;
    }

    return {getFiltreButtonDOM, getElementFiltreActif};
}