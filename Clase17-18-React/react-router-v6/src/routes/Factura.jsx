import { useParams } from "react-router-dom"
import { getFactura } from "../data"

export default function Factura() {
    const params = useParams()
    const factura = getFactura(parseInt(params.number)) //Number o + también siven    

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: ".5rem", justifyContent: "center", border: "1px solid", margin: 'auto', minWidth: 240 }}>
            <h4>Factura: {params.number}</h4>
            <p>Nombre: {factura.name}</p>
            <p>Monto: {factura.amount}</p>
            <p>Vence: {factura.due}</p>
        </div>

    )
}