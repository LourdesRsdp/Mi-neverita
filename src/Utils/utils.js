const AddOptionsToSelect = (selectName, optionsArray) => {
    
    var select = document.getElementById(selectName);

    for (var i = 0; i < optionsArray.length; i++) {
        var opt = optionsArray[i];
    
        var option = document.createElement("option");
        option.text = opt;
        option.value = opt;
    
        select.add(option);
    }  
}

export { AddOptionsToSelect };