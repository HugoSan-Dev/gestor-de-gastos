const KEY = "BALANCE"

function initBalance(){
    const balance = localStorage.getItem(KEY)
    if(balance == null) {
        localStorage.setItem(KEY, 10000)
    }
    
    return JSON.parse(balance)
}

function UpdateBalance(amount, operation){
    const balance = localStorage.getItem(KEY)
    if(!balance) return 0;
    let balacenCurrent = JSON.parse(balance)
    if( operation == "decrement"){
        if (balacenCurrent >= amount){
            balacenCurrent -= amount
            localStorage.setItem(KEY, JSON.stringify(balacenCurrent))
            return balacenCurrent
        }
    }else if (operation == "increment"){
        balacenCurrent += amount
        localStorage.setItem(KEY, JSON.stringify(balacenCurrent))
        return balacenCurrent
    }

    return "Saldo Insuficiente";
}

function getBalance(){
    const balance = localStorage.getItem(KEY)
    if(balance == null) return 0;
    return JSON.parse(balance);
}



export { initBalance, UpdateBalance, getBalance}