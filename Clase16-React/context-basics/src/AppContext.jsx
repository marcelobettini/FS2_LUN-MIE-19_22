//Esta es la versión con el hook useContext, para resolver el problema de prop drilling. En este caso sí es evidente el dilema, pues el componente UserInfo es el único que necesita conocer el estado (donde se encuentra el nombre del usuario) pero se renderiza en el fondo del árbol de componentes. Por lo tanto, Layout y Header pasan el estado pero no lo utilizan. 

//lo primero es crear un contexto
import { createContext, useContext } from 'react'
const UserContext = createContext("unknown") //lo inicializamos


import './App.css'
function App() {
  const userName = "Jane Doe" //este es el estado

  return (
    <UserContext.Provider value={userName}>
      <Layout>
        <p>Aquí va el contenido pasado a Layout a través de la prop especial 'children'. Se va a renderizar en dicho componente.</p>
      </Layout>
    </UserContext.Provider>
  )
}

function Layout({ children }) {
  return (
    <div>
      <main className='child'>
        <Header />
        {children}
      </main>
    </div>
  )
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  )
}

function UserInfo() {
  const userName = useContext(UserContext)
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.4em' }}>User Name is: {userName}</span>
}

export default App
