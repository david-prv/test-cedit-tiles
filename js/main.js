function addTile() {
    /* Init */
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let id = Date.now();
    let new_option = document.createElement("div");
    let new_checkbox = document.createElement("input");
    let new_label = document.createElement("label");

    /* Option */
    new_option.classList.add("option");

    /* Checkbox */
    new_checkbox.type = "checkbox";
    new_checkbox.id = "checkbox-" + id;

    /* Label */
    new_label.classList.add("option-label");
    new_label.htmlFor = "checkbox-" + id;
    new_label.innerText = "Test";

    /* Put everything together */
    new_option.appendChild(new_checkbox);
    new_option.appendChild(new_label);
    wrapper.appendChild(new_option);
}

function deleteLastTile() {
    /* Init */
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let option_elements = document.getElementsByClassName("wrapper")[0].childNodes;
    let cleaned_options = [];

    /* Cleanout */
    Array.prototype.forEach.call(option_elements, function(option_el) {
        if(option_el.tagName !== undefined) {
            cleaned_options.push(option_el);
        }
    });

    /* Removal */
    let last_option = cleaned_options[cleaned_options.length - 1];
    wrapper.removeChild(last_option);
}

function purgeTiles() {
    /* Count necessary  iterations */
    let count = document.getElementsByClassName("option").length;

    /* Reuse delete function */
    for(let i = 0; i<count; i++) {
        deleteLastTile();
    }  
}

function rChange(event) {
    /* Manipulate rows */
    let wrapper = document.getElementsByClassName("wrapper")[0];
    wrapper.classList = "wrapper " + event.target.id;
}