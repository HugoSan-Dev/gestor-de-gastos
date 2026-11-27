import { getBalance } from "../Storage/balanceLocalStorage.js";
import { totalMovements } from "../Storage/movementsLocalStorage.js";
import { currencyFormatter } from "../utils.js";

function showBalance(){
    const currentBalance = getBalance()
    if (currentBalance == null) return console.warn("Error Controller: No existe un saldo")

    const $card = document.querySelector(".card-balance")
    if(!$card) return console.warn("Error: No se encontro elemento en el DOM");

    $card.querySelector(".card-mount").textContent = `${currencyFormatter(currentBalance)}`
    $card.querySelector(".card-type").textContent = `${totalMovements()} gastos registrados`
}


export {showBalance}