import { allMovementController, registerMovementController } from '../js/controllers/movementsControllers.js';
import { initMovement } from './Storage/movementsLocalStorage.js';
import { generarId } from './utils.js';
import { required, maxLength } from './validator.js';

function formMovement() {
    const $register_HTML = document.getElementById("register")
    $register_HTML.addEventListener('click', () => {
        const $restriccion = document.querySelectorAll(".restriccion")
        if (!$restriccion) return console.log("no existen HTML de restricciones")

        const description = document.getElementById('description')
        const amount = document.getElementById("amount")
        const createDate = document.getElementById("createDate")
        const category = document.getElementById("category")

        const schema = {
            description: [required(description.value), maxLength(description.value, 30)],
            amount: [required(amount.value)],
            createDate: [required(createDate.value)],
            category: [required(category.value)]
        }

        let restricted = false
        
        for (const [property, rules] of Object.entries(schema)) {
            for (const restriccion of rules) {
                if (restriccion) {
                    document.querySelector(`.restriccion-${property}`).textContent = restriccion
                    restricted = true
                }
            }
        }
        if (restricted) {
            return console.log("Datos Invalidos, por favor  vuelve a registrar")
        }

        const verified = {
            id: generarId(),
            description: description.value,
            amount: parseFloat(amount.value),
            category: category.value,
            createDate: createDate.value
        }

        registerMovementController(verified)
        allMovementController()
        
        description.value = ""
        amount.value = ""
        createDate.value = ""

        $restriccion.forEach(element => element.textContent = "")

        
    })
}

function initMethods() {
    initMovement()
    allMovementController()
    formMovement()
}


window.addEventListener('DOMContentLoaded', initMethods())
