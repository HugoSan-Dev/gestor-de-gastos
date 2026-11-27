const generarId = () => crypto.randomUUID();
const hoy = () => new Date().toLocaleDateString("en-CA");
const fechaFormateada = (fecha) => new Date(`${fecha}T00:00:00`).toLocaleDateString("en-PE",{
    day: "2-digit",
    month: "short",
    year: "numeric"
})

const currencyFormatter = (amount, currency = 'PEN') => {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
};

export { generarId, hoy, fechaFormateada,currencyFormatter };
