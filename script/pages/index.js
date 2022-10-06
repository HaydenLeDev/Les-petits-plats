import {recipes} from "../../data/recipes.js";
import { initFiltre } from "../utils/filtre.js";
import { displayRecettes } from "../utils/display.js";

var data;

async function getData(){
    data = recipes;
}


getData();
displayRecettes(data);
initFiltre(data);