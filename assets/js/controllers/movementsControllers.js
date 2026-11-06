import { initMovement, getAllMovement } from "../Storage/movementsLocalStorage.js";
import movementsComponent from "../components/movementsComponents.js";

function allMovementController(){
    const movement = getAllMovement()
    movement.forEach(data => {
        movementsComponent(data)
    });    
}

export {allMovementController}