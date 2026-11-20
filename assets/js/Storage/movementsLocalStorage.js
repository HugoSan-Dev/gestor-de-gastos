let movementsData = [
    {
        id : "ad123",
        description: "Almuerzo menú",
        amount : 18,
        category : "meal",
        createDate : '05 Nov. 2026'
    },
    {
        id :"dasd2",
        description: "Recarga de tarjeta",
        amount : 20,
        category : "services",
        createDate : "03 Nov. 2026"
    },
    {
        id :"da231d",
        description: "Recibo de internet",
        amount : 89.90,
        category : "services",
        createDate : "02 Nov. 2026"
    }
]

const key = "MOVEMENTS"

function initMovement(){
    if (localStorage.getItem(key)?? false) return
    localStorage.setItem(key, JSON.stringify(movementsData))
}

function getAllMovement(){
    let data = localStorage.getItem(key)
    if(!data) return console.log("Error: No se pudo obtener Movimientos - LS")
    
    return JSON.parse(data)
}

function findByIdMovement(id){
    let data = localStorage.getItem(key)
    if(!data) return console.log("Error: No se pudo obtener Movimientos - LS")
    const movements = JSON.parse(data)
    for(const key in movements) {
        const dataID = movements[key].id
        if(dataID == id){
            movements.splice(key,1)
        }
    }
    localStorage.setItem(key,JSON.stringify(movements))
}

function findCategoryMovement(category){
    let data = localStorage.getItem(key)
    let findCategory = []
    if(!data) return console.log("Error: No se pudo obtener Movimientos - LS")

    const movements = JSON.parse(data)

    for(const key in movements) {
        const dateCategory = movements[key].category
        if(category == dateCategory){
            findCategory.push(movements[key])
        }
    }
    return findCategory
}

function registerMovement(...object){
    let data = localStorage.getItem(key)
    let dataparse =JSON.parse(data)
    dataparse.push(...object)

    localStorage.setItem(key, JSON.stringify(dataparse))
}

function deleteMovement(id){
    
    const $element = document.getElementById(id)
    $element.remove()
    findByIdMovement(id)
}


export {initMovement, getAllMovement, registerMovement, deleteMovement,findCategoryMovement}

