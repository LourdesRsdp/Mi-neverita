image = "images\\cute-cartoon-fridge-freezer-illustrated-146180101.jpg";

document.getElementById("fridge").src = image;

const fridge = {
    fruits: null,
    vegetables: null,
    dessert: null,
};

function createFruit(cantidad, color, nombre) {
    const fruit = {
        quantity: cantidad,
        name: nombre,
        color: color,

    }

    return fruit();
}

function createTomato(cantidad) {
    const tomato = createFruit(cantidad, "Rojo", "Tomato");

    return tomato;
}

function createBanana(cantidad) {
    const banana = createFruit(cantidad, "yellow", "Banana");

    return banana;
}

function createPear(cantidad) {
    const pear = createFruit(cantidad, "green", "Pear");

    return pear;
}

function createVegetable(quantity, color, name, vitamin) {
    const vegetable = {

        quantity: quantity,
        color: color,
        name: name,
        vitamin: vitamin
    }
    return vegetable;
}

function createCarrot(quantity) {
    const carrot = createVegetable(quantity, "orange", "carrot", "Vit D");

    return carrot;
}

function createOnion(quantity) {
    const onion = createVegetable(quantity, "white", "onion", "Vit C");

    return onion;
}

function createBrocoli(quantity) {
    const brocoli = createVegetable(quantity, "green", "brocoli", "All kinds of Vitamin");

    return brocoli;
}