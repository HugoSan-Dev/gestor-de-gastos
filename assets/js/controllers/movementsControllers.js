import { getAllMovement, registerMovement,deleteMovement, findCategoryMovement } from "../Storage/movementsLocalStorage.js";
import movementsComponent from "../components/movementsComponents.js";

function allMovementController(){
    const $movements = document.getElementById("table-movements")
    if (!$movements) return;
    const $row = $movements.querySelectorAll(".row")
    $row.forEach(element =>{
        element.remove()
    })


    const $empty_HTML = document.querySelector(".data-empty")
    const movement = getAllMovement()
    $empty_HTML.style.display = movement.length > 0 ? 'none' : 'flex'

    movement.forEach(data => {
        movementsComponent(data)
    });    
}

function showCategoryMovementsControllers(category){
    const $movements = document.getElementById("table-movements")
    if (!$movements) return;
    const $row = $movements.querySelectorAll(".row")
    $row.forEach(element =>{
        element.remove()
    })


    const $empty_HTML = document.querySelector(".data-empty")
    const movement = findCategoryMovement(category)
    if (!movement) return console.log("No se encontraron las categorias : ERROR")
        
    $empty_HTML.style.display = movement.length > 0 ? 'none' : 'flex'

    movement.forEach(data => {
        movementsComponent(data)
    });    
}

function registerMovementController(form){
    return registerMovement(form)
}

function deleteMovementController(id){
    let elementDelete = deleteMovement(id)
    return elementDelete
}


export {allMovementController,registerMovementController, deleteMovementController, showCategoryMovementsControllers}