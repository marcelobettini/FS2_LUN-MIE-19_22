import { useParams } from "react-router-dom"
export default function Factura() {
    const params = useParams()
    return <h3 style={{ marginLeft: "2em" }}>Factura: {params.id}</h3>
}