import { productTypes } from "./Models/ProductTypes";
import { AddOptionsToSelect } from "./Utils/utils";

AddOptionsToSelect("productTypes", productTypes);  

function AddEventToSelect(selectId) {
    
    const select = document.getElementById(selectId);
    select.addEventListener("change", event => {
        const selector2 = document.createElement("select");
        const container = document.getElementById("selector");
        container.appendChild(selector2);
    });
    
};

AddEventToSelect("productTypes");












