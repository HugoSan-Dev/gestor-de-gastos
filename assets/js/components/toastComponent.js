import movementsComponent from "./movementsComponents.js"
import { registerMovementController } from "../controllers/movementsControllers.js"
import { UpdateBalance } from "../Storage/balanceLocalStorage.js"
import { showBalance } from "../controllers/balanceController.js"

export default function toastComponent(data, movement){
    const $toast = document.querySelector(".toast")
    if(!$toast) return

    const {id, icon, type , description, recover = "none"} = data
    console.log(data)

    const template = document.createElement("template")
    template.innerHTML = `
        <div class="${type}">
            <div class="toast-description d-flex g-1 a-items-center">
                <img src="${icon}" alt="icon">
                ${description}
            </div>
            <p data-id-toast="${recover === "none" ? "" : id }" class="${recover === "none" ? "hidden" : "toast-deshacer show-item"}">Deshacer</p>
        </div>
    `

    const toast = template.content.firstElementChild
    $toast.prepend(toast)
    
    setTimeout(() =>{
        if(!toast) return
        toast.remove()
    },9000)

    const toasteDeshacer = toast.querySelector(".toast-deshacer")
    if(!toasteDeshacer) return
    UpdateBalance(movement.amount,'increment')
    showBalance()
    toasteDeshacer.addEventListener("click", () =>{
        registerMovementController(movement)
        movementsComponent(movement)
        UpdateBalance(movement.amount,'decrement')
        showBalance()
        toast.remove()
    })
    

}