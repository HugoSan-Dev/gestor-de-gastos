const generarId = () => crypto.randomUUID()?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
const hoy = () => new Date().toLocaleDateString("en-CA");
const fechaFormateada = (fecha) => new Date(`${fecha}T00:00:00`).toLocaleDateString("en-PE",{
    day: "2-digit",
    month: "short",
    year: "numeric"
})
export { generarId, hoy, fechaFormateada };
