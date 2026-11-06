
export default function movementsComponent(data){
    const $movements = document.getElementById("table-movements")
    if (!$movements) return;

    const {id, description, createDate, category, amount} = data
    console.log(data)
    let html = `
        <div class="row" id="${id}">
            <div class="column">
                <div class="point color-${category}"></div>
            </div>
            <div class="column">
                <p class="description">${description}</p>
                <p class="date">${createDate}</p>
            </div>
            <div class="column">
                <p class="category color-${category}-chip">${category}</p>
            </div>
            <div class="column">
                S/ ${amount.toFixed(2,0)}
            </div>
            <div class="column">
                <img class="icon-delete" src="assets/icons/delete.png" alt="Borrar">
            </div>
        </div>
    `;
    $movements.insertAdjacentHTML("afterbegin", html)

}