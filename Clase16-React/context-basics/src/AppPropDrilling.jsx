//App renderiza Layout, Layout renderiza Header y este renderiza UserInfo que es el único componente que necesita el estado

import './App.css'
function App() {
  const userName = "Juan Cito" //este es el estado

  return (
    <Layout userName={userName}>
      <p>Aquí va el contenido pasado a Layout a través de la prop especial 'children'. Se va a renderizar en dicho componente.</p>
    </Layout>
  )
}

function Layout({ userName, children }) {
  return (
    <div>
      <main className='child'>
        <Header userName={userName} />
        {children}
      </main>
    </div>
  )
}

function Header({ userName }) {
  return (
    <header>
      <UserInfo userName={userName} />
    </header>
  )
}

function UserInfo({ userName }) {
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.4em' }}>User Name is: {userName}</span>
}

export default App
