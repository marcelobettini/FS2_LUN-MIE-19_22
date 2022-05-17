import { Outlet, Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Fantasticapp</h1>
        <nav style={{ borderBottom: "solid 1px hotpink", paddingBottom: "1em" }}>
          <Link to="/facturas">Facturas</Link> | {" "}
          <Link to="/remitos">Remitos</Link>
        </nav>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </>

  )
}

export default App
