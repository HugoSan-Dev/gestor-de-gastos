
function required(campo){
    if (campo.trim()) {
        return "";
    }
    return "Campo Obligatorio"
}

function maxLength(campo, limit){
    return [...campo.replace(/\s+/g,'')].length > limit ? `Máximo: ${limit} caracteres` : ""
}


export {required,maxLength}