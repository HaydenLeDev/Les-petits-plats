export {filtreFactory};

function filtreFactory(elementFiltre) {

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

    function getElementFiltreActif(){
        const elementFiltreLi = document.createElement("li");
        const spanText = document.createElement("span");
        elementFiltreLi.classList.add("element_filtre_actif");
        spanText.classList.add("element_filtre_actif_text");
        spanText.textContent = elementFiltre;
        elementFiltreLi.appendChild(spanText);
        return elementFiltreLi;
    }

    return {getFiltreButtonDOM, getElementFiltreActif};
}