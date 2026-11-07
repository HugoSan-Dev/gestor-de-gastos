import { initMovement, getAllMovement, registerMovement } from "../Storage/movementsLocalStorage.js";
import movementsComponent from "../components/movementsComponents.js";

function allMovementController(){
    const $empty_HTML = document.querySelector(".data-empty")
    const movement = getAllMovement()
    console.log($empty_HTML)
    $empty_HTML.style.display = movement.length > 0 ? 'none' : 'flex'

    movement.forEach(data => {
        console
        movementsComponent(data)
    });    
}

function registerMovementController(form){
    registerMovement(form)
}

export {allMovementController,registerMovementController}