import {allMovementController, registerMovementController} from '../js/controllers/movementsControllers.js';
import { initMovement } from './Storage/movementsLocalStorage.js';
import { generarId } from './utils.js';

function formMovement(){
    const $register_HTML = document.getElementById("register")
    $register_HTML.addEventListener('click', () => {
        const data = {
            id: generarId(),
            description: document.getElementById("description").value,
            amount: document.getElementById("amount").value == "" ? 0 : "",
            createDate: document.getElementById("date").value,
            category: document.getElementById("category").value,
        }
        registerMovementController(data)
    })
}

function initMethods(){
    initMovement()
    allMovementController()
    formMovement()
}


window.addEventListener('DOMContentLoaded', initMethods())
