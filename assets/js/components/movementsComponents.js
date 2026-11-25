
export default function movementsComponent(data){
    const $movements = document.getElementById("table-movements")
    const $modal = document.getElementById("modal-delete")
    if (!$movements || !$modal) return;
    
    const {id, description, createDate, category, amount} = data
    
    const template = document.createElement("template")
    template.innerHTML = `
        <div class="row" id="">
            <div class="column">
                <div class="point"></div>
            </div>
            <div class="column">
                <p class="description"></p>
                <p class="date"></p>
            </div>
            <div class="column">
                <p class="category"></p>
            </div>
            <div class="column amount"></div>
            <div id="" class="column btn-delete">
                <img class="icon-delete" src="assets/icons/delete.png" alt="Borrar">
            </div>
        </div>
    `.trim();

    const row = template.content.firstElementChild;
    row.id = id
    
    row.querySelector(".description").textContent = description
    row.querySelector(".date").textContent = createDate
    row.querySelector(".category").textContent = category
    row.querySelector(".amount").textContent =` S/ ${amount.toFixed(2)}`

    row.querySelector(".point").classList.add(`color-${category}`)
    row.querySelector(".category").classList.add(`color-${category}-chip`)

    row.querySelector(".btn-delete").addEventListener("click",() =>{
        $modal.querySelector('.modal-delete-description').textContent = `${description} - S/ ${amount.toFixed(2)}. Esta acción no se puede deshacer.`
        $modal.dataset.id = id
        $modal.showModal();
    })
    $movements.prepend(row)

    
}