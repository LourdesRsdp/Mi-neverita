import { productTypes } from "../Models/ProductTypes";
import { AddOptionsToSelect, AddEventToSelect } from "../Utils/utils";

function initialize() {

    AddOptionsToSelect("productTypes", productTypes);

    const pepe = () => {
        const selectauxiliar = document.getElementById("selector2");

        if (selectauxiliar == null) {
            const selector2 = document.createElement("select");
            selector2.setAttribute("id", "selector2");
            const container = document.getElementById("selector");

            container.appendChild(selector2);

            const option1 = new Option("Opción 1", "valor1");
            const option2 = new Option("Opción 2", "valor2");
            selector2.add(option1);
            selector2.add(option2);
        }
    };

    AddEventToSelect("productTypes", "change", pepe);
}

export { initialize };

//holaaaaaa