
function required(campo){
    console.log(campo)
    if (campo.trim()) {
        return "";
    }
    return "Campo Obligatorio"
}

function maxLength(campo, limit){
    return [...campo.replace(/\s+/g,'')].length > limit ? `Maximo: ${limit} caracteres` : ""
}


export {required,maxLength}