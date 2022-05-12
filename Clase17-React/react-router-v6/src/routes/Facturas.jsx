import { Outlet, Link } from "react-router-dom"
import { getFacturas } from "../data"
const Facturas = () => {
    let facturas = getFacturas()
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ borderRight: "1px solid", padding: '1em' }}>
                {facturas.map((factura) =>
                    <Link
                        style={{ display: "block", margin: "1rem" }}
                        to={`/facturas/${factura.number}`}
                        key={factura.number}>{factura.name}</Link>
                )}
            </nav>
            <Outlet />
        </div>

    )
}
export default Facturas