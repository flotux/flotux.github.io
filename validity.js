/**
 * check the validity of numbers inputs.
 * call a function to inlight then if they value is 0.
 * @param  {[object]} Element [numbers inputs DOM elements]
 * @return {[bool]}     true : if all the param is valid number.
 * 
 */
 function numberInputValidation(...inputs) {  
    var paramValidity = true;
    inputs.forEach(element => {
       if (!element.value || element.value <= 0) {
           numberInputInlight(element);
           paramValidity = false;
       } else {
        element.classList.remove("is-danger");
       }
    });

    return paramValidity;
}

function numberInputInlight(input) {
    input.classList.add("is-danger");
    input.value="";
    input.placeholder='Entrer un nombre sup. à 0';
}