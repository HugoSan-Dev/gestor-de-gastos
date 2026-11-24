
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

    const card = template.content.firstElementChild;
    card.id = id
    
    card.querySelector(".description").textContent = description
    card.querySelector(".date").textContent = createDate
    card.querySelector(".category").textContent = category
    card.querySelector(".amount").textContent =` S/${amount}`

    card.querySelector(".point").classList.add(`color-${category}`)
    card.querySelector(".category").classList.add(`color-${category}-chip`)

    card.querySelector(".btn-delete").addEventListener("click",() =>{
        $modal.dataset.id = id
        $modal.showModal();
    })
    console.log()
    $movements.prepend(card)

    
}