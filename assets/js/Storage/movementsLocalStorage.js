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
        category : "transport",
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

function registerMovement(...object){
    let data = localStorage.getItem(key)
    let dataparse =JSON.parse(data)
    dataparse.push(...object)

    localStorage.setItem(key, JSON.stringify(dataparse))
    
    console.log(data)
}


export {initMovement, getAllMovement, registerMovement}

