import { allMovementController, registerMovementController, deleteMovementController, showCategoryMovementsControllers } from '../js/controllers/movementsControllers.js';
import { initMovement } from './Storage/movementsLocalStorage.js';
import { generarId } from './utils.js';
import { required, maxLength } from './validator.js';
import showError from './ShowErrorForm/showError.js';
import movementsComponent from './components/movementsComponents.js';

function formMovement() {
    const $register_HTML = document.getElementById("register")
    if(!$register_HTML) return

    $register_HTML.addEventListener('click', () => {
        const $restriccion = document.querySelectorAll(".restriccion")
        const $inputs = document.querySelectorAll(".input-clean")
        if (!$restriccion || !$inputs) return console.log("no se encontaro elementos: input , restriccion")
        
        $inputs.forEach(input => input.style.border = "1px solid var(--color-border)")
        $restriccion.forEach(element =>{element.textContent = ""})

        const $formExpenses = document.querySelector(".expense")
        const $description = document.getElementById('description')
        const $amount = document.getElementById("amount")
        const $createDate = document.getElementById("createDate")
        const $category = document.getElementById("category")

        const schema = {
            description: [required($description.value), maxLength($description.value, 30)],
            amount: [required($amount.value)],
            createDate: [required($createDate.value)],
            category: [required($category.value)]
        }

        let pcall = showError(schema, $formExpenses)

        if (pcall) return console.log("¿Tiene errores? ", pcall)
        else console.log("No hubo error, pasa validación")

        
        const validated = {
            id: generarId(),
            description: $description.value,
            amount: parseFloat($amount.value),
            category: $category.value,
            createDate: $createDate.value
        }
        const success = registerMovementController(validated)
        if (success == 1){
            console.log("Se registro cone exito - mostrar toast success")
            movementsComponent(validated)
        }else{
            console.log("Hubo un problema en el registro - intentalo luego")
            return
        }

        $formExpenses.reset()
    })
}

function deleteMovementForm(){
    const $btnAceptar = document.getElementById("btnAceptar")
    const $btnCancelar = document.getElementById("btnCancelar")
    if(!$btnAceptar || !$btnCancelar) return 
    const $modal = document.getElementById("modal-delete")

    $btnCancelar.addEventListener('click', () =>{
        $modal.dataset.id = ""
        $modal.close()
    })

    $btnAceptar.addEventListener('click', () => {
        deleteMovementController($modal.getAttribute("data-id"))
        $modal.dataset.id = ""
        $modal.close()
    })
}

/*  
function filterCategoryMovement(){
    let $filtersItems = document.querySelectorAll(".filters-item")
    if(!$filtersItems) return
    $filtersItems.forEach(filter =>{
        filter.addEventListener("click", () => {
            const category = filter.id
            if (category !== "all") return showCategoryMovementsControllers(category)
            allMovementController()
        })
    })
}
*/
function initMethods() {
    initMovement()
    allMovementController()
    formMovement()
    deleteMovementForm()
    /* filterCategoryMovement() */
}


window.addEventListener('DOMContentLoaded', initMethods())
