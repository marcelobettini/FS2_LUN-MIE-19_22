import { Outlet, NavLink, useSearchParams, useLocation } from "react-router-dom"

function QueryNavLink({ to, ...props }) {
    let location = useLocation()
    return <NavLink to={to + location.search} {...props} />
}


import { getFacturas } from "../data"
const Facturas = () => {
    let facturas = getFacturas()
    let [searchParams, setSearchParams] = useSearchParams()
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ borderRight: "1px solid", padding: '1em' }}>

                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({})
                        }
                    }} />

                {facturas.filter((factura) => {
                    let filter = searchParams.get("filter")
                    if (!filter) return true
                    let name = factura.name.toLowerCase();
                    return name.includes(filter.toLowerCase())
                })
                    .map((factura) =>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    color: isActive ? "hotpink" : null
                                }
                            }}
                            to={`/facturas/${factura.number}`}
                            key={factura.number}
                        >
                            {factura.name}
                        </NavLink>
                    )}
            </nav>
            <Outlet />
        </div>

    )
}
export default Facturas