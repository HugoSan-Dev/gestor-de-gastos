import { movementsData } from "../config/movementsConfig.js"

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

    let found = ""
    for(const key in movements) {
        const dataID = movements[key].id
        if(dataID == id){
            found = movements[key]
            movements.splice(key,1)
        }
    }
    localStorage.setItem(key,JSON.stringify(movements))

    return found

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
    if (!data) return 0

    let dataparse =JSON.parse(data)
    dataparse.push(...object)

    localStorage.setItem(key, JSON.stringify(dataparse))

    return 1
}

function deleteMovement(id){
    const $element = document.getElementById(id)
    $element.remove()

    let found = findByIdMovement(id)
    console.log(found)
    return found
}


export {initMovement, getAllMovement, registerMovement, deleteMovement,findCategoryMovement}

