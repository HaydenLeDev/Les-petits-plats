export {filtreFactory};

function filtreFactory(elementFiltre) {

    function getFiltreButtonDOM(){
        const elementButton = document.createElement("button");
        const spanText = document.createElement("span");
        elementButton.classList.add("element_button_filtre");
        spanText.classList.add("element_button_filtre_text");
        spanText.textContent = elementFiltre;

        elementButton.appendChild(spanText);
        return elementButton;
    }

    return {getFiltreButtonDOM};
}