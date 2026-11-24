let restricted = false;

function showError(schema, formElement) {

    for (const [property, rules] of Object.entries(schema)) {
        for (const restriccion of rules) {
            if (restriccion) {
                const $restriccion = formElement.querySelector(`.restriccion-${property}`)
                $restriccion.textContent = restriccion

                const $input = document.getElementById(`${property}`)
                $input.style.border = "1px solid var(--color-danger)"
                restricted = true
            }
        }
    };
    if(restricted) {
        restricted = false
        return true
    }else return restricted
}

export default showError;