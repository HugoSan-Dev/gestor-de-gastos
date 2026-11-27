import { allMovementController, registerMovementController, deleteMovementController, showCategoryMovementsControllers } from '../js/controllers/movementsControllers.js';
import { initMovement } from './Storage/movementsLocalStorage.js';
import { generarId } from './utils.js';
import { required, maxLength } from './validator.js';
import { initBalance, UpdateBalance } from './Storage/balanceLocalStorage.js';
import { showBalance } from './controllers/balanceController.js';
import showError from './ShowErrorForm/showError.js';
import movementsComponent from './components/movementsComponents.js';
import toastComponent from './components/toastComponent.js';

function formMovement() {
    const $register_HTML = document.getElementById("register")
    if (!$register_HTML) return

    $register_HTML.addEventListener('click', () => {
        const $restriccion = document.querySelectorAll(".restriccion")
        const $inputs = document.querySelectorAll(".input-clean")
        if (!$restriccion || !$inputs) return console.log("no se encontaro elementos: input , restriccion")

        $inputs.forEach(input => input.style.border = "1px solid var(--color-border)")
        $restriccion.forEach(element => { element.textContent = "" })

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

        let deductBalance = UpdateBalance(validated.amount, 'decrement')
        if (deductBalance == "No hay saldo") return console.log(`deductBalance: No se registrara un movimiento`);
        
        const success = registerMovementController(validated)
        showBalance()

        if (success == 1) {
            console.log("Se registro cone exito - mostrar toast success")
            movementsComponent(validated)
            const toast = {
                id : validated.id,
                icon: "assets/icons/check.png",
                type: "toast-register",
                description: "Gasto agregado",
            }
            toastComponent(toast)

        } else {
            console.log("Hubo un problema en el registro - intentalo luego")
            return
        }
        $formExpenses.reset()

        const $expense = document.querySelector(".expense")
        $expense.classList.remove("expense-show-mobile")
    })
}

function deleteMovementForm() {
    const $btnAceptar = document.getElementById("btnAceptar")
    const $btnCancelar = document.getElementById("btnCancelar")
    if (!$btnAceptar || !$btnCancelar) return

    const $modal = document.getElementById("modal-delete")

    $btnCancelar.addEventListener('click', () => {
        $modal.dataset.id = ""
        $modal.querySelector('.modal-delete-description').textContent = ""
        $modal.close()
    })

    $btnAceptar.addEventListener('click', () => {
        const toast = {
            id : $modal.dataset.id,
            icon: "assets/icons/trash.png",
            type: "toast-delete",
            description: "Gasto eliminado",
            recover: 1
        }
        let elementDelete = deleteMovementController($modal.getAttribute("data-id"))
        
        $modal.dataset.id = ""
        $modal.querySelector('.modal-delete-description').textContent = ""
        
        $modal.close()
        toastComponent(toast, elementDelete)
    })
}


function filterCategoryMovement() {
    let $filtersItems = document.querySelectorAll(".filters-item")
    if (!$filtersItems) return
    $filtersItems.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.id
            activeCategoryElement(category)
            if (category !== "all") return showCategoryMovementsControllers(category)
            allMovementController()
        })
    })
}

function activeCategoryElement(category) {
    const $categorys = document.querySelectorAll(".filters-item")
    $categorys.forEach(element => {
        if(element.classList.contains("filters-item-active")){
            return element.classList.remove("filters-item-active")
        }
    })
    document.getElementById(category).classList.add("filters-item-active")
}

function showFormMobile(){
    const btnAddMobile = document.querySelector(".btn-add-mobile")
    const $expense = document.querySelector(".expense")
    btnAddMobile.addEventListener("click", () =>{
        console.log($expense)
        $expense.classList.add("expense-show-mobile")
    })
}

function hiddenFormMobile(){
    const btnExitMobile = document.querySelector(".btn-exit")
    const $expense = document.querySelector(".expense")
    btnExitMobile.addEventListener("click", () =>{
        console.log($expense)
        $expense.classList.remove("expense-show-mobile")
    })
}

function initMethods() {
    initMovement()
    initBalance()

    showBalance()
    allMovementController()
    formMovement()
    deleteMovementForm()
    filterCategoryMovement()
    showFormMobile()
    hiddenFormMobile()
}


window.addEventListener('DOMContentLoaded', initMethods())
