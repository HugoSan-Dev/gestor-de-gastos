const generarId = () => crypto.randomUUID();
const hoy = () => new Date().toLocaleDateString("en-CA");
const fechaFormateada = (fecha) => new Date(`${fecha}T00:00:00`).toLocaleDateString("en-PE",{
    day: "2-digit",
    month: "short",
    year: "numeric"
})
export { generarId, hoy, fechaFormateada };
